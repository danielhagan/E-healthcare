import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../core/theme';
import React from 'react';

const TopRelated = ({doctor, patient, navigation, ...props}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainFlex}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DocDetails', {doctor, patient})
            }>
            <View style={styles.imageAndNameFlex}>
              <Image
                style={styles.profileImage}
                source={require('../../assets/doc_image.jpg')}
              />
              <View style={styles.profile}>
                <Text style={styles.name}>
                  Dr. {doctor?.doctor?.firstName} {doctor?.doctor?.lastName}
                </Text>
                <View style={styles.flexAlignLeft}>
                  <Text style={styles.speciality}>
                    {doctor?.doctor?.speciality}
                  </Text>
                  <Text style={styles.feeCharge}>
                    {' '}
                    Fee:{' '}
                    <Text style={styles.amountText}>$ {doctor?.feeCharge}</Text>
                  </Text>
                </View>
                <View style={styles.appointmentFlex}>
                  <View style={styles.textBg}>
                    <Text style={styles.timeDate}>{doctor?.rating}⭐</Text>
                  </View>
                  <View style={styles.textBg}>
                    <Text style={styles.timeDate}>
                      🕒{doctor?.visitingHours}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopRelated;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.staleGreen,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 10,
    borderRadius: 22,
    marginBottom: 8,
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
  speciality: {
    color: '#777',
  },
  textBg: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  name: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timeDate: {
    color: '#444',
    fontWeight: '500',
  },
  profileImage: {
    width: 80,
    height: 90,
    borderRadius: 12,
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
  },

  flexAlignLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  feeCharge: {
    marginLeft: 14,
  },
  amountText: {
    fontWeight: '600',
    color: '#000',
  },
});
