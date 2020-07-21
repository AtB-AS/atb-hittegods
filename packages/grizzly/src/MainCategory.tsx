import React from "react";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet-async";
import Categories from "./components/Categories";
import Category from "./components/Category";
import { Grow, Slide } from "@material-ui/core";

type Props = {
  onCategorySelect: (category: string) => void;
  description: string;
  category: string;
  icon?: any;
};

function MainCategory(props: Props) {
  const catData = categoryData;

  return (
    <div>
      <Helmet>
        <title>Hovedkategori - AtB</title>
      </Helmet>
      <Box mt={4} mb={4}>
        <h2 className="h4">Hvilken kategori passer best?</h2>
        <p>
          Om du er usikker kan du velge <i>annet</i>.
        </p>
      </Box>
      <Grow in timeout={300}>
        <Box mt={4}>
          <Categories>
            {catData.map((mainCat) => {
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
