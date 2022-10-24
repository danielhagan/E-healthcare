import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Paragraph, Title} from 'react-native-paper';
import {theme} from '../core/theme';
import {ScreenSize} from '../helpers/ScreenVariables';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderView from '../components/HeaderView';
import RenderCalendar from './commons/RenderCalendar';
const DocDetails = ({navigation, route, ...props}) => {
  const {doctor, patient} = route.params;
  const [number] = useState('0542399377');
  return (
    <>
      <HeaderView headerName="Details" navigation={navigation} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View styles={{backgroundColor: theme.colors.primary}}>
            <View style={styles.imageWithDetails}>
              <View>
                <Title>
                  Dr. {doctor?.doctor?.firstName} {doctor?.doctor?.lastName}
                </Title>
                <View style={styles.profileDetails}>
                  <Text>🦷</Text>
                  <Text>{doctor?.doctor?.speciality}</Text>
                  <Text>⭐ {doctor?.rating}</Text>
                </View>
                <View style={styles.visitingHours}>
                  <Text style={styles.textHeader}>Visiting Hours</Text>
                  <Text>🕒{doctor?.visitingHours} </Text>
                </View>
                <View style={styles.patientsArea}>
                  <Text style={styles.textHeader}>Total Patients</Text>
                  <Text>{doctor?.doctor?.patientTotal ?? '200'}+ </Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.imageSize}
                  source={require('../assets/doc_image.jpg')}
                />
              </View>
            </View>
            <View style={styles.chatArea}>
              <View style={styles.iconArea}>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${number}`)}>
                  <Icon name="call" size={30} />
                </TouchableOpacity>
              </View>
              <View style={styles.iconArea}>
                <Icon name="message" size={30} />
              </View>
            </View>
          </View>
          <Title> Description</Title>
          <Paragraph>
            {doctor?.description?.slice(0, 60)}
            <Text>....Read More</Text>
          </Paragraph>
          <View style={styles.calendarArea}>
            <Text style={[styles.textHeader, styles.appointmentText]}>
              Select Appointment Date
            </Text>
            <RenderCalendar
              navigation={navigation}
              patient={patient}
              timeSlots={doctor?.timeSlots}
              feeCharge={doctor?.feeCharge}
              docId={doctor?.doctor?._id}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DocDetails;

const styles = StyleSheet.create({
  mainContainer: {
    padding: ScreenSize.SCEEN_WIDTH * 0.04,
    // backgroundColor: theme.colors.primary,
  },
  detailsHeader: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  profileBg: {
    borderBottomRightRadius: 85,
    borderBottomLeftRadius: 20,
  },
  imageWithDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageSize: {
    width: 150,
    height: 180,
  },
  visitingHours: {
    marginTop: 18,
  },
  textHeader: {
    color: '#222',
    fontWeight: '400',
    fontSize: 15,
    marginBottom: 5,
  },
  patientsArea: {
    marginTop: 18,
  },
  chatArea: {
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 12,
  },
  iconArea: {
    backgroundColor: theme.colors.staleGreen,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 8,
  },

  appointmentText: {
    textAlign: 'center',
  },
});
