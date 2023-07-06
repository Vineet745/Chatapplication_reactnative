import {StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

export default Registerstyle = StyleSheet.create({
  Registermain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  headtext: {
    fontSize: 30,
    color: 'black',
    marginTop: 10,
    marginBottom:30,
  },
  InputWrapper: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"lightgreen"
  },
  inputbox: {
    width: '80%',
    borderBottomWidth: 2,
    padding: 10,
    fontSize: 20,
    marginBottom:25,
    borderRadius:10
  },
  button:{
    width: 320,
    backgroundColor:"#24a0ed",
    padding:12,
    borderRadius:20,
    textAlign:"center",
    fontSize:20
  },
  wrapper:{
         fontSize:20,
         marginTop:30,
         textAlign:"center"
  },
  link:{
    color:"#24a0ed"
  },
  google:{
    width: 320,
    backgroundColor:"brown",
    padding:12,
    borderRadius:20,
    textAlign:"center",
    fontSize:20,
    marginBottom:20,
    color:"white"
  }
});
