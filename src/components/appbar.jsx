import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppsIcon from "@material-ui/icons/Apps";
import Menu from "./menu";
export default function Bar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          {this.props.login.isLogin ? <Menu /> : <AppsIcon />}
          <Typography variant="h6" color="inherit" noWrap>
            Rental.io
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
