import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScreenSize} from '../../helpers/ScreenVariables';
import {theme} from '../../core/theme';
import Pay from './Pay';

const PaymentMoal = ({
  isModalVisible,
  setModalVisible,
  feeCharge,
  date,
  timeSlot,
  doctor,
  patient,
}) => {
  console.log(doctor, patient, timeSlot);
  return (
    <View style={{flex: 1}}>
      <Modal
        animationInTiming={800}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="left"
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalStyles}>
          <View>
            {/* <HeaderView navigation={navigation} headerName={'Payment'} /> */}
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
                      <Text style={styles.amountText}> ${feeCharge}</Text>
                    </Text>
                  </View>
                  <View style={styles.innerFlex}>
                    <Icon name="arrow-forward" color={'orange'} size={20} />
                    <Text style={styles.descText}>
                      Tax <Text style={styles.amountText}>$0.01</Text>
                    </Text>
                  </View>
                  <View style={styles.innerFlex}>
                    <Icon
                      name="arrow-forward-sharp"
                      color={'orange'}
                      size={20}
                    />
                    <Text style={styles.descText}>
                      VAT <Text style={styles.amountText}>$1.09</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            {/* <Button
              style={{marginVertical: 10}}
              title="Hide modal"
              onPress={toggleModal}
            /> */}
            <Pay
              date={date}
              timeSlot={timeSlot}
              doctor={doctor}
              patient={patient}
              amount={feeCharge + 2}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PaymentMoal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
  },
  modalStyles: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 18,
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
    justifyContent: 'center',
    marginVertical: 8,
    // justifyContent: 'space-between',
  },
  btn: {marginVertical: 10},
  amountText: {
    color: theme.colors.primary,
    fontSize: 15,
  },
  descText: {
    marginLeft: 14,
    textAlign: 'center',
  },
});
