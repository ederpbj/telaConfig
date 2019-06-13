import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Picker, Switch, ScrollView } from 'react-native';

//Outras inportações
import DatePicker from 'react-native-date-picker';
import Slider from 'react-native-slider';

//Não funciona
//import NumberPicker from 'react-native-numberpicker';
//import PropTypes from 'prop-types';

export default class Config extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedValue:'', 
          salario:1500, 
          banco:'', 
          qtde:0, 
          texto:'', 
          nome:'', 
          data_nascimento:'',
          sexo:'', 
          altura:2 , 
          peso:100, 
          doador:false, 
          edoador:'',
          date: new Date(),
          day:'',
          num:0
        };
 
        this.apertouBotao = this.apertouBotao.bind(this);
        this.clickMe = this.clickMe.bind(this);
        this.sexoChangeOption = this.sexoChangeOption.bind(this);
        this.bancoChangeOption = this.bancoChangeOption.bind(this);
        this.dataChangeOption = this.dataChangeOption.bind(this);

        this.converterData = this.converterData.bind(this);
      }

      /* *module.exports.PropTypes = require('prop-types'); 
      let createClass;
      Object.defineProperty(module.exports, 'createClass', {
        get: function() {
          if (!createClass) {
            createClass = require('create-react-class').bind(module.exports);
          }
          return createClass;
        }
      });  */

     converterData(){
      let s = this.state;

      var dateFormat = require('dateformat');
      var day=dateFormat(s.data, "dd/mm/yyyy");
      s.data_nascimento = day

      this.setState(s);

     }

      clickMe = () => {
        var sexo = this.state.sexo;
        let s = this.state;

        s.nome = s.nome.toUpperCase();

        if(sexo == ''){
          alert("Por favor selecione uma opção: M ou F!")
        }else{
          if(s.banco == ''){
            alert("Por favor selecione uma opção de Banco!")
          }else{
            if(s.banco == 'bb'){
              s.banco = 'Banco do Brasil';
            }else if(s.banco == 'brad'){
              s.banco = 'Banco Bradesco';
            }else if(s.banco == 'cx'){
              s.banco = 'Caixa Econômica';
            }

            if(s.doador){
              s.edoador = 'Sim'
            }else{
              s.edoador = 'Não'
            }

            var dateFormat = require('dateformat');
            var day=dateFormat(s.data, "dd/mm/yyyy");
            s.data_nascimento = day

            this.setState(s);
            this.apertouBotao();
          }
        }
      }

      bancoChangeOption(val) {
        if (val !== 0) {
          this.setState({banco: val});
        }
      }

      sexoChangeOption(val) {
        if (val !== 0) {
          this.setState({sexo: val});
        }
      }
      
      dataChangeOption(val) {
        if (val !== 0) {
          this.setState({data: val});
        }
      }
      
     

    apertouBotao(){
      let s = this.state;

      

        Alert.alert(
            'Configurações',
            'Dados pessoais '+"\n"
            +'Nome: '+s.nome+"\n"
            +"Data de nascimento: "+s.data_nascimento+"\n"
            +"Sexo: "+s.sexo+"\n"
            +"Altura: "+s.altura.toFixed(2) +"\n"
            +"Peso: "+s.peso.toFixed(0)+"\n"
            +"Doador: "+s.edoador+"\n"
            
            +"\n"+'Dados financeiros '+"\n"
            +"Salário: R$ "+s.salario.toFixed(0)+",00"+"\n"
            +"Banco: "+s.banco+"\n"
            +"Quantidade: "+s.qtde.toFixed(0)+"\n",
            [
              
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('Passou ok') },
              //{text: 'OK', onPress: () => this.props.navigation.goBack() },
            ],
            { cancelable: false }
          )

        
        this.setState(s);
      }
    
    static navigationOptions = {
        title:'Configuração'
    };
    
    render(){
        return (
            <View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <View style={styles.margem}>

                <Text style={styles.titulo}>Dados Pessoais</Text>
              </View>
              
                  <View style={styles.inputArea}>
                    <Text style={styles.texto1}>Nome</Text>
                    <TextInput style={styles.input} placeholder="Qual seu nome?" onChangeText={(nome) => this.setState({nome})}/>
                    
                    <View style={styles.margem}>
                      <Picker
                        selectedValue={this.state.sexo}
                        onValueChange={this.sexoChangeOption}
                        prompt={'Options'}
                      >
                    
                          <Picker.Item label='Sexo' value='' />
                          <Picker.Item label='Masculino' value='Masculino' />
                          <Picker.Item label='Feminino' value='Feminino' />
                      </Picker>
                    </View>

                  <View style={styles.margem}>
                    <Slider 
                      minimumTrackTintColor="#0000FF" 
                      maximumTrackTintColor="gray" 
                      value={this.state.altura} 
                      minimumValue={1.00} 
                      maximumValue={3.00} 
                      onValueChange={(v)=>this.setState({altura:v})} />
                  
                    <Text>{this.state.altura.toFixed(2)} m</Text>
                  </View>
                  
                  <View style={styles.margem}>
                    <Slider 
                      minimumTrackTintColor="#0000FF" 
                      value={this.state.peso} 
                      minimumValue={10} 
                      maximumValue={300} 
                      onValueChange={(p)=>this.setState({peso:p})} />
                  
                    <Text>{this.state.peso.toFixed(0)} kg</Text>
                  </View>

                  <View style={styles.margem}>
                    <Switch 
                      thumbColor="0000FF" 
                      trackColor="#FF0000" 
                      value={this.state.doador} 
                      onValueChange={(v) => this.setState({doador:v})}/>
            
                    <Text>{this.state.doador?"Doador":"Não doador"}</Text>
                  </View>
                  
                  <View style={styles.margem}>
                    <Text style={styles.titulo}>Dados Financeiros</Text>
                  </View>

                  <View style={styles.margem}>
                    <Slider 
                      minimumTrackTintColor="#00FF00" 
                      animateTransitions={true} 
                      value={this.state.salario} 
                      minimumValue={200} 
                      maximumValue={30000} 
                      onValueChange={(s)=>this.setState({salario:s})} />
                  
                    <Text>R$ {this.state.salario.toFixed(0)}</Text>
                  </View>

                  <View style={styles.margem}>
                      <Picker
                        selectedValue={this.state.banco}
                        onValueChange={this.bancoChangeOption}
                        prompt={'Options'}
                      >
                          <Picker.Item label='Selecione um banco...' value='' />
                          <Picker.Item label='Banco do Brasil' value='bb' />
                          <Picker.Item label='Bradesco' value='brad' />
                          <Picker.Item label='Caixa Econômica Federal' value='cx' />
                      </Picker>
                    </View>

                    
                    <View style={styles.margem}>
                      <Text style={styles.texto1}>Data de nascimento</Text>
                      <DatePicker 
                        textColor={'#FF0000'}
                        mode={'date'}
                        locale={'pt'}
                        date={this.state.date}
                        onDateChange={this.dataChangeOption}
                        //onDateChange={date => this.setState({ date })}
                      />
                    </View>

                    
                  

                  </View>                  
                    

                  <Button title="Aperte aqui" onPress={this.clickMe}/>

                  <Text style={[styles.texto, styles.texto1]}>{this.state.nome.toUpperCase()}</Text>
                  
                  
                  
                  

                  <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />

                </ScrollView>
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
    titulo:{
      fontSize: 15,
      color: '#000000',
      fontWeight: 'bold',
      margin:20
    },
    inputArea:{
      alignSelf: 'stretch',
      margin:20
    },
    input:{
      borderWidth:1,
      borderColor: '#999999',
      backgroundColor: '#EEEEEE',
      color: '#000000',
      height:40,
      margin: 20,
      padding:10
    },
    area:{
      width:300,
      height:300,
      marginTop:10
    },
    guri:{
      width: 300,
      height: 300,
      marginTop: -70,
      zIndex:0
    },
    texto:{
      fontSize:25,
      color:'#FFFFFF',
      padding:10,
      //backgroundColor: 'rgb(0,0,0,0)'
      //backgroundColor: '#000000',
      backgroundColor: 'transparent',
      fontWeight: 'bold',
      textAlign: 'center',
      height:70
  
    },
    texto1:{
      zIndex:1
    },
    texto2:{
      zIndex:1,
      marginTop:-70
    },
    contentContainer: {
      paddingVertical: 20
    },
    margem:{
      marginTop:10,
      padding:10,
      alignItems: 'stretch'
    },
    picker:{

    }
	
});

