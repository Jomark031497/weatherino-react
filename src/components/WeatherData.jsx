import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const WeatherData = ({ weatherData, unit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">{`${weatherData.city}, ${weatherData.country}`}</Typography>
      <Typography variant="subtitle2">
        {new Date().toLocaleDateString()}
      </Typography>
      <div className={classes.temp}>
        <Typography variant="h4">{`${weatherData.temp}°${unit}`}</Typography>
        <Typography variant="subtitle2">{`Feels like ${weatherData.temp_feels}°${unit}`}</Typography>
      </div>

      <Typography variant="h5">{`${weatherData.weather_description}`}</Typography>

      <img
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`}
        alt="weather-icon"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  temp: {
    margin: "1rem",
    padding: "1rem",
    background: "transparent",
  },
}));

export default WeatherData;
