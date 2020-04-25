import React, {Component} from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
const TESOURA = require('../../../image/tesoura.png');
const PAPEL = require('../../../image/papel.png');
const PEDRA = require('../../../image/pedra.png');

class Jokenpo extends Component {
  render() {
    if (this.props.escolha === 'Pedra') {
      return (
        <View style={styles.jokenpo}>
          <Text style={styles.txtJogador}>{this.props.jogador} </Text>
          <Image source={PEDRA} />
        </View>
      );
    } else if (this.props.escolha === 'Papel') {
      return (
        <View style={styles.jokenpo}>
          <Text style={styles.txtJogador}>{this.props.jogador} </Text>
          <Image source={PAPEL} />
        </View>
      );
    } else if (this.props.escolha === 'Tesoura') {
      return (
        <View style={styles.jokenpo}>
          <Text style={styles.txtJogador}>{this.props.jogador} </Text>
          <Image source={TESOURA} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  jokenpo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtJogador: {
    fontSize: 18,
  },
});
export default Jokenpo;
