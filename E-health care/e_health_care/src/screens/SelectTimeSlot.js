import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Title} from 'react-native-paper';
import HeaderView from '../components/HeaderView';
import {ScreenSize} from '../helpers/ScreenVariables';
import Button from '../components/Button';
import {theme} from '../core/theme';
import PaymentMoal from './commons/PaymentMoal';

const SelectTimeSlot = ({navigation, route}) => {
  const {timeSlots, feeCharge, date, docId, patient} = route.params;
  const [selected, setSelected] = useState({status: 0, time: null});
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSlotSelected = time_id => {
    setSelected({status: 1, time: time_id});
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <HeaderView navigation={navigation} headerName={'Slot Selection'} />
      <View style={styles.container}>
        <View style={styles.selectionHeader}>
          <Text style={styles.headerText}>Select A Time Slot</Text>
        </View>
        <View>
          <Title>Morining</Title>
          <View style={styles.timeSlotFlex}>
            {timeSlots?.morning?.map(item => (
              <TouchableOpacity
                disabled={item?.status === 1 ? true : false}
                key={item?._id}
                onPress={() => handleSlotSelected(item?._id)}>
                <View
                  style={[
                    styles.slotTextArea,
                    item?.status === 1
                      ? {backgroundColor: theme.colors.error}
                      : selected.time === item?._id
                      ? {backgroundColor: theme.colors.primary}
                      : '',
                  ]}>
                  <Text
                    style={[
                      styles.slotText,
                      item?.status === 1
                        ? {color: theme.colors.white}
                        : selected.time === item?._id
                        ? {color: theme.colors.white}
                        : '',
                    ]}>
                    {item?.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View>
          <Title>Evening</Title>
          <View style={styles.timeSlotFlex}>
            {timeSlots?.evening?.map(item => (
              <TouchableOpacity
                disabled={item?.status === 1 ? true : false}
                key={item?._id}
                onPress={() => handleSlotSelected(item?._id)}>
                <View
                  style={[
                    styles.slotTextArea,
                    item?.status === 1
                      ? {backgroundColor: theme.colors.error}
                      : selected.time === item?._id
                      ? {backgroundColor: theme.colors.primary}
                      : '',
                  ]}>
                  <Text
                    style={[
                      styles.slotText,
                      item?.status === 1
                        ? {color: theme.colors.white}
                        : selected.time === item?._id
                        ? {color: theme.colors.white}
                        : '',
                    ]}>
                    {item?.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity onPress={() => toggleModal()}>
          <Button mode="contained" style={styles.btn}>
            {' '}
            Book Appointment
          </Button>
          <PaymentMoal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            feeCharge={feeCharge}
            date={date}
            doctor={docId}
            patient={patient}
            timeSlot={selected}
            navigation={navigation}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectTimeSlot;

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
  timeSlotFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  slotTextArea: {
    backgroundColor: '#ccc',
    width: 140,
    padding: 12,
    marginHorizontal: 4,
    marginVertical: 5,
    borderRadius: 5,
  },
  slotText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    whitSpace: 'nowrap',
  },
  btn: {
    marginTop: 30,
  },
});
