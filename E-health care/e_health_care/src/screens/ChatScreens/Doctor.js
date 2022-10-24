import {View, Text, Image, StyleSheet} from 'react-native';
import {theme} from '../../core/theme';
import React from 'react';

const Doctor = ({firstName, lastName, speciality}) => {
  return (
    <View style={styles.mainFlex}>
      <View style={styles.imageAndNameFlex}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/doc_image.jpg')}
        />
        <View style={styles.profile}>
          <Text style={styles.name}>
            Dr. {firstName} {lastName}
          </Text>
          <Text style={styles.specility}>{speciality}</Text>
        </View>
      </View>
      <View>{/* <Text>{'<'}</Text> */}</View>
    </View>
  );
};

export default Doctor;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 30,
    borderRadius: 22,
    color: '#fff',
  },
  mainFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imageAndNameFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  appointmentFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  profile: {
    marginLeft: 12,
  },
  specility: {
    color: theme.colors.lightgrey,
    fontSize: 10,
  },
  textBg: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  name: {
    color: theme.colors.grey,
    fontWeight: 'bold',
    fontSize: 15,
  },
  timeDate: {
    color: '#eee',
    fontWeight: '500',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
  },
});
