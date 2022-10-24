import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../core/theme';
import Title from './commons/Title';
import Appointment from './commons/Appointment';
import SearchBox from './commons/SearchBox';
import {inject, observer} from 'mobx-react';
import {ScreenSize} from '../helpers/ScreenVariables';
import TopRelated from './commons/TopRelated';
import Icon from 'react-native-vector-icons/Ionicons';
import useFetchHome from '../store/services/useFetchHome';
import useFetchDoctors from '../store/services/useFetchDoctors';

const Dashboard = ({navigation, ...props}) => {
  const {getUser} = props.store;
  const doctors = useFetchDoctors();
  const categories = useFetchHome();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainFlex}>
          <View style={styles.profileName}>
            <Image
              style={styles.profileImage}
              source={require('../assets/doc_image_2.jpg')}
            />
            <View style={styles.nameArea}>
              <Text>Welcome!</Text>
              <Text>{getUser().firstName} 👍</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name="ellipsis-vertical" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            <Title title="Upcomming Appointment" />
            <Appointment navigation={navigation} />
            <SearchBox />
            <Title title="Catergory" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories &&
                categories.map(item => (
                  <View key={item._id} style={styles.categoryArea}>
                    <Text style={styles.specialityText}>{item.name}</Text>
                  </View>
                ))}
            </ScrollView>
            <Title title="Top Doctors" />

            {doctors.length > 0 ? (
              doctors.map(item => (
                <TopRelated
                  key={item?._id}
                  patient={getUser()?._id}
                  doctor={item}
                  navigation={navigation}
                />
              ))
            ) : (
              <View style={styles.emptyView}>
                <Text> 😴No doctors Available</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default inject('store')(observer(Dashboard));

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
  },
  mainFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 8,
  },
  profileName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
  },
  nameArea: {
    marginLeft: 12,
  },
  categoryArea: {
    backgroundColor: theme.colors.staleGreen,
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  specialityText: {
    fontWeight: '500',
    fontSize: 13,
    color: '#333',
  },
  myMargin: {
    marginTop: 100,
  },
  contentContainer: {
    paddingBottom: 150,
  },
});
