import React from 'react';
import {Text, View, Image} from 'react-native';
import { TextInput } from 'react-native-web';

const CatApp = () => {
  return (
    <View style={{width:250,height:400, textAlign:'center'}}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />

        <view>
          <Text style={{margin:50}}>Login</Text>
          <TextInput 
            style={{
              borderWidth:1,borderRadius:10
            }}
          placeholder="E-mail"
          textContentType="name"></TextInput>
        </view>

        <view>
          <Text style={{margin:50}}>Senha</Text>
          <TextInput 
          style={{
            borderWidth:1,borderRadius:10
          }}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"></TextInput>
        </view>
        <button>Entrar</button>
    </View>
  );
};


export default CatApp;