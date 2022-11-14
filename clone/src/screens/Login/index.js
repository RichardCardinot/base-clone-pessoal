import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Gradient } from '../../components/Gradient';
import logo from '../../../assets/login.png';
import { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <Gradient />
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu login'}
        placeholderTextColor={'gray'}
        style={styles.inputLogin}
      />

      <TextInput
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua senha'}
        placeholderTextColor={'gray'}
        style={styles.inputPassword}
      />

      <TouchableOpacity> 
        <Text style={styles.recover}>Esqueceu sua senha? Clique aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity> 
        <Text style={styles.recover}>Não possui cadastro? Cadastre-se!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#120A8F',
    fontWeight: 800,
    fontSize: '18px',
    marginTop: '42px',
  },
  logo: {
    width: '130px',
    height: '130px',
    borderRadius: '100.125px',
    marginTop: '-200px',
  },
  inputLogin: {
    width: '188px',
    height: '31px',
    border: '2px solid #00ffff',
    borderRadius: '5px',
    paddingLeft: '5px',
    fontFamily: 'sans-serif',
    marginVertical: '20px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
  },
  inputPassword: {
    width: '188px',
    height: '31px',
    border: '2px solid #00ffff',
    borderRadius: '5px',
    paddingLeft: '5px',
    fontFamily: 'sans-serif',
    marginBottom: '5px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
  },
  recover: {
   color: '#120a8f',
   fontFamily: 'sans-serif',
   fontSize: '12px',
   fontWeight: 700,
  },
  textButton: {
    fontFamily: 'sans-serif',
    textAlign: 'center', // Alinha na vertical
    color: '#120A8F',
    position: 'absolute',
    fontWeight: 800,
  },
  button: {
    width: '131px',
    height: '33px',
    border: '2px solid #00ffff',
    borderRadius: '5px',
    marginTop: '40px',
    marginBottom: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
  }
});