import {useEffect, useState} from 'react';

const useFetchActive = id => {
  const [activeAppointment, setActive] = useState([]);

  useEffect(() => {
    try {
      fetch(`http:192.168.43.8:8030/api/v1/bookings/patient/${id}/active`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async res => {
          try {
            const resData = await res.json();
            setActive(resData);
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (err) {}
  }, [id]);
  return activeAppointment;
};

export default useFetchActive;
