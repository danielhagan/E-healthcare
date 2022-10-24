import {useState, useEffect} from 'react';

const useFetchBlockedDates = id => {
  const [blockedDates, setBlockDates] = useState([]);
  useEffect(() => {
    try {
      fetch(`http:192.168.43.8:8030/api/v1/blocked_dates/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async res => {
          try {
            const resData = await res.json();
            setBlockDates(resData.blockedDates);
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (err) {}
  }, [id]);
  return blockedDates;
};

export default useFetchBlockedDates;
