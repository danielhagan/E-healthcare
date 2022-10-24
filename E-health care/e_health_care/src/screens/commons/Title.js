import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Paragraph from '../../components/Paragraph';

const Title = ({title}) => {
  return (
    <View>
      <View style={styles.flexDisplay}>
        <Paragraph>{title}</Paragraph>
        <TouchableOpacity>
          <Text style={styles.muttedText}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  flexDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  muttedText: {
    color: '#ccc',
    fontSize: 14,
  },
});
