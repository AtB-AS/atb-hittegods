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
  color:string,
  outlineColor:string,
  textColor:string,

}

type Colors = {
  data:Color[]
}


export const colorData:Colors = {data:[
    {label:colorStrings.BLUE,
      color:'blue',
      outlineColor:'blue',
      textColor:'white'},
    {label: colorStrings.GREEN,
      color:'green',
      outlineColor:'green',
      textColor:'white'},
    {label: colorStrings.YELLOW,color:'red',outlineColor:'red',textColor:'white'},
    {label: colorStrings.RED,color:'white',outlineColor:'white',textColor:'black'},
    {label: colorStrings.BLACK,color:'black',outlineColor:'black',textColor:'white'},
    {label: colorStrings.PURPLE,color:'purple',outlineColor:'purple',textColor:'white'},
  ]};