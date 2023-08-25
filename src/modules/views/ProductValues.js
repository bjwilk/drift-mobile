import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  border: "1px solid #ccc", // Add border style
  borderRadius: "10px", // Add border radius
  padding: "20px", // Add padding
  bgcolor: "#161B22",
  color: "greenyellow"
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#0D1117" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h5" sx={{ my: 3, fontWeight: 600, color: "#FFCC00" }}>
                Express Detail
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
                Starting at $90
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "white" }}>
                Our quick Express Detail package offers:
              </Typography>
              <ul>
                <li>Vacuum entire interior</li>
                <li>Wipe down all surfaces</li>
                <li>Window cleaning</li>
                <li>Outside wash & wax</li>
                <li>Clean tires & rims</li>
                <li>Wheel well cleaning</li>
                <li>Tire dressing</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h5" sx={{ my: 3, fontWeight: 600, color: "#FFCC00" }}>
                Luxury Detail
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
                Starting at $180
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "white" }}>
                Elevate your vehicle with our comprehensive Luxury Detail
                package that includes:
              </Typography>
              <ul>
                <li>Deep vacuum interior & trunk</li>
                <li>Complete surface wipedown</li>
                <li>Steam clean vents</li>
                <li>Steam clean seats, carpets & seatbelts</li>
                <li>Shampoo seats, carpets & floor mats</li>
                <li>Deodorize vehicle</li>
                <li>Leather deep clean/condition</li>
                <li>Tough stain & spot removal</li>
                <li>Foam handwash & wax exterior</li>
                <li>Vehicle decontamination wash</li>
                <li>Clay bar treatment</li>
                <li>Clean tires & rims</li>
                <li>Apply tire dressing</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h5" sx={{ my: 3, fontWeight: 600, color: "#FFCC00" }}>
                Royalty Detail
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
                Starting at $400
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "white" }}>
                Our premium Royalty Detail package includes all the features of
                our Luxury Detail package and more:
              </Typography>
              <ul>
                <li>Condition all surfaces with protection application</li>
                <li>Air clean vents</li>
                <li>Steam clean & disinfect all surfaces</li>
                <li>Vehicle contact wash</li>
                <li>Engine wash</li>
                <li>Headlight restoration</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
