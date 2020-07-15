import {useHistory, useParams} from "react-router";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {Button} from "@material-ui/core";
import React from "react";

type Props = {
    item: FoundMatch;
    removeItem: (id: number) => void;
}

type Match = {
    lostid:number,
    foundid:number,
}

type FoundMatch = {
    id: number;
    name: string;
    phone: string;
    email: string;
    category: string;
    subcategory: string;
    color: string;
    status: string;
    line: string;
    date: string;
    brand: string;
    description: string;
};

function MatchDetails(props:Props) {
    const {id} = useParams();
    const history = useHistory()

    //TODO Better code for network calls catching errors etc

    const confirmMatch = () => {
        const registerMatchPromise = registerMatch({lostid:id, foundid:props.item.id})
            .then(response => {
                if (response.status === 409){
                    //TODO
                    throw new Error("Conflict")
                }
                else if(response.status === 200){
                    const lostPromise = updateLostStatus(id)
                    const foundPromise = updateFoundStatus(props.item.id);
                    Promise.all([lostPromise, foundPromise])
                        .then(data => {
                            //TODO: error handling
                            props.removeItem(id);
                            history.replace("/admin/henvendelser");
                        })
                        .catch()
                }
            })
            //TODO
            .catch()



    }


    const registerMatch = (payload: Match) => {
        return fetch("/api/admin/match", {
            method: "post",
            body: JSON.stringify(payload),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    }

    const updateLostStatus = (id: number) => {
        return fetch("/api/admin/lost/"+id+"/status", {
            method: "put",
            body: JSON.stringify({status:"Til utlevering"}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    }

    const updateFoundStatus = (id: number) => {
        return fetch("/api/admin/found/"+id, {
            method: "put",
            body: JSON.stringify({status:"Til utlevering", name:props.item.name,
                phone:props.item.phone, email:props.item.email,
                category:props.item.category, subCategory: props.item.subcategory,
                color: props.item.color,
                brand: props.item.brand,
                description: props.item.description,  line: props.item.line}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    }


    return(
        <div>

            <Paper>
                <h6>Detaljvisning for {props.item.subcategory} - {props.item.brand}</h6>
                <Table size="small">
                    <TableContainer>
                        <TableBody>
                            <TableRow>
                                <TableCell>ID: </TableCell>
                                <TableCell>{props.item.id}</TableCell>
                                <TableCell>Status: </TableCell>
                                <TableCell>{props.item.status}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Farge: </TableCell>
                                <TableCell>{props.item.color}</TableCell>
                                <TableCell>Registreringsdato: </TableCell>
                                <TableCell>{props.item.date.slice(0,10)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Beskrivelse: </TableCell>
                                <TableCell colSpan={3}>{props.item.description}</TableCell>
                            </TableRow>
                            <TableRow>

                            </TableRow>
                        </TableBody>
                    </TableContainer>
                </Table>
                <Button onClick={() => confirmMatch()}>
                    Bekreft match
                </Button>
            </Paper>


        </div>
    )

}
export default MatchDetails