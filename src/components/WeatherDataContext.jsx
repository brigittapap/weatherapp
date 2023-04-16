import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = (props) => {
  const [location, setLocation] = useState();

  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3401a98f67244a2761343403f0115876`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });

      setLocation("");
    }
  };

  const setHome = () => {
    console.log("Hooome");
    setData("");
  };

  return (
    <WeatherDataContext.Provider value={[data, setData]}>
      <div className="app">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={setHome}
              >
                Home
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              ></Typography>

              <div className="search">
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  onKeyPress={searchLocation}
                  placeholder="Enter Location"
                  type="text"
                />
              </div>
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
            </Toolbar>
          </AppBar>
        </Box>

        {/* <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div> */}
      </div>
      {props.children}
    </WeatherDataContext.Provider>
  );
};
