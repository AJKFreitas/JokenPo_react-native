/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Button, View, StyleSheet, Text} from 'react-native';
import {name as appName} from './app.json';
import Topo from './src/components/topo/topo';
import Jokenpo from './src/components/jokenpo/jokenpo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: ''};
  }
  jokenpo(escolhaUsuario) {
    var numeroAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';
    var resultado = '';

    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = 'Pedra';
        break;
      case 1:
        escolhaComputador = 'Papel';
        break;
      case 2:
        escolhaComputador = 'Tesoura';
        break;
    }

    if (escolhaComputador === 'Pedra') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'Papel') {
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você Perdeu';
      }
      if (escolhaUsuario === 'Papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você ganhou';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario === 'Papel') {
        resultado = 'Você Perdeu';
      }
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Empate';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado,
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="Pedra"
              onPress={() => {
                this.jokenpo('Pedra');
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Papel"
              onPress={() => {
                this.jokenpo('Papel');
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="Tesoura"
              onPress={() => {
                this.jokenpo('Tesoura');
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado} </Text>

          <Jokenpo
            escolha={this.state.escolhaComputador}
            jogador="Computador"
          />
          <Jokenpo escolha={this.state.escolhaUsuario} jogador="Usuário" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});

AppRegistry.registerComponent(appName, () => App);
