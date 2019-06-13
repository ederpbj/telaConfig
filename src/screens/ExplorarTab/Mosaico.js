import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Mosaico extends Component {
    
    render(){
        return (
            <View>
                <Text style={styles.texto}>Mosaico</Text>
                <Button title="Ir para Perfil" onPress={() => this.props.navigation.navigate('Perfil')} />
                <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
	body:{
		paddingTop:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
	},
	texto:{
        fontSize:25,
        color:'#FF0000'

    }
	
});