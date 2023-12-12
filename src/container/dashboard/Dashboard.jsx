import React, { useState } from "react";
import Layout from "../layout/Layout";

import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import PointOfSaleTwoToneIcon from "@mui/icons-material/PointOfSaleTwoTone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import SouthWestRoundedIcon from "@mui/icons-material/SouthWestRounded";

import Chart from "../chart/Chart";
import ColumnGarph from "../chart/ColumnGarph";

const Dashboard = () => {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <>
      <Layout showFooter={showFooter}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={2}
            sx={{
              backgroundColor: "aliceblue",
              position: "absolute", //when it disable screen responsive
              marginTop: "16px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "26px",
                    maxWidth: 345,
                    margin: "20px 20px",
                  }}
                >
                  <CardMedia
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "26px",
                      maxWidth: 345,
                      margin: "10px 20px",
                      borderRadius: "18px",
                      // backgroundColor: "gray",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="span"
                        sx={{ fontFamily: " 'Michroma', sans-serif" }}
                      >
                        $961
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        Total Order{" "}
                        <ArrowOutwardRoundedIcon
                          sx={{ background: "gray", borderRadius: "10px" }}
                        />
                      </Typography>
                    </CardContent>
                    <Chart />
                  </CardMedia>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "26px",
                    maxWidth: 345,
                    margin: "21px 21px",
                    padding: "23px",
                    paddingBottom: "57px",
                  }}
                >
                  <CardMedia
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "26px",
                      maxWidth: 345,
                      margin: "10px 20px",
                      borderRadius: "18px",
                      // backgroundColor: "gray",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        fontFamily: "'Raleway', sans-serif",
                        // display: "flex",
                        // flexDirection: "column",
                        // justifyContent: "flex-start ",
                        // alignItems: "flex-start",
                      }}
                    >
                      Total Earnings{" "}
                      <SouthWestRoundedIcon
                        sx={{ background: "#9b9595", borderRadius: "10px" }}
                      />
                    </Typography>
                    <Grid container spacing={5}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" color="textSecondary">
                          <AttachMoneyIcon
                            fontSize="small"
                            sx={{
                              marginBottom: "-4px",
                              fontFamily: " 'Michroma', sans-serif",
                            }}
                          />{" "}
                          Earnings
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{ fontFamily: " 'Michroma', sans-serif" }}
                        >
                          $10,000
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1" color="textSecondary">
                          <AccountBalanceIcon
                            fontSize="small"
                            sx={{
                              marginBottom: "-4px",
                              fontFamily: " 'Michroma', sans-serif",
                            }}
                          />{" "}
                          Balance
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{ fontFamily: " 'Michroma', sans-serif" }}
                        >
                          $5,000
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1" color="textSecondary">
                          <DateRangeIcon
                            fontSize="small"
                            sx={{
                              marginBottom: "-4px",
                              fontFamily: " 'Michroma', sans-serif",
                            }}
                          />{" "}
                          Last Payment
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{ fontFamily: " 'Michroma', sans-serif" }}
                        >
                          August 2023
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardMedia>
                </Card>
              </Grid>

              <Grid
                container
                spacing={2}
                item
                xs={20}
                sm={4}
                sx={{ marginBlockStart: "12px" }}
              >
                <Grid item xs={24} sm={10}>
                  <Card>
                    <CardMedia>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ display: "flex", flexDirection: "row-reverse" }}
                        >
                          <SavingsTwoToneIcon sx={{ marginTop: "2px" }} />
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="span"
                            sx={{ fontFamily: " 'Michroma', sans-serif" }}
                          >
                            $961
                          </Typography>
                        </Typography>
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          // sx={{ fontFamily: " 'Michroma', sans-serif" }}
                        >
                          Total Income
                        </Typography>
                      </CardContent>
                    </CardMedia>
                  </Card>
                </Grid>
                <Grid item xs={24} sm={10}>
                  <Card>
                    <CardMedia>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ display: "flex", flexDirection: "row-reverse" }}
                        >
                          <PointOfSaleTwoToneIcon sx={{ marginTop: "2px" }} />
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="span"
                            sx={{ fontFamily: " 'Michroma', sans-serif" }}
                          >
                            $864
                          </Typography>
                        </Typography>
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          // sx={{ fontFamily: " 'Michroma', sans-serif" }}
                        >
                          Total Income
                        </Typography>
                      </CardContent>
                    </CardMedia>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={30} sm={8}>
                <Card
                  sx={{
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   alignItems: "center",
                    //   marginTop: "26px",
                    //   maxWidth: 345,
                    margin: "20px 20px",
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Total Growth
                    </Typography>
                  </CardContent>
                  <ColumnGarph />
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "26px",
                    maxWidth: 345,
                    margin: "20px 20px",
                  }}
                >
                  <CardMedia>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        Popular Stocks
                      </Typography>
                    </CardContent>
                    <CardContent
                      sx={{
                        background: "rgb(237, 231, 246)",
                        borderRadius: "12px",
                        padding: "1px",
                      }}
                    >
                      <Chart />
                    </CardContent>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem sx={{ fontFamily: " 'Michroma', sans-serif" }}>
                        <ListItemText
                          primary="Bajaj Finery"
                          secondary="Jan 9, 2014"
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="TTML" secondary="Jan 7, 2014" />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText
                          primary="Reliance"
                          secondary="Jan 7, 2014"
                        />
                      </ListItem>
                    </List>
                    <ButtonGroup
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px 10px 10px",
                      }}
                    >
                      <Button variant="text">
                        View All
                        <ChevronRightIcon />
                      </Button>
                    </ButtonGroup>
                  </CardMedia>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Layout>
    </>
  );
};

export default Dashboard;
