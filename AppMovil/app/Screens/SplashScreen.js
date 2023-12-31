import React, {useContext, useEffect} from "react";
import { View, StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable'
import { splashStyles } from '../Styles/styles';
import { getUsuario } from "../Storage/UsuarioAsyncStorage";
import { UsuarioContext } from "../Context/UsuarioContext";
 

export default function SplashScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)

    useEffect(() =>{
        fetchSesion(loginAction)
    }, [])

    return (
        <View style={splashStyles.image}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
            <Animatable.Image
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                    width: 200,
                    height: 200,
                    margin: 100,
                }}
                source={require('../Recursos/images/tucuman.jpg')}
                />
        </View>
    )

    async function fetchSesion(loginAction){
        
        const response = await getUsuario()

        console.log(response)

        if(response == null){
            setTimeout(() =>{
                goToScreen('Login')
            }, 3000)
            return
        }

        loginAction({ type: 'sing-in', data: response})
        setTimeout(() =>{
            goToScreen('Principal')
        }, 500)
    }

    function goToScreen(routeName){
        props.navigation.replace(routeName)
    }
}

