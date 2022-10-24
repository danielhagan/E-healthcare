import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import {StyleSheet} from 'react-native';
import {theme} from '../core/theme';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>The E- Health Care</Header>
      <Paragraph>
        The easiest way to start with your appointment with your doctor.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        style={styles.btnOutlineStyles}
        mode="outlined"
        onPress={() => console.log()}>
        Sign Up
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  btnOutlineStyles: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});
