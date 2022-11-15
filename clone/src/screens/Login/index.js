import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Gradient } from '../../components/Gradient';
import logo from '../../../assets/login.png';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Botao, Container, InputLogin, InputPassword, Logo, Recover, TextButton, Titulo } from './styles';

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  

  const navigation = useNavigation();   // Componente do native responsável pela criação das rotas

  function screenEsqueciMinhaSenha() {
    navigation.navigate('EsqueciMinhaSenha'); // Responsável pelo direcionamento de tela, ao clicar no botão.
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo} />
      <Titulo>Login</Titulo>

      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu login'}
        placeholderTextColor={'gray'}
      />

      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua senha'}
        placeholderTextColor={'gray'}
      />

      <TouchableOpacity onPress={screenEsqueciMinhaSenha}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>

      <Botao>
        <TextButton>ENTRAR</TextButton>
      </Botao>

      <TouchableOpacity>
        <Recover>Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </Container>
  );
}