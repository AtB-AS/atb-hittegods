import React, { useState, useEffect } from "react";
import { createStyles, Grid, styled, Theme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { categoryData } from "./components/subCategoryData";
import Container from "@material-ui/core/Container";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import CategoryBtn from "./components/CategoryBtn";
import LueIcon from "./components/icons/Lue.svg";

type Props = {
  onCategorySelect: (category: string) => void;
  category: string;
  icon?: object;
};

type catProps = {
  name: string;
  imgUrl: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      textAlign: "center",
    },
  })
);

function MainCategory(props: Props) {
  const [cat, setCat] = useState(props.category);
  const h = useHistory();
  console.log(props);

  useEffect(() => {
    console.log("mounted", h);
  }, []);

  const catData = categoryData;

  function CategoryComponent(subprops: catProps) {
    console.log(subprops);

    return (
      <CategoryBtn
        icon={subprops.imgUrl}
        title={subprops.name}
        onClick={() => props.onCategorySelect(subprops.name)}
      />
    );
  }

  return (
    <div>
      <Helmet>
        <title>Hovedkategori - AtB</title>
      </Helmet>
      <Box mt={4} mb={4}>
        <h2>Velg kategori</h2>
      </Box>
      <Box mt={4}>
        <Grid container spacing={0}>
          {catData.map((mainCat) => (
            <Grid item xs={12} key={mainCat.name}>
              <CategoryComponent {...mainCat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default MainCategory;
