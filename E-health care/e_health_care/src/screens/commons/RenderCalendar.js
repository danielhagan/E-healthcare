import {View, StyleSheet} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import React, {useState} from 'react';
import useFetchBlockedDates from '../../store/services/useFetchBlockedDates';

const RenderCalendar = ({navigation, docId, patient, timeSlots, feeCharge}) => {
  const [selectedDate, setSelectedDate] = useState(['2022-10-11']);
  const blockedDates = useFetchBlockedDates(docId);
  let markDates = {};
  const properties = {
    marked: true,
    selected: true,
    dotColor: 'white',
    selectedColor: 'red',
    disabled: true,
    disableTouchEvent: true,
  };
  blockedDates[0]?.dates?.map((item, i) => {
    let newObj = {};
    newObj[item.date] = properties;
    markDates = {...markDates, ...newObj};
  });
  const dateTobeMarked = markDates;
  console.log('......markks', markDates);
  const _onDayPress = day => {
    setSelectedDate([...selectedDate, day.dateString]);
    navigation.navigate('SlotSelection', {
      timeSlots,
      feeCharge,
      date: day.dateString,
      patient,
      docId,
    });
  };
  Object.freeze(dateTobeMarked);
  return (
    <View>
      <View>
        <Calendar
          style={styles.calendarStyles}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2022-9-30'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2052-07-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={_onDayPress}
          // Handler which gets executed on day long press. Default = undefined
          // onDayLongPress={day => {
          //   console.log('selected day', day);
          // }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // markedDates={{
          //   [selectedDate]: {selected: true},
          // }}

          markedDates={dateTobeMarked}
          //   markedDates={{
          //     '2022-10-16': {selected: true, marked: true, selectedColor: 'blue'},
          //     '2012-10-17': {marked: true},
          //     '2012-10-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          //     '2012-10-19': {disabled: true, disableTouchEvent: true},
          //   }}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          theme={{
            backgroundColor: '#CF000F',
            selectedDayBackgroundColor: 'green',
            arrowColor: 'green',
            // todayTextColor: 'green',
            textDayFontSize: 12,
            textMonthFontSize: 12,
            textDayHeaderFontSize: 12,
            // selectedDayTextColor: '#CF000F',
            // dayTextColor: theme.colors.primary,
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
        />
      </View>
    </View>
  );
};

export default RenderCalendar;

const styles = StyleSheet.create({
  calendarArea: {
    // height: 300,
    // overflow: 'scroll',
    padding: 15,
  },
  calendarStyles: {
    borderWidth: 1,
    borderColor: 'gray',
    // height: 200,
    overflow: 'scroll',
  },
});
