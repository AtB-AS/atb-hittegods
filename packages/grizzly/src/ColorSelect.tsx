import React, { useState } from "react";
import {
  Box,
  Chip,
  Collapse,
  createStyles,
  Fab,
  Grid,
  Theme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfield: {
      display: "flex",
    },
    heading: {
      fontWeight: 300,
      fontSize: "16px",
    },
  })
);

function ColorSelect(props: Props) {
  const [openColorSelect, setOpenColorSelect] = useState<boolean>(true);
  const [colorOptions, setColorOptions] = useState<Colors>(colorData);
  const [selectedColors, setSelectedColors] = useState<Colors>({ data: [] });
  const [nSelectedColors, setNSelectedColors] = useState<number>(0);
  const maxColors = 1;
  const styles = useStyles();

  function clickedColorOption(color: Color) {
    console.log("Clicked on:", color);
    if (nSelectedColors > maxColors - 1) {
      console.log("TOO MANY COLORS SELECTED");
    } else {
      setSelectedColors((prevState) => {
        const newColor: Colors = { data: [color] };
        const colors: Colors = { data: [...prevState.data, ...newColor.data] };
        // or list ;
        console.log("New selected colors: ", colors);
        return colors;
      });
      setColorOptions((prevState) => {
        const colorData = prevState.data.slice();
        const index = colorData.indexOf(color);
        colorData.splice(index, 1);
        console.log("New color options: ", colorData);
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
    console.log("Clicked on:", color);
    setSelectedColors((prevState) => {
      const colorData = prevState.data.slice();
      const index = colorData.indexOf(color);
      colorData.splice(index, 1);
      console.log("New selected colors: ", colorData);
      return { data: colorData };
    });

    setColorOptions((prevState) => {
      const newColor: Colors = { data: [color] };
      const colors: Colors = { data: [...prevState.data, ...newColor.data] };
      // or list ;
      console.log("New color options: ", colors);
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
    if (openColorSelect === true) {
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
                backgroundColor: color.primary,
                padding: "20px",
                margin: "5px",
              }}
              key={color.label}
              //icon={<AddIcon/>}
              label={
                <label style={{ color: color.secondary }}>{color.label}</label>
              }
              onClick={() => clickedSelectedColor(color)}
              //className={classes.chip}
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
                  backgroundColor: color.primary,
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
                //className={classes.chip}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
    </Grid>
  );
}

export default ColorSelect;
