/* global dymo*/
import {labelXml} from "./labelXml";

export function printLabel(payload) {

    return new Promise((resolve,reject) => {

        dymo.label.framework.trace = 1; //true
        dymo.label.framework.init(() => {
            console.log("init printers")
            var printers = dymo.label.framework.getPrinters();
            if (printers.length == 0)
                throw "No DYMO printers are installed. Install DYMO printers.";
            dymo.label.framework.getPrintersAsync().then(function(printers){
                // Successful result, printers variable has a list of all supported by the DYMO Label Framework
                console.log(printers);
            }).thenCatch(function(error){
                console.log("error", error);
            });
        });


        var label = dymo.label.framework.openLabelXml(labelXml);

        console.log("read xml file")
        label.setObjectText("HEADER", 'Underkategori - Merke #ID');
        label.setObjectText("LINE", 'Linje 1');
        label.setObjectText("DATE", '20.07.2020');
        label.setObjectText("DESCRIPTION", 'Veldig fin ting, ville tatt med hjem hvis jg var kriminell');
        console.log("Set dynamic variables")
        label.print("DYMO LabelWriter 450"); // This is the NAME of the printer which i found
        console.log("atempted to print")
        resolve("print ok")
        //var printers = dymo.label.framework.getPrinters();
        console.log("function called")
    })



}
