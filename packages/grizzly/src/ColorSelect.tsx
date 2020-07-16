import React, {useState} from 'react';
import {Box, Chip, Collapse, createStyles, Fab, Paper, Theme} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";

type Props = {
    onColorSelect: (color:string) => void;
}

type Color = {
    label:string
    color:string
}

type Colors = {
    data:Color[]
}



const colorData:Colors = {data:[
    {label:"Blå",color:'blue'},
    {label: "Grønn",color:'green'},
        {label: "Rød",color:'red'},
        {label: "Hvit",color:'white'},
        {label: "Svart",color:'black'},
        {label: "Lilla",color:'purple'},
]};

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


function ColorSelect(props:Props) {
    const [openColorSelect, setOpenColorSelect] = useState<boolean>(true);
    const [colorOptions, setColorOptions] = useState<Colors>(colorData)
    const [selectedColors, setSelectedColors] = useState<Colors>({data:[]})
    const [nSelectedColors, setNSelectedColors] = useState<number>(0)
    const maxColors = 1;
    const styles = useStyles();

    function clickedColorOption(color:Color) {
        console.log("Clicked on:",color)
        if(nSelectedColors>maxColors-1){
            console.log("TOO MANY COLORS SELECTED")
        }

        else {
            setSelectedColors(prevState => {
            const newColor:Colors = {data:[color]}
            const colors:Colors = {data:[...prevState.data, ...newColor.data]}
            // or list ;
            console.log("New selected colors: ", colors)
            return colors
            });
            setColorOptions(prevState => {
                const colorData = prevState.data.slice();
                const index = colorData.indexOf(color)
                colorData.splice(index,1)
                console.log("New color options: ", colorData)
                return {data:colorData}
            })
            setOpenColorSelect(false)
            setNSelectedColors(prevState => {
                return prevState+1
            })
            props.onColorSelect(color.label)
        }


    }


    function clickedSelectedColor(color:Color) {
        console.log("Clicked on:",color)
        setSelectedColors(prevState => {
            const colorData = prevState.data.slice();
            const index = colorData.indexOf(color)
            colorData.splice(index,1)
            console.log("New selected colors: ", colorData)
            return {data:colorData}
        })

        setColorOptions(prevState => {
            const newColor:Colors = {data:[color]}
            const colors:Colors = {data:[...prevState.data, ...newColor.data]}
            // or list ;
            console.log("New color options: ", colors)
            return colors
        });

        setNSelectedColors(prevState => {
            if(prevState===1){
                setOpenColorSelect(true)
            }
            return prevState-1
        })


    }

    function clickedAddColor() {
        if(openColorSelect===true){
            setOpenColorSelect(false)
        }
        else {
            setOpenColorSelect(true)
        }
    }

    function AddButton(){
        if(nSelectedColors<maxColors && !openColorSelect){
            return(<Fab size="small" color="primary" aria-label="add" onClick={()=>clickedAddColor()}>
                <AddIcon fontSize="small"/>
            </Fab>)}
        else {
            return null
        }
    }

    return (
        <Box>
        <Box>
            {selectedColors.data.map((color)=>(
                <Chip
                    variant="outlined"
                    style={{borderColor:color.color}}
                    key={color.label}
                    //icon={<AddIcon/>}
                    label={color.label}
                    onClick={()=>clickedSelectedColor(color)}
                    //className={classes.chip}
                />))}
            <AddButton/>

        </Box>

    <Collapse in={openColorSelect} timeout="auto" unmountOnExit>
        <h4 className={styles.heading}>Legg til ny farge</h4>
            <Box >
                {colorOptions.data.map((color)=>(

                    <Chip
                        variant="outlined"
                        style={{borderColor:color.color}}
                        key={color.label}
                        icon={<AddIcon style={{color:color.color}}/>}
                        label={color.label}
                        onClick={()=>clickedColorOption(color)}
                        //className={classes.chip}
                    />))}

            </Box>

    </Collapse>
        </Box>
    );
}

export default ColorSelect;