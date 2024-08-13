import React, {useState} from "react";
import {Text, View, TextInput, Button, Image } from 'react-native';
import styles from "./style";

export default function LoginScreen() {

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
            <Button title="Ok" />
          </View>
          <View style={styles.botao}>
            <Button title="Cadastrar"/>
          </View>
        </View>
      </View>
    );
  }
  