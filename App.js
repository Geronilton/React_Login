import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';


const Drawer = createDrawerNavigator();


function LoginScreen({ navigation }) {

  const [getLogin, setLogin] = useState('');
  const [getPass, setPass] = useState('');

  return (
    <View style={styles.ScreenLogin}>
      <View style={styles.containerLogin}>
        <View style={styles.img}>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <Text style={styles.formText}> Login:</Text>
        <TextInput style={styles.formTextInput}
          value={getLogin} onChangeText={text => setLogin(text)}></TextInput>


        <Text style={styles.formText}>Password:</Text>
        <TextInput style={styles.formTextInput}
          value={getPass} onChangeText={pass => setPass(pass)}></TextInput>


        <View style={styles.botao}>
          <Button title="Ok"
            onPress={() => {
              navigation.navigate('DashBoard', {
                login: getLogin
              });
            }
            } />
        </View>
        <View style={styles.botao}>
          <Button title="Cadastrar"
            onPress={() => {
              navigation.navigate('Cadastro');
            }
            } />
        </View>
      </View>
    </View>
  );
}


function Cadastro({ navigation }) {
  return (
    <View style={styles.ScreenCadastro}>
      <View style={styles.cadastro}>
        <Text style={styles.titleCadastro}>Cadastre-se</Text>

        <Text style={styles.formText}> Nome:</Text>
        <TextInput style={styles.formTextInput}></TextInput>

        <Text style={styles.formText}> Sobrenome:</Text>
        <TextInput style={styles.formTextInput}></TextInput>

        <Text style={styles.formText}> E-mail:</Text>
        <TextInput style={styles.formTextInput}></TextInput>

        <Text style={styles.formText}> Telefone:</Text>
        <TextInput style={styles.formTextInput}></TextInput>
        
        <View>
          <Button title='Cadastrar' />
        </View>
      </View>
    </View>
  );
}




function DashBoardScreen({ navigation, route }) {
  const login = route.params.login;


  return (
    <View>
      <Text> Você esta logado como {JSON.stringify(login)} </Text>
    </View>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}></Drawer.Screen>
        <Drawer.Screen name='DashBoard' component={DashBoardScreen}></Drawer.Screen>
        <Drawer.Screen name='Cadastro' component={Cadastro} ></Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}


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
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginLeft: '30%',
    margin: 5,
    width: '130px',
  },
  ScreenCadastro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastro:{
    width:'75%',
  },
  titleCadastro:{
    fontSize: 35,
    margin: 10,
  }
});



