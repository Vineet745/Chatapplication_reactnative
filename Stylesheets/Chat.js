import {StyleSheet,Dimensions} from "react-native"

export default chatstyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#ece5dd"
},
list:{
width:Dimensions.get("window").width,
alignSelf:"center",
borderRadius:20,
flexDirection:"row",
borderBottomWidth:0.2,
height:60,
marginTop:10,
alignItems:"center",
paddingLeft:20
},
Icon:{
  width:40,
  height:40,
  objectFit:"cover"

},
Image:{
  width:"100%",
  height:"100%",
  borderRadius:50
},
username:{
    color:"black",
    fontSize:30,
    marginLeft:20
}

})