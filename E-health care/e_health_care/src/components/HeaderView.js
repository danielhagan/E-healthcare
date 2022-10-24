import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderView = ({headerName, navigation, ...props}) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.headerFlex}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTextName}>{headerName}</Text>
        <Text>-</Text>
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  headerFlex: {
    display: 'flex',
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#222',
  },
});
