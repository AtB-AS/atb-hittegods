import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Box } from "@material-ui/core";

import Wizard from "./Wizard";

function App() {
  return (
      <Box mb={6}>
        <Helmet>
            <script src="http://labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js"
                    type="text/javascript" charSet="UTF-8"></script>
          <title>Hittegods - AtB</title>
        </Helmet>
        <Header />
        <Wizard />
      </Box>
  );
}

export default App;
