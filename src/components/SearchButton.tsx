"use client";

import SearchIcon from "@mui/icons-material/Search";
import { Paper, InputBase, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  height: "54px",
  width: "600px",
  border: "2px solid #FFD700", // Yellow color for the border
  borderRadius: "999px", // Large value to create a pill shape
  backgroundColor: "transparent",
});

const StyledInputBase = styled(InputBase)({
  paddingLeft: "16px",
  paddingRight: "12px",
  paddingTop: "8px",
  paddingBottom: "8px",
  width: "100%",
  fontSize: "16px",
  color: "white",
  backgroundColor: "black",
  borderRadius: "999px 0 0 999px", // Rounded left side
  "&:focus": {
    backgroundColor: "white",
    color: "#707070", // A gray color for focused text
  },
});

const StyledIconButton = styled(IconButton)({
  padding: "8px",
  borderRadius: "50%", // Round shape for the icon button
});

export default function SearchButton() {
  return (
    <StyledPaper>
      <StyledInputBase
        placeholder="search inscription/wallet"
        inputProps={{ "aria-label": "search inscription/wallet" }}
      />
      <StyledIconButton type="submit" aria-label="search">
        <SearchIcon sx={{ color: "#FFD700" }} />{" "}
      </StyledIconButton>
    </StyledPaper>
  );
}
