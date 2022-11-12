import { LinearGradient } from "expo-linear-gradient";

export const Gradient = () => {
    return (
        <LinearGradient
            colors={['#00ffff', 'transparent', 'transparent', '#00ffff']}
            style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                top: 0, // significa que começa do topo (Do zul para o transparente)
                zIndex: -1, // coloca a imagem para trás dos demais elementos, pois o 'z' é o eixo 'z' de 'x, y z', da profundidade do 3d. 
            }}
        />
    )
}