import { FormControl, Grid, ButtonGroup, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: "#494949",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ffffff3d",
    borderColor: "#ffffff3d",
  },
  "&:focus": {
    backgroundColor: "#ffffff29",
  },
}));

const RepeatMintButtons = ({ label, selectList }) => {
  return (
    <FormControl variant="standard" style={{ width: "100%" }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={3} textAlign={"right"}>
          <div className="text-[16px] mr-[16px]">{label}</div>
        </Grid>
        <Grid item xs={9}>
          <ButtonGroup fullWidth size="large" aria-label="large button group">
            {selectList?.map((number) => (
              <StyledButton key={number} variant="outlined">
                {number}
              </StyledButton>
            ))}
          </ButtonGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default RepeatMintButtons;
