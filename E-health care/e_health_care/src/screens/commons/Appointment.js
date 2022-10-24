import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../core/theme';

const Appointment = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainFlex}>
          <View style={styles.imageAndNameFlex}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/doc_image.jpg')}
            />
            <View style={styles.profile}>
              <Text style={styles.name}>Dr. Rohul Atom</Text>
              <Text style={styles.specility}>Tooth, Specialist</Text>
            </View>
          </View>
          <View>
            <Text>:::</Text>
          </View>
        </View>

        <View style={styles.appointmentFlex}>
          <View style={styles.textBg}>
            <Text style={styles.timeDate}>📅 Sep 18, 2022</Text>
          </View>
          <View style={styles.textBg}>
            <Text style={styles.timeDate}>🕒 11Am -3PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
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
    color: '#eee',
  },
  textBg: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  name: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 20,
  },
  timeDate: {
    color: '#eee',
    fontWeight: '500',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 80 / 2,
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
  },
});
