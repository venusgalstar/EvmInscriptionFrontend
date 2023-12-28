"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ListedTabs from "@/components/marketplace/ListedTab";
import { listed } from "@/data/marketplace";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const MyTab = styled(Tab)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "none",
  fontSize: "0.8125rem",
  padding: "7px 16px",
  minHeight: "40px",
  "&:hover": {
    backgroundColor: "#252525",
  },
  "&.Mui-selected": {
    backgroundColor: "#4B4B4B",
    color: "#fff",
  },
  "&.MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});
const MyTabs = styled(Tabs)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "1px solid #4B4B4B",
  height: "40px",
  minHeight: "40px",
  borderRadius: "5px",
  marginLeft: "10px",
  ".MuiTabs-indicator": {
    backgroundColor: "transparent",
    height: "0",
  },
});

const MarketPlaceSelect = styled(Select)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "1px solid #4B4B4B",
  fontSize: "1rem",
  padding: "2px 16px",
  width: "fit-content",
  height: "40px",
  "&:hover": {
    borderColor: "#fff",
  },

  ".MuiInputBase-input": {
    padding: "7px 16px !important",
  },
  ".MuiSvgIcon-root": {
    fill: "#fff",
  },
  ".MuiMenu-paper": {
    backgroundColor: "#4B4B4B",
  },
});
const MarketPlaceSortSelect = styled(FormControl)({
  backgroundColor: "#121212",
  color: "#fff",

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#4B4B4B",
  },
  ".MuiInputBase-input": {
    color: "#fff",
  },
  ".MuiInputLabel-formControl": {
    color: "#fff",
  },
  ".MuiSvgIcon-root": {
    fill: "#fff",
  },
  ".MuiFormControl-root": {
    minWidth: "90px",
  },
});

const Marketplace = () => {
  const [value, setValue] = React.useState(0);
  const [sort, setSort] = React.useState("price");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [coin, setCoin] = React.useState("nano");

  const handleInputChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center py-[40px] container mx-auto">
      <Box sx={{ width: "100%" }}>
        <div className="grid grid-cols-2 md:grid-cols-12 sm:grid-cols-1 items-center gap-4">
          <div className="grid col-span-1">
            <MarketPlaceSelect
              value={coin}
              onChange={handleInputChange}
              displayEmpty
              className=""
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="nano">nano</MenuItem>
              <MenuItem value="bolt20">bolt20</MenuItem>
              <MenuItem value="ton">ton</MenuItem>
              <MenuItem value="dedust.io">dedust.io</MenuItem>
              <MenuItem value="gram">gram</MenuItem>
              <MenuItem value="fish">fish</MenuItem>
              <MenuItem value="notcoin">notcoin</MenuItem>
            </MarketPlaceSelect>
          </div>
          <div className="grid col-span-4">
            <MyTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <MyTab label="Listed" {...a11yProps(0)} />
              <MyTab label="My Orders" {...a11yProps(1)} />
              <MyTab label="Activites" {...a11yProps(2)} />
            </MyTabs>
          </div>
          <div className="col-span-4 hidden md:flex"></div>
          <div className=" col-span-1">
            <MarketPlaceSortSelect sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-label"
                id="sort-small"
                value={sort}
                label="Sort"
                onChange={(e: any) => setSort(e.target.value)}
              >
                <MenuItem value={"total-value"}>Total Value</MenuItem>
                <MenuItem value={"price"}>Price</MenuItem>
              </Select>
            </MarketPlaceSortSelect>
          </div>
          <div className=" col-span-2 justify-center  hidden md:flex">
            <button className="bg-[#0098ea]  hover:scale-10 text-[#fff] text-lg font-bold py-2 px-[24px] rounded-full inline-flex items-center">
              Quick List
            </button>
          </div>
        </div>
        <CustomTabPanel value={value} index={0}>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {listed.map((item: any, index: number) => (
              <ListedTabs items={item} coin={coin} />
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
};
export default Marketplace;
