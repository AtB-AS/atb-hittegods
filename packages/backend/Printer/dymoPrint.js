var labelXml = "./example.mxl"

var label = dymo.label.framework.openLabelXml(labelXml);
label.setObjectText("Text", textTextArea.value);


var printers = dymo.label.framework.getPrinters();
if (printers.length == 0)
    throw "No DYMO printers are installed. Install DYMO printers.";

var printerName = "";
for (var i = 0; i < printers.length; ++i)
{
    var printer = printers[i];
    if (printer.printerType == "LabelWriterPrinter")
    {
        printerName = printer.name;
        break;
    }
}

label.print(printerName);