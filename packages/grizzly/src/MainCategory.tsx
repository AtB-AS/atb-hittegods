import React from "react";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet";
import Categories from "./components/Categories";
import Category from "./components/Category";

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
        <h2>Hvilken kategori passer best?</h2>
        <p>
          Er du usikker kan du velge <i>annet</i>.
        </p>
      </Box>
      <Box mt={4}>
        <Categories>
          {catData.map((mainCat) => {
            return (
              <Category
                title={mainCat.name}
                description={mainCat.description}
                onClick={() => props.onCategorySelect(mainCat.name)}
                icon={mainCat.icon}
              />
            );
          })}
        </Categories>
      </Box>
    </div>
  );
}

export default MainCategory;
