import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Feed extends Component {
    static navigationOptions = ({navigation}) => ({
        title:"Home",
        //header:null
        //headerRight:<View style={{width:30, height:30, backgroundColor:'#FF0000'}}></View>
        //headerRight:<View style={{marginRight:20, width:30, height:30, backgroundColor:'#FF0000'}} ><Button title="..." onPress={() => this.props.navigation.navigate('Perfil')} /></View>,
        headerRight: (
            <Button
              //onPress={() => alert('This is a button!')}
              onPress={navigation.getParam('increaseCount')}
              title="Config"
              color="#gray"
            />
          ),
        headerLeft:<View style={{marginLeft:20, width:30, height:30, backgroundColor:'#00FF00'}}></View>,
        headerStyle:{
            backgroundColor:'#0000FF',
            height:80
        },
        headerTintColor:'#FFFFFF',
        headerTitleStyle:{
            fontSize:30
        }
       
	});

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
      }
      
	constructor(props) {
		super(props);
		this.state = {};

		this.abrirTela = this.abrirTela.bind(this);
	}

    _increaseCount = () => {
        //this.setState({ count: this.state.count + 1 });
        this.props.navigation.navigate("Config");
    };

	abrirTela() {
		this.props.navigation.navigate("Perfil");
    }
    
    render(){
        return (
            <View>
                <Text style={styles.texto}>Feed 3</Text>
                <Button title="Ir para Perfil via função" onPress={this.abrirTela} />
                <Button title="Ir para perfil" onPress={() => this.props.navigation.navigate('Perfil')} />
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

