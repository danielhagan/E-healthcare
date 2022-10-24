import {useState} from 'react';

const UseBookAppointment = (doctor, patient, date, timeSlot) => {
  const [res, setRes] = useState([]);

  try {
    fetch('http:192.168.43.8:8030/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        doctor,
        patient,
        timeSlot,
        date,
      }),
    })
      .then(async res => {
        try {
          const resData = await res.json();
          setRes(resData.status);
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  } catch (err) {}

  return res;
};

export default UseBookAppointment;
