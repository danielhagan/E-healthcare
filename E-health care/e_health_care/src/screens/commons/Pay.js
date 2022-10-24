import {View, Text} from 'react-native';
import {Paystack, paystackProps} from 'react-native-paystack-webview';
import React, {useRef, useState} from 'react';
import {Button} from 'react-native-paper';

const Pay = ({
  amount,
  billingEmail,
  doctor,
  patient,
  date,
  timeSlot,
  navigation,
}) => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const [response, setRes] = useState();
  const createAppointment = () => {
    try {
      fetch('http:192.168.43.8:8030/api/v1/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctor,
          patient,
          timeSlot,
          date,
        }),
      })
        .then(async res => {
          try {
            const resData = await res.json();
            setRes(resData.status);
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (err) {}
  };

  return (
    <View>
      <View style={{flex: 1}}>
        <Paystack
          paystackKey="pk_test_43369b5ca0b92cea7c20830472e37ba113e0e583"
          amount={parseFloat(amount)}
          billingEmail="superlaxtech@gmail.com"
          billingMobile="0542399377"
          activityIndicatorColor="green"
          currency="GHS"
          channels={['card', 'ussd', 'mobile_money']}
          onCancel={e => {
            // handle response here
            navigation.goBack();
          }}
          onSuccess={res => {
            // handle response here
            console.log(res);
            createAppointment();
          }}
          ref={paystackWebViewRef}
        />
      </View>

      <Button
        mode="contained"
        onPress={() => paystackWebViewRef?.current.startTransaction()}>
        <Text>Pay Now</Text>
      </Button>
    </View>
  );
};

export default Pay;
