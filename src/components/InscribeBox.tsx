import { Grid } from "@mui/material";
import React, {useState} from "react";
import CustomInput from "./CustomInput";

const InscribeBox = ({ children, handleTick }) => {
  
  return (
    <Grid container display={"flex"} flexDirection={"column"} spacing={2}>
      <Grid item xs={12}>
        <CustomInput onChangeInput={handleTick} label="Tick" placeholder="inscription name" />
      </Grid>
      {children}
    </Grid>
  );
};

export default InscribeBox;
