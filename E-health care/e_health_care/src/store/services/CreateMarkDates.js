import React from 'react';

const createMarkDates = arr => {
  const properties = {
    marked: true,
    dotColor: 'red',
    activeOpacity: 0,
  };
  const markDates = [];
  arr.map(item => {
    const date = item.date;
    markDates.push(date);
    // const newObj = {};
    // newObj[date] = properties;
    // // console.log(newObj);s
    // markDates.push(newObj);
  });

  return markDates;
};

export default createMarkDates;
