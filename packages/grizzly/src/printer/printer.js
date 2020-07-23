/* global dymo*/
import { labelXml } from "./labelXml";
import moment from "moment";
import {
  PrinterNotConnectedError,
  PrinterNotInstalledError,
} from "../admin/Errors";

export const isPrinterConnected = () => {
  return printersConnected(dymo.label.framework.getPrinters());
};

const printersConnected = (printers) => {
  for (let i = 0; i < printers.length; i++) {
    if (printers[i].isConnected) {
      return true;
    }
  }
  return false;
};

export const printLabel = (payload, id) => {
  return new Promise((resolve, reject) => {
    dymo.label.framework.trace = 1; //true
    dymo.label.framework.init(() => {
      let printers = dymo.label.framework.getPrinters();
      console.log("Number of printers:", printers.length);

      dymo.label.framework
        .getPrintersAsync()
        .then(function (printers) {
          if (printers.length === 0) {
            //throw "No DYMO printers are installed. Install DYMO printers.";
            reject(new PrinterNotInstalledError("No DYMO printers installed"));
          } else if (!printersConnected(printers)) {
            console.log("No DYMO printers connected");
            //throw "No DYMO printers connected, plug it in and connect with USB"
            reject(new PrinterNotConnectedError("No DYMO printers connected"));
          } else {
            // Successful result, printers variable has a list of all supported by the DYMO Label Framework
            console.log(printers);

            var label = dymo.label.framework.openLabelXml(labelXml);

            label.setObjectText(
              "HEADER",
              `#${id}  ${payload.subCategory} - ${payload.brand}`
            );
            label.setObjectText("LINE", `Linje: ${payload.line}`);
            label.setObjectText("DATE", moment().format("DD.MM.yyyy"));
            label.setObjectText("DESCRIPTION", payload.description);

            label.print(printers[0].name); // This is the NAME of the printer which i found

            resolve("print ok");
            //var printers = dymo.label.framework.getPrinters();
          }
        })
        .thenCatch(function (error) {
          console.log("error", error);
          reject(error);
        });
    });
  });
};
