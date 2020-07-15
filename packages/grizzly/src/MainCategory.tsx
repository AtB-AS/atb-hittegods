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

type Props = {
  onCategorySelect: (category: string) => void;
  category: string;
  icon?: object;
};

type catProps = {
  name: string;
  imgUrl: string;
};

const CategoryButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  height: "160px",
  padding: "0 30px",
  width: "160px",
});

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
  const styles = useStyles();
  console.log(props);

  useEffect(() => {
    console.log("mounted", h);
  }, []);

  const catData = categoryData;

  function CategoryComponent(subprops: catProps) {
    console.log(subprops);
    return (
      <CategoryButton onClick={() => props.onCategorySelect(subprops.name)}>
        <div>
          <img src="/components/img/Mobileelectronics.svg" />
        </div>
        <div>{subprops.name}</div>
        {/*<img src={subprops.imgUrl} />*/}
      </CategoryButton>
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
        <Grid container spacing={3}>
          {catData.map((mainCat) => (
            <Grid className={styles.paper} item xs={6} key={mainCat.name}>
              <CategoryComponent {...mainCat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default MainCategory;
