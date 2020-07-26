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
import { colorData } from "../components/colorConstant";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorsContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    colorOption: {
      padding: "20px 0",
      margin: "5px",
      display: "flex",
      placeItems: "center",
      width: "80px",
    },
  })
);

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
  const classes = useStyles();
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
        <Box className={classes.colorsContainer}>
          {selectedColors.data.map((color) => (
            <Chip
              variant="outlined"
              style={{
                borderColor: color.primary,
                background: color.primary,
              }}
              key={color.label}
              className={classes.colorOption}
              label={
                <label style={{ color: color.secondary }}>{color.label}</label>
              }
              onClick={() => clickedSelectedColor(color)}
            />
          ))}
          <AddButton />
        </Box>

        <Collapse in={openColorSelect} timeout="auto" unmountOnExit>
          <Box className={classes.colorsContainer}>
            {colorOptions.data.map((color) => (
              <Chip
                variant="outlined"
                style={{
                  borderColor: color.primary,
                  background: color.primary,
                }}
                key={color.label}
                className={classes.colorOption}
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
