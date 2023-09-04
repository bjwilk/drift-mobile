import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            
            sx={{ fontSize: 24 }}
          >
            {"Drift Mobile"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              href="mailto:driftautodetail@gmail.com"
              color="inherit"
              sx={{ marginRight: 2 }}
            >
              <EmailIcon />
            </Link>

            <Link
              href="https://www.instagram.com/your_instagram_username/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <InstagramIcon />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
