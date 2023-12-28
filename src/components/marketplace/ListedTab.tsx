import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { listedInterface } from "@/data/marketplace";
const Card = styled(Box)({
  border: "1px solid rgb(38, 35, 35)",
  color: "#fff",
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
  ".header": {
    background: "rgb(38, 35, 35)",
    padding: "16px",
    h3: {
      margin: "0px",
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "rgb(246, 174, 45)",
      fontWeight: 600,
    },
    h2: {
      margin: "16px 0px 0px",
      fontSize: " 1.5rem",
      lineHeight: "1.334",
      fontWeight: "700",
      textAlign: "center",
    },
    p: {
      margin: " 8px 0px 0px",
      fontSize: " 0.875rem",
      lineHeight: "1.43",
      fontWeight: "700",
      textAlign: "center",
    },
    span: {
      margin: "0px",
      fontSize: "0.875rem",
      lineHeight: "1.43",
      color: "rgb(206, 147, 216)",
      fontWeight: "700",
      textAlign: "center",
      display: "block",
    },
  },
  ".body": {
    padding: "16px",

    button: {
      color: "rgb(255, 255, 255)",
      backgroundColor: " rgb(107, 112, 245)",
      boxShadow: "none",
      textTransform: "none",
      width: " 100%",
      borderRadius: " 4000px",
      padding: "6px 16px",
      margin: "16px 0px 0px",
      outline: "0px",
      border: "0px",
    },

    ".Divider": {
      margin: "16px 0px",
      flexShrink: "0",
      borderWidth: "0px 0px thin",
      borderStyle: "solid",
      borderColor: "rgba(255, 255, 255, 0.12)",
    },
  },
});

interface ListedTabsProps {
  coin: string;
  items: listedInterface; // Renamed "item" to "items" and specified it as an array of ListedInterface
}

const ListedTabs: React.FC<ListedTabsProps> = ({ coin, items }) => {
  return (
    <Card>
      <Box className="header">
        <h3>{coin}</h3>
        <h2>{items.amount}</h2>

        <p>{items.ton_per_nano}</p>
        <span>${items.price_per_ton}</span>
      </Box>
      <Box className="body">
        <div className="grid grid-cols-2">
          <h4 className="column-1 text-left">Seller</h4>
          <h4 className="column-1 text-right">{items.seller}</h4>
        </div>
        <hr className="Divider"></hr>
        <div className="grid grid-cols-2">
          <h4 className="column-1 text-left">{items.ton_quantity}TON</h4>
          <h4 className="column-1 text-right">${items.total_price}</h4>
        </div>
        <Button variant="contained">Buy</Button>
      </Box>
    </Card>
  );
};

export default ListedTabs;
