import React, { useEffect, useState } from "react";
import {Box, Button, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import DataLoadingContainer from "../DataLoadingContainer";
import { HTTPError } from "./Errors";
import {printLabel} from "../printer/printer";
import PrintButton from "./printButton";
import {useHistory} from "react-router";

const useStyles = makeStyles({
  root: {
    padding: "20px 0 0 20px",
    fontSize: "18px",
  },
  loading: {
    textAlign: "center",
    marginTop: "60px",
  },
  card: {
    backgroundColor: "#fff",
  },
});

type Props = {
  match: {
    params: {
      id: string;
    };
  };
  removeItem: (id: number) => void;
};

type Items = {
  id: number;
  subcategory: string;
  category: string;
  description: string;
  matchCount: number;
  newMatchCount: number;
  name: string;
  phone: string;
  email: string;
  brand: string;
  status: string;
  color: string;
  date: string;
  line: string;
  foundids: number[];
};

function StorageItem(props: Props) {
  const [item, setItem] = useState<Items | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);
  const styles = useStyles();
  const [notFound, setNotFound] = useState<string | undefined>(undefined);
  const [printerError,setPrinterError] = useState("")
  const history = useHistory();

  useEffect(() => {
    setPrinterError("")
    setLoading(true);
    setNotFound(undefined);
    fetch("/api/admin/found/" + props.match.params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new HTTPError("HTTPError", response.status);
        }
      })
      .then((jsonData) => {
        setItem(jsonData.data);
        if (jsonData.data.status !== "Funnet") {
          setNotFound("Finner ikke gjenstanden");
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (e.name === "HTTPError") {
          if (e.status === 404) {
            setNotFound("Finner ikke gjenstanden");
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      });
  }, [props.match.params.id]);

  function onClickedPrintButton(errorMessage:string){
    setPrinterError(errorMessage)
  }


  function ContactInfo() {
    if (item?.name != "" || item?.phone != "" || item?.email != "") {
      return (<div>
        <Box >
          <Grid container spacing={1}>
            <Grid item md={4}>
              <dl>
                <dt>Navn:</dt>
                <dd>{item?.name}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <dl>
                <dt>Telefon:</dt>
                <dd>{item?.phone}</dd>
              </dl>
            </Grid>
            <Grid item md={4}>
              <dl>
                <dt>E-post:</dt>
                <dd>{item?.email}</dd>
              </dl>
            </Grid>
          </Grid>
        </Box>
      </div>)

    } else {
      return (
          <div>
            <Grid item md={12}>
              Ingen kontaktinfo funnet
            </Grid>
          </div>
      )
    }
  }
  const clickedToDelivery = (id:number) => {
    setLoading(true);
    updateFoundStatus(id).then((response)=>{
      if(response.ok){
        props.removeItem(id)
      }
    }).finally(()=>{
      history.replace("/admin/lager");
      setLoading(false);
    })
  }

  const updateFoundStatus = (id: number) => {
    return fetch("/api/admin/found/" + id, {
      method: "put",
      body: JSON.stringify({
        status: "Til utlevering",
        name: item?.name,
        phone: item?.phone,
        email: item?.email,
        category: item?.category,
        subCategory: item?.subcategory,
        color: item?.color,
        brand: item?.brand,
        description: item?.description,
        line: item?.line,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <DataLoadingContainer loading={isLoading} error={error} notFound={notFound}>
      <div className={styles.root}>
        <Box p={3} mt={4} className={styles.card}>
          <div>
            <h2>
              {item?.subcategory} - {item?.brand}
            </h2>
          </div>
          <Box>
            <Grid container>
              <Grid item md={12}>
                <dt>Full beskrivelse:</dt>
                <dd>{item?.description}</dd>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Dato funnet:</dt>
                  <dd>{moment(item?.date).format("DD.MM.yy")}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Linje:</dt>
                  <dd>{item?.line}</dd>
                </dl>
              </Grid>
              <Grid item md={4}>
                <dl>
                  <dt>Farge:</dt>
                  <dd>{item?.color}</dd>
                </dl>
              </Grid>
            </Grid>
          </Box>
          <h3 className="h4">Kontaktinfo:</h3>
          <ContactInfo/>
          <Box mt={2} >
            <Grid container spacing={1}>
              <Grid item md={6}>
                <Button
                        onClick={()=>{
                          if (item?.id!==undefined){clickedToDelivery(item?.id)}}}
                        color="primary"
                        variant="contained">
                  Til utlevering
                </Button>
              </Grid>
              <Grid item md={6}>
                <PrintButton setErrorMessage={onClickedPrintButton}
                             brand={item?.brand}
                             description={item?.description}
                             line={item?.line}
                             id={item?.id}
                             subCategory={item?.subcategory}/>
              </Grid>
              <Grid item md={12}>
                <h6 style={{color:"red", fontSize:"16"}}>{printerError}</h6>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </div>
    </DataLoadingContainer>
  );
}

export default StorageItem;
