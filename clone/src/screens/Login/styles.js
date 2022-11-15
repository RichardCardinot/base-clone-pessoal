import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.Text`
    color: #120A8F;
    font-weight: 800;
    font-size: 18px;
    margin-top: 42px;
`;

export const Logo = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 100.125px;
    margin-top: -200px;
`;

export const InputLogin = styled.TextInput`
    width: 188px;
    height: 31px;
    border: 2px solid #00ffff;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-vertical: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputPassword = styled.TextInput`
    width: 188px;
    height: 31px;
    border: 2px solid #00ffff;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-bottom: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Recover = styled.Text`
    color: #120a8f;
    fontFamily: sans-serif;
    fontSize: 12px;
    fontWeight: 700;
`;

export const TextButton = styled.Text`
    font-family: sans-serif;
    text-align: center;
    color: #120A8F;
    position: absolute;
    fontWeight: 800;
`;

export const Botao = styled.TouchableOpacity`
    width: 131px;
    height: 33px;
    border: 2px solid #00ffff;
    border-radius: 5px;
    margin-top: 40px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    boxShadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;