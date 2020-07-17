export const colorStrings = {
  BLUE: "Blå",
  GREEN: "Grønn",
  YELLOW: "Gul",
  RED: "Rød",
  BLACK: "Svart",
  BROWN: "Brun",
  PURPLE: "Lilla"
};

type Color = {
    label:string,
    primary:string,
    secondary:string
}

type Colors = {
    data:Color[]
}


export const colorData:Colors = {data:[
    {label:colorStrings.BLUE, primary:'blue',secondary:'white'},
    {label: colorStrings.GREEN, primary:'green',secondary:'white'},
    {label: colorStrings.YELLOW, primary:'yellow',secondary:'black'},
    {label: colorStrings.RED,primary:'red',secondary:'white'},
    {label: colorStrings.BLACK,primary:'black',secondary:'white'},
    {label: colorStrings.PURPLE,primary:'purple',secondary:'white'},
  ]};