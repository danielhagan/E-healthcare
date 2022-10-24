import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderView from '../components/HeaderView';
import {ScreenSize} from '../helpers/ScreenVariables';
import Button from '../components/Button';
import {theme} from '../core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Pay from './commons/Pay';

const PaymentScreen = ({navigation}) => {
  return (
    <View>
      <HeaderView navigation={navigation} headerName={'Payment'} />
      <View style={styles.container}>
        <View style={styles.selectionHeader}>
          <Text style={styles.headerText}> Payment</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.mainFlex}>
            <View style={styles.innerFlex}>
              <Icon name="arrow-forward" color={'orange'} size={20} />
              <Text style={styles.descText}>
                This is the Consultation Fee Charge,
                <Text style={styles.amountText}> $400.00</Text>
              </Text>
            </View>
            <View style={styles.innerFlex}>
              <Icon name="arrow-forward" color={'orange'} size={20} />
              <Text style={styles.descText}>
                Tax <Text style={styles.amountText}>$0.01</Text>
              </Text>
            </View>
            <View style={styles.innerFlex}>
              <Icon name="arrow-forward-sharp" color={'orange'} size={20} />
              <Text style={styles.descText}>
                VAT <Text style={styles.amountText}>$0.09</Text>
              </Text>
            </View>
          </View>
        </View>
        <Pay />

        {/* <Button mode="contained" style={styles.btn}>
            {' '}
            Make Payment
          </Button> */}
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
  },
  selectionHeader: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.primary,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginHorizontal: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  mainFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  innerFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 30,
  },
  amountText: {
    color: theme.colors.primary,
    fontSize: 15,
  },
  descText: {
    marginLeft: 14,
  },
});
