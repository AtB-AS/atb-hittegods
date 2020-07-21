import React, {useEffect, useState} from 'react';
import {printLabel} from "../printer/printer";
import {Button, Grid} from "@material-ui/core";

type Props = {
    setErrorMessage:(errorMessage:string)=>void;
    subCategory:string | undefined;
    line:string | undefined;
    brand:string | undefined;
    description:string  |undefined;
    id:number | undefined;
}

function PrintButton(props:Props) {
    const [printOk,setPrintOk] = useState<boolean>(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "http://labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js";
        //For head
        document.head.appendChild(script);
    }, [])


    const  onClickPrintLabel = () => {
        const item=props
        if (item.id){
            const id = item.id;
            const payload = item;
            printLabel(payload, id)
                .then(status => {
                    if(status==="print ok"){
                        setPrintOk(true);
                        props.setErrorMessage("")
                    }
                })
                .catch(e => {
                    console.log(e)
                    if (e.name === "PrinterNotConnectedError"){
                        console.log("PrinterNotConnectedError")
                        props.setErrorMessage("Koble til printeren og prøv igjen")
                    }
                    else if (e.name === "PrinterNotInstalledError"){
                        console.log("PrinterNotInstalledError")
                        props.setErrorMessage("Installer printeren og prøv igjen")
                    }
                    else {
                        console.log("Unknown error")
                        props.setErrorMessage("Printeren er koblet i og installert, men en ukjent feil har oppstått")
                    }
                })
        }
        console.log("Print: ",printOk)

    }


    return (
        <div>
            <Button color="primary" variant="contained" onClick={onClickPrintLabel}>
                Print ut lapp
            </Button>
        </div>
    );
}

export default PrintButton;