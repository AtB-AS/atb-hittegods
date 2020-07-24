import React, { useState } from "react";
import { printLabel } from "../printer/printer";
import { Button } from "@material-ui/core";

type Props = {
  setErrorMessage: (errorMessage: string) => void;
  subCategory: string | undefined;
  line: string | undefined;
  brand: string | undefined;
  description: string | undefined;
  id: number | undefined;
};

function PrintButton(props: Props) {
  const [printOk, setPrintOk] = useState<boolean>(false);

  const onClickPrintLabel = () => {
    const item = props;
    if (item.id) {
      const id = item.id;
      const payload = item;
      printLabel(payload, id)
        .then((status) => {
          if (status === "print ok") {
            setPrintOk(true);
            props.setErrorMessage("");
          }
        })
        .catch((e) => {
          console.log(e);
          if (e.name === "PrinterNotConnectedError") {
            props.setErrorMessage("Koble til printeren og prøv igjen");
          } else if (e.name === "PrinterNotInstalledError") {
            props.setErrorMessage("Installer printeren og prøv igjen");
          } else {
            props.setErrorMessage("En ukjent feil har oppstått");
          }
        });
    }
    console.log("Print: ", printOk);
  };

  return (
    <div>
      <Button variant="outlined" onClick={onClickPrintLabel}>
        Print ut lapp
      </Button>
    </div>
  );
}

export default PrintButton;
