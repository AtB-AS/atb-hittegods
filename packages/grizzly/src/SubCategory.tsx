import React from "react";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";

import Categories from "./components/Categories";
import Category from "./components/Category";

type Props = {
  onSubCategorySelect: (category: string) => void;
  description?: string;
  getMainCat: string;
  icon?: any;
};

function SubCategory(props: Props) {
  const mainCat: string = props.getMainCat;

  function getSubCatData(mainCat: string) {
    return categoryData.find((mainCatName) => mainCatName.name === mainCat)!
      .subCategories;
  }

  const subCatData = getSubCatData(mainCat);

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2 className="h4">Hvilken underkategori passer best? </h2>
        <p>
          Er du usikker kan du velge <i>annet</i>.
        </p>
      </Box>
      <Box mt={4}>
        <Categories>
          {subCatData.map((subCat) => {
            return (
              <Category
                title={subCat.name}
                onClick={() => props.onSubCategorySelect(subCat.name)}
                icon={subCat.icon}
              />
            );
          })}
        </Categories>
      </Box>
    </div>
  );
}

export default SubCategory;
