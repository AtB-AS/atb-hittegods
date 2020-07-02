import React, { useState, useEffect } from "react";
import { createStyles, Grid, styled, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { mainCategory } from "./components/constants";
import { useHistory } from "react-router-dom";
import { categoryData } from "./components/subCategoryData";
import Container from "@material-ui/core/Container";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

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
      backgroundColor: theme.palette.primary.main,
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
          <AccessAlarmIcon />
        </div>
        <div>{subprops.name}</div>
        {/*<img src={subprops.imgUrl} />*/}
      </CategoryButton>
    );
  }

  return (
    <div>
      <Box mt={6}>
        <h2>Velg Kategori</h2>
      </Box>
      <Box mt={4}>
        <Grid container spacing={3}>
          {catData.map((mainCat) => (
            <Grid
              className={styles.paper}
              item
              sm={6}
              md={3}
              xs={6}
              key={mainCat.name}
            >
              <CategoryComponent {...mainCat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default MainCategory;
