import React from "react";
import { Grid } from "@mui/material";
import { Header } from "../components";

const Editor = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Editor" title="Overview" />
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}></Grid>
    </Grid>
  </div>
);

export default Editor;
