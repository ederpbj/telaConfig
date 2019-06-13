import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Foto extends Component {
    
    render(){
        return (
            <View>
                <Text style={styles.texto}>Foto</Text>
                <Button title="Ir para Mosaico" onPress={() => this.props.navigation.navigate('Mosaico')} />
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