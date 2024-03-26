import React from 'react';
import {Text, View, Image} from 'react-native';
import { TextInput } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Login(){
  return(
    <View style={{width:250, marginLeft:60, marginTop:"60px"}}>
      <View   style={{width: 200, height: 200, marginLeft:20}}>
        <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      </View>
      <view style={{margin:10}}>
        <Text style={{margin:80}}>Login</Text>
        <TextInput 
          style={{
            borderWidth:1,borderRadius:10, width:'230px',height:'30px',textAlign:'center'
          }}
        placeholder="E-mail"
        textContentType="name"></TextInput>
      </view>

      <view style={{margin:10}}>
        <Text style={{margin:80}}>Senha</Text>
        <TextInput 
        style={{
          borderWidth:1,borderRadius:10, width:'230px',height:'30px',textAlign:'center'
        }}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"></TextInput>
      </view>
      <button style={{width:100, height:'30px',
      borderRadius:10,marginLeft:75,
      background:'blue', color:'white'}} 
      onPress={() =>{HomeScreen}}>Entrar</button>
  </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} />

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
