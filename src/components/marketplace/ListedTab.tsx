"use client";
import { Box, Button, Typography, Modal } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { listedInterface } from "@/data/marketplace";
import tomImg from "../../assets/ton-logo.png";
import Image from "next/image";
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
  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(true);
  };
  return (
    <Card>
      <BasicModal items={items} open={open} setOpen={setOpen} coin={coin} />
      <Box className="header">
        <h3>{coin}</h3>
        <h2>{items.amount}</h2>

        <div>{items.ton_per_nano}</div>
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
        <Button variant="contained" onClick={() => handleModal()}>
          Buy
        </Button>
      </Box>
    </Card>
  );
};

const CardModal = styled(Modal)({
  ".card-main": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 64px)",
    border: "none",
    maxHeight: "calc(100% - 64px)",
    maxWidth: "600px",
    background: "rgb(23, 26, 31)",
    overflowY: "auto",
    borderRadius: "16px",
    p: 4,
    ".card-inner": {
      position: "relative",
      display: "flex",
      flexDirection: "column",

      ".header": {
        fontWeight: "500",
        fontSize: "1.25rem",
        lineHeight: "1.6",
        padding: "16px 24px",
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "row",
        webkitBoxAlign: "center",
        alignItems: "center",
        h4: {
          fontWeight: 700,
          color: "#fff",
        },
        ".closeModal": {
          backgroundColor: "transparent",
          outline: "0px",
          border: "0px",
          margin: "0px",
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          appearance: "none",
          textDecoration: "none",
          textTransform: "none",
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: "1.5rem",
          padding: "8px",
          borderRadius: "50%",
          overflow: "visible",
          color: "rgb(255, 255, 255)",
          transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          svg: {
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentcolor",
            flexshrink: "0",
            transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            fontsize: "1.5rem",
          },
        },
      },
      ".modal-content": {
        flex: "1 1 auto",
        overflowY: "auto",
        padding: "20px 24px",
        ".body": {
          display: "flex",
          flexDirection: "column",
          webkitBoxAlign: "center",
          alignItems: "center",
          webkitBoxPack: "center",
          justifyContent: "center",
          marginBottom: "8px",

          h5: {
            fontWeight: "400",
            fontSize: "1.5rem",
            lineHeight: "1.334",
            color: "#fff",
          },
          span: {
            fontWeight: "400",
            fontSize: " 0.75rem",
            lineHeight: " 1.66",
            color: "#939393",
          },
          svg: {
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentcolor",
            flexShrink: "0",
            transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            fontSize: "1.5rem",
            marginTop: "8px",
            marginBottom: "8px",
            color: "#fff",
          },
          h4: {
            margin: "0px",
            fontWeight: "400",
            fontSize: "1.5rem",
            lineHeight: "1.334",
            color: "#fff",
          },
        },
        ".data-list": {
          display: "flex",
          flexDirection: "row",
          paddingTop: "8px",
          paddingBottom: "8px",
          justifyContent: "space-between",
          p: {
            margin: "0px",
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#fff",
            display: "flex",
            img: {
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginRight: "8px",
            },
          },
        },
        button: {
          color: "rgb(255, 255, 255)",
          backgroundColor: " rgb(107, 112, 245)",
          boxShadow: "none",
          textTransform: "none",
          width: " 100%",
          borderRadius: " 4000px",
          padding: "10px 16px",
          margin: "24px 0px 0px",
          outline: "0px",
          border: "0px",
          fontSize: "1rem",
        },
      },
    },
  },
});
function BasicModal({ setOpen, open, items, coin }) {
  return (
    <div>
      <CardModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="card-main">
          <Box className="card-inner">
            <Box className="header">
              <h4>Confirmation</h4>
              <div className="flex-1"></div>
              <button className="closeModal" onClick={() => setOpen(false)}>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CloseIcon"
                >
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </Box>
            <Box className="modal-content">
              <Box className="body">
                <h5>{items.ton_quantity} TON</h5>
                <span>� ${items.total_price}</span>
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-knsg4b"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowDownwardIcon"
                >
                  <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>
                <h4>
                  {items.amount} {coin}
                </h4>
              </Box>
              <Box className="data-list">
                <div>Seller</div>
                <div>{items.seller}</div>
              </Box>
              <Box className="data-list">
                <div>Tick</div>
                <div>{coin}</div>
              </Box>
              <Box className="data-list">
                <div>Price</div>
                <div>
                  <Image alt="ton-image" src={tomImg} /> 0.001118 TON
                </div>
              </Box>
              <Box className="data-list">
                <div>Amount</div>
                <div> {items.amount} {coin}</div>
              </Box>
              <Box className="data-list">
                <div>Total Value</div>
                <div>
                  {" "}
                  <Image alt="ton-image" src={tomImg} /> {items.ton_quantity} TON
                </div>
              </Box>
              <Box className="data-list">
                <div>Gas fee</div>
                <div>
                  {" "}
                  <Image alt="ton-image" src={tomImg} /> 0.1 TON
                </div>
              </Box>
              <Box className="data-list">
                <div>Total</div>
                <div>
                  {" "}
                  <Image alt="ton-image" src={tomImg} /> 111.9 TON
                </div>
              </Box>
              <Button variant="contained">Connect Wallet</Button>
            </Box>
          </Box>
        </Box>
      </CardModal>
    </div>
  );
}
export default ListedTabs;
