import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return ( 
    <View style={styles.container}> {/* A "View" é semelhante a "div" */}
      <Text style={styles.title}>Login</Text>
      <Text>Digite seu login</Text>
      <Text>Digite sua senha</Text>
      <Text>Esqueceu sua senha? Clique aqui</Text>
      <Text>ENTRAR</Text>
      <Text>Não possui cadastro? Cadastre-se!</Text>    
      <StatusBar style="auto" /> {/* Tela do topo do app, onde fica a hora, o sinal de internet... */}
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
    fontWeight: 'bold',
    fontSize: '15px'
  }
});



//background: #120A8F;
