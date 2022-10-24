import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Alert} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {passwordValidator, emailValidator} from '../helpers/Validators';
import {inject, observer} from 'mobx-react';
import ToastManager, {Toast} from 'toastify-react-native';

// import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const {setToken, setUser} = props.store;
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [isLoading, setLoading] = useState(false);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    setLoading(true);

    // try {
    //   let res = await auth().signInWithEmailAndPassword(
    //     email.value,
    //     password.value,
    //   );
    //   Alert.alert(JSON.stringify(res));
    //   console.log(res);
    // } catch (error) {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }

    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }

    //   console.error(error);
    // }
    // let response = auth().createUserWithEmailAndPassword(email, password);//

    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'Dashboard'}],
    // });

    try {
      fetch('http:192.168.43.8:8030/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
        .then(async res => {
          try {
            const resData = await res.json();
            console.log(resData);
            if (resData?.message?.startsWith('Incorrect')) {
              Toast.error(resData?.message);
            }
            await setUser(resData.user);
            await setToken(resData.token);
            setLoading(false);
          } catch (err) {
            Toast.error('Email or password is Incorrect');
            console.log(err);
            setLoading(false);
          }
        })
        .catch(err => {
          Toast.error('Email or password is Incorrect');
          console.log('err', err);
          setLoading(false);
        });
    } catch (err) {
      if (err.response) {
        Toast.error('Email or password is Incorrect');
        console.log('response', err.response.data.message);
        console.log('response status', err.response.status);
        console.log('response request', err.response.headers);
        setLoading(false);
        throw Error(err.response.data.message);
      } else if (err.request) {
        console.log('response,request', err.request);
        setLoading(false);
      } else {
        console.log('Error- message', err.message);
        setLoading(false);

        throw new Error(err.message);
      }
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <Background>
      <View style={styles.container}>
        <ToastManager />
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => console.log('navigate to reset password screen')}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        {isLoading && <ActivityIndicator />}
        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => console.log('navigate to to register screen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};
export default inject('store')(observer(LoginScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
