import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchForm from "./SearchForm";
import WeatherData from "./WeatherData";

const Home = () => {
  const [weatherData, setWeatherData] = useState();
  const [unit, setUnit] = useState();
  const [error, setError] = useState();
  const classes = useStyles();

  const searchedCity = async (city, temp) => {
    const unit = temp ? "metric" : "imperial";
    setError("");
    setUnit(unit);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=33b6c97cbe9b5cc44cfea7be5826600f`,
        { mode: "cors" }
      );
      const data = await res.json();

      setWeatherData({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        temp_feels: Math.round(data.main.feels_like),
        icon: data.weather[0].icon,
        weather_condition: data.weather[0].main,
        weather_description: data.weather[0].description,
      });
    } catch (err) {
      setError("No City Found");
    }
  };

  useEffect(() => {
    searchedCity("Manila", "metric");
  }, []);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.navbar}>
          <Typography variant="h5">Weatherino</Typography>
        </div>
        <Grid container justify="center">
          <Grid item container justify="center" xs={12}>
            <SearchForm searchCity={searchedCity} />
          </Grid>
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              <Grid item container justify="center" alignItems="center" xs={12}>
                {weatherData ? (
                  <WeatherData
                    weatherData={weatherData}
                    unit={unit === "metric" ? "C" : "F"}
                  />
                ) : (
                  <div> No data </div>
                )}
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    background: "#ddd",
    backgroundImage: "url(./images/background.jpg)",
    backgroundSize: "100% 100%",
    height: "100vh",
  },
  navbar: {
    minHeight: "10vh",
    textAlign: "center",
  },
}));

export default Home;
