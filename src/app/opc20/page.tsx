"use client";

import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  TablePagination,
  Card,
} from "@mui/material";
import { format } from "date-fns";
import { IoIosArrowForward } from "react-icons/io";

import SearchBox from "@/components/SearchBox";
import { useRouter } from "next/navigation";

const axios = require("axios");
const { API_URL } = require("../../utils/constants");

const StyledPaper = styled(Paper)({
  marginTop: 32,
  marginBottom: 32,
  backgroundColor: "#262323",
  borderRadius: "12px",
  color: "#fff",
  width: "100%",
  maxWidth: 1200,
  padding: 24,
});

const StyledCard = styled(Card)({
  padding: "16px",
  paddingBottom: "24px",
  margin: "16px", // Add some spacing around the card
  maxWidth: "100%", // Ensures the card is responsive
  minHeight: "100px", // Set a minimum height for the card content
  backgroundColor: "transparent",
  boxShadow: "none",
  border: 0,
});

const StyledTableContainer = styled(Table)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: 0,
}));

const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const StyledHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  cursor: "pointer",
}));

const StyledCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: 14,
  padding: 16,
  color: "#fff",
  borderBottom: "none",
}));

const StyledLineBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: "transparent",
  ".MuiLinearProgress-bar": {
    backgroundColor: "#f6ae2d",
    borderRadius: 2,
  },
}));

const TableHeader = () => (
  <StyledHead>
    <StyledRow>
      <StyledCell scope="col" align="left">
        Tick
      </StyledCell>
      <StyledCell scope="col" align="center">
        Deploy Time
      </StyledCell>
      <StyledCell scope="col" align="center">
        Progress
      </StyledCell>
      <StyledCell scope="col" align="right">
        Holders
      </StyledCell>
      <StyledCell scope="col" align="right"></StyledCell>
    </StyledRow>
  </StyledHead>
);

const formatDate = (date) => {
  return format(date, "yyyy/MM/dd HH:mm:ss");
};

const TableRowComponent = ({ row }) => {
  const router = useRouter();

  const handleDetailPage = () => {
    router.push(`/detail?id=${row.id}`);
  };

  return (
    <StyledRow
      hover
      sx={{
        "&.MuiTableRow-root:hover": {
          background: "#555252",
        },
      }}
      onClick={handleDetailPage}
    >
      <StyledCell
        component="th"
        scope="col"
        style={{
          color: "#f6ae2d",
        }}
      >
        {row.token_name}
      </StyledCell>
      <StyledCell align="center" scope="col">
        {row.timestamp}
      </StyledCell>
      <StyledCell align="center" scope="col">
        <span className="mb-6">
          {numeral(row.mint / parseInt(row.meta?.max) || 0)
            .divide(100)
            .format("0.000%")}
        </span>
        <div className="flex items-center">
          <StyledLineBar
            variant="determinate"
            value={row.mint / parseInt(row.meta?.max) || 0}
          />
        </div>
      </StyledCell>
      <StyledCell align="right" scope="col">
        {numeral(row.holders).format("0,0")}
      </StyledCell>
      <StyledCell
        align="right"
        scope="col"
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <IoIosArrowForward align="right" size={20} />
      </StyledCell>
    </StyledRow>
  );
};

const CustomTable = ({ rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>OPC-20</title>
        {/* Other head elements */}
      </Helmet>

      <div className="capitalize text-[18px] mb-4 text-[#f6ae2d] text-center font-medium line-[12px] tracking-wider">
        The full list of opc-20
      </div>

      <div className="text-[12px] mb-8 text-[#ffffff73] tracking-widest font-normal text-center">
        Indexer progress: {formatDate(new Date())}
      </div>

      <StyledTableContainer>
        <StyledTable stickyHeader aria-label="customized table">
          <TableHeader />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRowComponent key={index + "_row"} row={row} />
              ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: "white" }}
      />
    </>
  );
};

export default function OPC20() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOpc20List = async () => {
      try {
        const response = await axios.get(API_URL + `search`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!data || data.length == 0) fetchOpc20List();
  }, []);

  return (
    <SearchBox setData={setData}>
      <StyledPaper>
        <StyledCard>
          <CustomTable rows={data} />
        </StyledCard>
      </StyledPaper>
    </SearchBox>
  );
}
