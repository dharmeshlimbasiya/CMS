import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Layout from "../../layout/Layout";

const TimeTracking = () => {
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours > 0 ? hours + "h " : ""}${
      minutes > 0 ? minutes + "m " : ""
    }${seconds}s`;
  };

  const [clockedIn, setClockedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [onBreak, setOnBreak] = useState(false);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [breakTime, setBreakTime] = useState(0);
  const [totalTimeWhenBreakStarted, setTotalTimeWhenBreakStarted] = useState(0);

  const toggleClock = () => {
    if (clockedIn) {
      if (!onBreak) {
        const endTime = new Date();
        const seconds = Math.floor((endTime - startTime) / 1000);
        setTotalTime(totalTime + seconds);
      }
    } else {
      setStartTime(new Date());
    }
    setClockedIn(!clockedIn);
  };

  const startBreak = () => {
    if (clockedIn && !onBreak) {
      if (!totalTimeWhenBreakStarted) {
        // Store the total time when the break started
        setTotalTimeWhenBreakStarted(totalTime);
      }
      setOnBreak(true);
      setBreakStartTime(new Date());
    }
  };

  const stopBreak = () => {
    if (onBreak) {
      const endTime = new Date();
      const seconds = Math.floor((endTime - breakStartTime) / 1000);
      setBreakTime(breakTime + seconds);
      setOnBreak(false);
      // Don't resume the total timer when the break ends
      setTotalTimeWhenBreakStarted(0);
    }
  };

  const resetAll = () => {
    setClockedIn(false);
    setStartTime(null);
    setTotalTime(0);
    setOnBreak(false);
    setBreakStartTime(null);
    setBreakTime(0);
    setTotalTimeWhenBreakStarted(0);
  };

  useEffect(() => {
    let interval;
    if (clockedIn && !onBreak) {
      interval = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    } else if (onBreak) {
      interval = setInterval(() => {
        setBreakTime((prevBreakTime) => prevBreakTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [clockedIn, onBreak]);

  return (
    <Layout>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          flexDirection: "inherit",
          justifyContent: "end",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "18px",
            backgroundColor: "#f0f0f0",
            padding: "10px",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontFamily: "'Raleway', sans-serif", color: "gray" }}
            >
              Time Tracking :
            </Typography>
            <Divider />

            <Typography
              variant="h6"
              sx={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              {clockedIn ? "Clocked In" : "Clocked Out"}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.01rem",
                fontFamily: "'Michroma', sans-serif",
                color: "gray",
              }}
            >
              Total Time Worked: <b>{formatTime(totalTime)}</b>
            </Typography>
            {onBreak && (
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.01rem",
                  fontFamily: "'Michroma', sans-serif",
                  color: "gray",
                }}
              >
                Break Time: <b>{formatTime(breakTime)}</b>
              </Typography>
            )}
            <Button
              variant="contained"
              color={clockedIn ? "secondary" : "primary"}
              onClick={toggleClock}
              sx={{ margin: 1 }}
            >
              {clockedIn ? "Clock Out" : "Clock In"}
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={startBreak}
              disabled={!clockedIn || onBreak}
              sx={{ margin: 1 }}
            >
              Start Break
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={stopBreak}
              disabled={!onBreak}
              sx={{ margin: 1 }}
            >
              Stop Break
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={resetAll}
              sx={{ margin: 1 }}
            >
              Reset All
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default TimeTracking;