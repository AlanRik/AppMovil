import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Icon, Input } from 'react-native-elements'
import color from '../Styles/Colors'

export default function MyTextInput(props){

    return (
      <Input
        style={{alignItems: 'center'}}
        containerStyle={{marginBottom:20,borderBottomColor: color.LIGHTPRIMARYCOLOR, borderBottomWidth: 1}}
        inputStyle={{ fontSize:18,paddingVertical: 10,
            paddingHorizontal:8, marginTop:12,
            color: color.PRIMARYCOLOR,
            fontFamily:"Poppins-Light",}}
        placeholderTextColor={color.GRAY}
        placeholder={props.placeholder}
        leftIconContainerStyle={{ marginLeft:0 }}
        leftIcon={<Icon size={24} color={color.PRIMARYCOLOR} 
        type={'font-awesome'} name={props.image}/>}
        rightIcon={props.bolGone?
        <TouchableOpacity activeOpacity = { 0.8 } style={styles.btnVisibility} onPress = {props.onPressIcon}>
        <Image style={ styles.btnImage} tintColor={color.PRIMARYCOLOR} 
        source = { (props.secureTextEntry) ? require('../Recursos/images/ojo-abierto.png') : require('../Recursos/images/ojo-cerrado.png')}/>
        </TouchableOpacity>:
        <Icon size={24} color={color.PRIMARYCOLOR}
        type={'font-awesome'} name={props.imageRight}/>}
        errorStyle={{ color: color.RED }}
        errorMessage={(props.bolError)?props.strError:''}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        value={props.value}/>
    )
}

const styles = StyleSheet.create({  

      btnVisibility:
      {
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft:5,
        paddingRight:5
      },
     
      btnImage:
      {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
      },
})

