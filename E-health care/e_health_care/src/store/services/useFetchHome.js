import React, {useEffect, useState} from 'react';

const useFetchHome = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    try {
      fetch('http:192.168.43.8:8030/api/v1/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async res => {
          try {
            const resData = await res.json();
            setCategories(resData.categories);
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (err) {}
  }, []);
  return categories;
};

export default useFetchHome;
