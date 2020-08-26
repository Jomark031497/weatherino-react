import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";

const SearchForm = ({ searchCity }) => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchCity(city, isCelsius);
    setCity("");
  };
  return (
    <Box component="form" onSubmit={handleSubmit} className={classes.root}>
      <TextField
        variant="outlined"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        size="small"
        required
      />

      <FormControlLabel
        value={isCelsius}
        className={classes.switch}
        control={
          <Switch
            checked={isCelsius}
            onChange={() => setIsCelsius(!isCelsius)}
          />
        }
        label={isCelsius ? "C" : "F"}
        labelPlacement="end"
      />

      <Button variant="outlined" type="submit" className={classes.button}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    display: "flex",
  },
  switch: {
    margin: "auto 0.3rem",
  },
  button: {
    margin: "auto 0.3rem",
  },
}));

export default SearchForm;
