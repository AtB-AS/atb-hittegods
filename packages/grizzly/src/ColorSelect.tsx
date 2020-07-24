import React, { useState } from "react";
import { Box, Chip, Collapse, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { colorData } from "./components/colorConstant";

type Props = {
  onColorSelect: (color: string) => void;
};

type Color = {
  label: string;
  primary: string;
  secondary: string;
};

type Colors = {
  data: Color[];
};

function ColorSelect(props: Props) {
  const [openColorSelect, setOpenColorSelect] = useState<boolean>(true);
  const [colorOptions, setColorOptions] = useState<Colors>(colorData);
  const [selectedColors, setSelectedColors] = useState<Colors>({ data: [] });
  const [nSelectedColors, setNSelectedColors] = useState<number>(0);
  const maxColors = 1;

  //Function not in use. Can be used for the ability to choose more than one color.
  function clickedColorOption(color: Color) {
    if (nSelectedColors > maxColors - 1) {
    } else {
      setSelectedColors((prevState) => {
        const newColor: Colors = { data: [color] };
        const colors: Colors = { data: [...prevState.data, ...newColor.data] };
        return colors;
      });
      setColorOptions((prevState) => {
        const colorData = prevState.data.slice();
        const index = colorData.indexOf(color);
        colorData.splice(index, 1);
        return { data: colorData };
      });
      setOpenColorSelect(false);
      setNSelectedColors((prevState) => {
        return prevState + 1;
      });
      props.onColorSelect(color.label);
    }
  }

  function clickedSelectedColor(color: Color) {
    setSelectedColors((prevState) => {
      const colorData = prevState.data.slice();
      const index = colorData.indexOf(color);
      colorData.splice(index, 1);
      return { data: colorData };
    });

    setColorOptions((prevState) => {
      const newColor: Colors = { data: [color] };
      const colors: Colors = { data: [...prevState.data, ...newColor.data] };
      return colors;
    });

    setNSelectedColors((prevState) => {
      if (prevState === 1) {
        setOpenColorSelect(true);
      }
      return prevState - 1;
    });
  }

  function clickedAddColor() {
    if (openColorSelect) {
      setOpenColorSelect(false);
    } else {
      setOpenColorSelect(true);
    }
  }

  function AddButton() {
    if (nSelectedColors < maxColors && !openColorSelect) {
      return (
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => clickedAddColor()}
        >
          <AddIcon fontSize="small" />
        </Fab>
      );
    } else {
      return null;
    }
  }

  return (
    <Grid>
      <Box>
        <Box>
          {selectedColors.data.map((color) => (
            <Chip
              variant="outlined"
              style={{
                borderColor: color.primary,
                background: color.primary,
                padding: "20px 20px 16px",
                margin: "5px",
              }}
              key={color.label}
              //icon={<AddIcon/>}
              label={
                <label style={{ color: color.secondary }}>{color.label}</label>
              }
              onClick={() => clickedSelectedColor(color)}
            />
          ))}
          <AddButton />
        </Box>

        <Collapse in={openColorSelect} timeout="auto" unmountOnExit>
          <Box>
            {colorOptions.data.map((color) => (
              <Chip
                variant="outlined"
                style={{
                  borderColor: color.primary,
                  background: color.primary,
                  padding: "20px 20px 16px",
                  margin: "5px",
                }}
                key={color.label}
                label={
                  <label style={{ color: color.secondary }}>
                    {color.label}
                  </label>
                }
                onClick={() => clickedColorOption(color)}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
    </Grid>
  );
}

export default ColorSelect;
