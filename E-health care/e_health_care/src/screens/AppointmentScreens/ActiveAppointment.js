import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Appointment from '../commons/Appointment';
import {ScreenSize} from '../../helpers/ScreenVariables';
import useFetchActive from '../../store/services/useFetchActive';
import {inject, observer} from 'mobx-react';

const ActiveAppointment = props => {
  const {getUser} = props.store;
  const appointment = useFetchActive(getUser()._id);
  console.log(getUser()._id);
  return (
    <View style={styles.container}>
      {appointment.length > 0 ? (
        appointment.map(item => <Appointment />)
      ) : (
        <View style={styles.emptyView}>
          <Text> 😴No current Appointment Available</Text>
        </View>
      )}
    </View>
  );
};

export default inject('store')(observer(ActiveAppointment));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
    marginTop: 30,
  },
  emptyView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
