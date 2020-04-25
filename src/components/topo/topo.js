import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

const TOPO = require('../../../image/original.png');
class Topo extends Component {
  render() {
    return (
      <View>
        <ImageBackground style={styles.imageTopo} source={TOPO}>
          <View style={styles.imageTopo} />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageTopo: {
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 200,
  },
});
export default Topo;
