
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Cadastro from './src/components/cadastro';

// const Drawer = createDrawerNavigator();

// function DashBoardScreen({ navigation, route }) {
//   const login = route.params.login;
//   return (
//     <View>
//       <Text> Você esta logado como {JSON.stringify(login)} </Text>
//     </View>
//   );
// }




export default function App() {
  return (

    <Cadastro />




    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Cadastro">
    //     {/* <Drawer.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}></Drawer.Screen>
    //     <Drawer.Screen name='DashBoard' component={DashBoardScreen}></Drawer.Screen> */}
    //     <Drawer.Screen name='Cadastro' component={Cadastro} ></Drawer.Screen>

    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
