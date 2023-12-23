import { Grid } from "@mui/material";
import React from "react";
import CustomInput from "./CustomInput";

const InscribeBox = ({ children }) => {
  return (
    <Grid container display={"flex"} flexDirection={"column"} spacing={2}>
      <Grid item xs={12}>
        <CustomInput label="Tick" placeholder="inscription name" />
      </Grid>
      {children}
    </Grid>
  );
};

export default InscribeBox;
