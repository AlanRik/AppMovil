import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import {mainStyles, loginStyles} from '../Styles/styles';
import MyTextInput from '../Component/MyTextInput';
import MyButton from '../Component/MyButton';
import color from '../Styles/Colors';
import {UsuarioContext} from '../Context/UsuarioContext';

export default function LoginScreen(props) {
  const [login, loginAction] = useContext(UsuarioContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <View style={[mainStyles.container, {padding: 50}]}>
      <StatusBar backgroundColor={color.ORANGE} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={require('../Recursos/images/tucuman.jpg')}
          style={{height: 250, width: 250}}
        />
      </View>
      <MyTextInput
        keyboardType="email-address"
        placeholder="E-mail"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <MyButton titulo="Iniciar Sesión" onPress={() => iniciarSesion()}  />
      
     
    </View>
  );

  function iniciarSesion() {
    loginAction({type: 'sign',data: {email,password,},});
    goToScreen('Principal');
  }

  function goToScreen(routeName) {
    props.navigation.navigate(routeName);
  }
}
