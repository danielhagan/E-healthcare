import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TextInput from '../../components/TextInput';
import {ScreenSize} from '../../helpers/ScreenVariables';

const SearchBox = () => {
  return (
    <View>
      <View style={styles.flexDisplay}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            label="Search"
            returnKeyType="next"
            //  value={}
            //  onChangeText={text => setEmail({value: text, error: ''})}
            //  error={!!email.error}
            //  errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="search doctor"
            //  keyboardType="email-address"
          />
        </View>
        <View>
          <Text>Filter</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 10,
    width: ScreenSize.SCEEN_WIDTH - 83,
  },

  searchInput: {
    borderRadius: 60,
  },

  flexDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
