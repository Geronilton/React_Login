import React,  { useState } from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import styles from "./style"
import { api } from '../../../services/api';


export default function Cadastro() {

    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const Cadastrar = async () => {
      try {
        const data ={
          name,
          email,
          password
        }
          // Enviar os dados para o servidor local
        const response = await api.post('/register',data);
        if (response.status === 200){
          alert('Usuário criado com sucesso!');
        }
          // Limpar os campos do formulário após o envio
          setNome('');
          setEmail('');
          setPassword('');
      } catch (error) {
          console.error('Erro ao criar usuário:', error);
          alert('Erro ao criar usuário');
      }
  };

    return (
      <View style={styles.ScreenCadastro}>
        <View style={styles.cadastro}>
          <Text style={styles.titleCadastro}>Cadastre-se</Text>
  
          <Text style={styles.formText}> Nome:</Text>
          <TextInput style={styles.formTextInput}
            value={name} onChangeText={nome => setNome(nome)}
          ></TextInput>
  
          <Text style={styles.formText}> E-mail:</Text>
          <TextInput style={styles.formTextInput}
            value={email} onChangeText={email => setEmail(email)}
          ></TextInput>
  
          <Text style={styles.formText}> Defina uma Senha:</Text>
          <TextInput style={styles.formTextInput}
            value={password} onChangeText={senha => setPassword(senha)}
          ></TextInput> 
  
          <View>
            <Button title='Cadastrar'
            onPress={Cadastrar}
            />
          </View>
        </View>
      </View>
    );
  }