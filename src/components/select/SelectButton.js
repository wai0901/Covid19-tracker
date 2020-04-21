import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Input, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { COUNTRIESNAMES } from '../../shared/countries';
import './SelectButton.css';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
      fullWidth: true,
      width: "90%"
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  function getStyles(state, stateName, theme) {
    return {
      fontWeight:
        stateName.indexOf(state) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const SelectButton = (props) => {

    const countries = COUNTRIESNAMES;
    const language = props.menuLanguage[0];

    const classes = useStyles();
    const theme = useTheme();

    const [stateName, setStateName] = useState([]);
    const [countryName, setCountryName] = useState([]);

    const stateHandleChange = (event) => {
        setStateName(event.target.value);
        props.selectStateHandler(event.target.value);
        event.preventDefault();
      };

    const countriesHandleChange = (event) => {
        setCountryName(event.target.value);
        props.selectCountryHandler(event.target.value)
        event.preventDefault();
      };

    return (
        <div className="select-container">
            <div className="select-states">
                <FormControl className={classes.formControl}>
                <InputLabel id="statesSelect">{language.states}</InputLabel>
                <Select
                  labelId="statesSelect"
                  id="statesSelect"
                  value={stateName}
                  onChange={stateHandleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {props.states.map((state, index) => (
                    <MenuItem key={index} value={state} style={getStyles(state, stateName, theme)}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
            </div>
            <div className="select countries">
                <FormControl className={classes.formControl}>
                <InputLabel id="countrySelect">{language.countries}</InputLabel>
                <Select
                  labelId="countrySelect"
                  id="countrySelect"
                  value={countryName}
                  onChange={countriesHandleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country} style={getStyles(country, countryName, theme)}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default SelectButton;