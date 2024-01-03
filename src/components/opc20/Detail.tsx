"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { LinearProgress } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import numeral from "numeral";
const axios = require("axios");
const { API_URL } = require("../../utils/constants");

const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: "transparent",
  height: 8,
  borderRadius: 2,
  marginTop: 8,
  marginBottom: 8,
  ".MuiLinearProgress-bar": {
    backgroundColor: "#f6ae2d",
    borderRadius: 2,
    height: 5,
  },
}));

const StyledLineBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: "transparent",
  ".MuiLinearProgress-bar": {
    backgroundColor: "#f6ae2d",
    borderRadius: 2,
    textAlign: "center",
  },
}));

const containerStyles = {
  fontFamily:
    '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  border: "1px solid rgba(255, 255, 255, 0.12)",
  overflow: "hidden",
  padding: "16px",
  marginTop: "24px",
  borderRadius: "12px",
  fontSize: "16px",
};

const tables = {
  fontFamily:
    '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  border: "1px solid rgba(255, 255, 255, 0.12)",
  overflow: "hidden",
  padding: "16px",
  marginTop: "24px",
  borderRadius: "12px",
  fontSize: "16px",
};

const MarketPlacePagination = styled(Pagination)({
  backgroundColor: "#121212",
  color: "#fff",

  button: {
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.43",
    borderRadius: "4px",
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "32px",
    height: "32px",
    padding: "0px 6px",
    margin: "0px 3px",
    color: "rgb(255, 255, 255)",
    border: "1px solid rgba(255, 255, 255, 0.23)",
  },

  ".Mui-selected": {
    backgroundColor: "#4B4B4B",
  },
});

const ITEMS_PER_PAGE = 10;

function Detail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState({
    creator: "",
    holders: [],
    meta: {
      p: "",
      op: "",
      tick: "",
      max: "0",
      lim: "0",
    },
    meta_type: 0,
    mint: 0,
    timestamp: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
    token_decimal: 0,
    token_limit: 0,
    token_name: "",
    token_owner: "",
    total_supply: 0,
    type: 1,
    inscription: "",
    minters: 0,
  });

  const fetchDetailData = async () => {
    try {
      const response = await axios.get(API_URL + `detail?id=${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (id) fetchDetailData();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const filterHolders = (
    condition: (holder: any, index: number) => boolean
  ) => {
    return data.holders.filter(condition);
  };

  const filteredHolders = filterHolders((_, index) => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return index >= startIndex && index < endIndex;
  });

  const mapHoldersToRows = () => {
    return filteredHolders.map((holder, index) => (
      <tr key={holder.index}>
        <td className="text-left p-2">{index + 1}</td>
        <td className="text-left p-2">{holder.address}</td>
        <td className="text-left p-2 flex flex-col">
          <span className="mb-1">
            {numeral((holder.balance / data.mint) * 100)
              .divide(100)
              .format("0.00%")}
          </span>
          <StyledLineBar
            variant="determinate"
            value={(holder.balance / data.mint) * 100}
          />
        </td>
        <td className="text-left p-2">{holder.balance}</td>
      </tr>
    ));
  };

  return (
    <div>
      <span className="m-0 font-sans text-5xl leading-tight text-yellow-400 font-bold">
        {data?.token_name}
      </span>
      <div>
        <StyledProgressBar
          variant="determinate"
          value={(data.mint * 100) / data.total_supply || 0}
        />
      </div>
      <span className="text-yellow-400 text-lg">
        Indexer progress: {data.timestamp}
      </span>
      <div style={containerStyles}>
        <span className="text-gray-400">Inscription:</span>
        <br />
        <a
          className="m-10 text-blue-500 underline"
          href={`https://optimistic.etherscan.io/tx/${data.inscription}`}
        >
          {data.inscription}
        </a>
        <br />
        <span className="text-gray-400 mt-10">Total Supply:</span>
        <br />
        <span className="m-10">{data.total_supply}</span>
        <br />
        <span className="text-gray-400 mt-10">Minted:</span>
        <br />
        <span className="m-10">{data.mint}</span>
        <br />
        <span className="text-gray-400 mt-10">Limit per mint:</span>
        <br />
        <span className="m-10">{data.meta?.lim}</span>
        <br />
        <span className="text-gray-400 mt-10">Deploy By:</span>
        <br />
        <a
          className="m-10 text-blue-500 underline"
          href={`https://optimistic.etherscan.io/address/${data.creator}`}
        >
          {data.creator}
        </a>
        <br />
        <span className="text-gray-400 mt-10">Deploy Time:</span>
        <br />
        <span className="m-10">{data.timestamp}</span>
        <br />
        <span className="text-gray-400 mt-10">Holders:</span>
        <br />
        <span className="m-10">
          {numeral(data.holders.length).format("0,0")}
        </span>
        <br />
        <span className="text-gray-400 mt-10">Minters:</span>
        <br />
        <span className="m-10">{numeral(data.minters).format("0,0")}</span>
      </div>
      <div style={tables}>
        <button className="bg-gray-700 p-3 rounded-md border border-solid border-gray-500">
          {" "}
          Holder
        </button>
        <table className="w-full mt-6 pl-2">
          <thead>
            <tr className="">
              <th className="text-left p-2">Rank</th>
              <th className="text-left p-2">Address</th>
              <th className="text-left p-2">Percentage</th>
              <th className="text-left p-2">Value</th>
            </tr>
          </thead>
          <tbody>{mapHoldersToRows()}</tbody>
        </table>
        <div className="py-[40px] flex justify-center">
          <Stack spacing={2}>
            <MarketPlacePagination
              variant="outlined"
              shape="rounded"
              count={Math.ceil(data.holders.length / ITEMS_PER_PAGE)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Detail;
