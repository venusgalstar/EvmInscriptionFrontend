import React from "react";
import { FormControl, Grid, InputBase, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid",
    color: "#494949",
    borderColor: "#494949",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      borderColor: "#fff",
    },
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "#6b70f5",
    },
  },
}));

const CustomInput = ({ label, placeholder, onChangeInput }) => {
  return (
    <FormControl variant="standard" style={{ width: "100%" }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={3} textAlign={"right"}>
          <div className="text-[16px] mr-[16px]">{label}</div>
        </Grid>
        <Grid item xs={9}>
          <StyledInput onChange={(e) => {onChangeInput(e.target.value)}} fullWidth placeholder={placeholder} />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default CustomInput;
