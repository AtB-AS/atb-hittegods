import React from "react";
import { categoryData } from "../components/subCategoryData";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet-async";
import Categories from "../components/Categories";
import Category from "../components/Category";
import { Grow, Typography } from "@material-ui/core";

type Props = {
  onCategorySelect: (category: string) => void;
  description: string;
  category: string;
  icon?: any;
};

function MainCategory(props: Props) {
  return (
    <div>
      <Helmet>
        <title>Hovedkategori - AtB</title>
      </Helmet>
      <Box mt={4} mb={4}>
        <Typography variant="h2">Hvilken kategori passer best?</Typography>
        <p>
          Om du er usikker kan du velge <i>annet</i>.
        </p>
      </Box>
      <Grow in timeout={300}>
        <Box mt={4}>
          <Categories>
            {categoryData.map((mainCat) => {
              return (
                <Category
                  key={mainCat.name}
                  title={mainCat.name}
                  description={mainCat.description}
                  onClick={() => props.onCategorySelect(mainCat.name)}
                  icon={mainCat.icon}
                />
              );
            })}
          </Categories>
        </Box>
      </Grow>
    </div>
  );
}

export default MainCategory;
