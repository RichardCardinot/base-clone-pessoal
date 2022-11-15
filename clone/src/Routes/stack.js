import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import EsqueciMinhaSenha from '../screens/EsqueciMinhaSenha';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes () {
    return (
        <Navigator 
            screenOptions= {{
                headerShown: false // Mostrar ou não o cabeçalho
            }} 
        >
            <Screen 
                name="Login" 
                component={Login} 
            />

            <Screen 
                name="EsqueciMinhaSenha"
                component={EsqueciMinhaSenha} 
            />
        </Navigator>
    
    )
}