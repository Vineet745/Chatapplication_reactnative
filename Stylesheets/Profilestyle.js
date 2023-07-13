import {StyleSheet, Dimensions} from 'react-native';
export default profilestyle = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ece5dd',
    justifyContent: 'center',
  },
  childcontainer: {
    margin: 10,
    height: 650,
  },
  Profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Innerprofile: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 60,
  },
  Information: {
    padding: 30,
    borderWidth:2,
  },
  details: {
    fontSize: 20,
    marginBottom: 15,
    color: 'black',
    // borderbottomWidth: 0.2,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
});
