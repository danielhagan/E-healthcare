import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ScreenSize} from '../../helpers/ScreenVariables';
import React from 'react';
import {theme} from '../../core/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Doctor from './Doctor';

const HeadChat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.topHeader}>
          <Text style={styles.HeaderName}>Select a Doctor </Text>
        </View>
        <View>
          <Icon name="search" size={18} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.HeaderText}>Available Doctors</Text>
          <Doctor
            firstName={'Michael'}
            lastName={'Narh'}
            speciality={'Heart Surgeon'}
          />
          <Doctor
            firstName={'Theophilus '}
            lastName={'Pinto'}
            speciality={'Health specialist'}
          />
          <Doctor
            firstName={'Ben'}
            lastName={'Carson'}
            speciality={'Paedantrician'}
          />
          <Doctor
            firstName={'Asamoah'}
            lastName={'Frimpong'}
            speciality={'Tooth, Specialist'}
          />
          <Doctor
            firstName={'Theophilus '}
            lastName={'Pinto'}
            speciality={'Health specialist'}
          />
          <Doctor
            firstName={'Ben'}
            lastName={'Carson'}
            speciality={'Paediatrician'}
          />
          <Doctor
            firstName={'Asamoah'}
            lastName={'Frimpong'}
            speciality={'Tooth, Specialist'}
          />
          <Doctor
            firstName={'Theophilus '}
            lastName={'Pinto'}
            speciality={'Health specialist'}
          />
          <Doctor
            firstName={'Ben'}
            lastName={'Carson'}
            speciality={'Paediatrician'}
          />
          <Doctor
            firstName={'Asamoah'}
            lastName={'Frimpong'}
            speciality={'Tooth, Specialist'}
          />
          <View>
            <Text>Footer</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HeadChat;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
  },
  headerArea: {
    height: 30,
    backgroundColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: ScreenSize.SCEEN_WIDTH * 0.03,
  },
  topHeader: {},
  HeaderName: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.white,
  },
  HeaderText: {
    fontSize: 15,
    textAlign: 'center',
    color: theme.colors.faintedgrey,
    // fontWeight: '700',
    // color: theme.colors.white,
  },

  contentContainer: {
    paddingBottom: 80,
  },
});
