import {useEffect, useState} from 'react';

const useFetchDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    try {
      fetch('http:192.168.43.8:8030/api/v1/doctors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async res => {
          try {
            const resData = await res.json();
            setDoctors(resData.doctors);
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (err) {}
  }, []);
  return doctors;
};

export default useFetchDoctors;
