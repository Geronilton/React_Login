import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenLogin: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '5%',
    paddingRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogin: {
    borderRadius: 15,
    width: '90%',
  },

    formText: {
      fontSize: 20,
      margin: 5,
    },
    formTextInput: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black',
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 7,
      height: 30,
    },
    botao: {
      marginLeft: '30%',
      margin: 5,
      width: '130px',
    },
  });



  export default styles;