import React from 'react';

const getCurrentTime = (seconds: number, result: any, shouldFail: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getCurrentTime")
      if (shouldFail) reject();
      resolve(result);
    }, seconds * 1000);
  })
}

const getMyLocation = (seconds: number, result: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getMyLocation")
      resolve(result);
    }, seconds * 1000);
  })
}

const getWeatherFromMeteo = (seconds: number) => {
  return Promise.all([getCurrentTime(seconds, true, true), getMyLocation(seconds, true)])
    .catch(() => console.log("Meteo Failed!"))
}

const getWeatherFromOnet = (seconds: number) => {
  return Promise.all([getCurrentTime(seconds, true, false), getMyLocation(seconds, true)])
}

const getWeatherFromGoogle = (seconds: number) => {
  return Promise.all([getCurrentTime(seconds, true, false), getMyLocation(seconds, true)])
}

const canIGoOutNow = () => {
  console.log("CanIGoOutNow")
  Promise.race([getWeatherFromMeteo(2), getWeatherFromOnet(3), getWeatherFromGoogle(5)])
    .then(() => {
      console.log("Yes!");
    })
    .catch(() => console.log("Failed!"))
}

function App() {
  return (
    <div className="container mt-5">
      <button className="btn btn-dark" onClick={canIGoOutNow}>GO!</button>
    </div>

  );
}

export default App;