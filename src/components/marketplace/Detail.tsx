"use client";
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { LinearProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: 'transparent',
  height: 8,
  borderRadius: 2,
  marginTop: 8,
  marginBottom: 8,
  '.MuiLinearProgress-bar': {
    backgroundColor: '#f6ae2d',
    borderRadius: 2,
    height: 5,
  },
}));

const StyledLineBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: 'transparent',
  '.MuiLinearProgress-bar': {
    backgroundColor: '#f6ae2d',
    borderRadius: 2,
    textAlign: 'center',
  },
}));

const containerStyles = {
  fontFamily:
    '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  overflow: 'hidden',
  padding: '16px',
  marginTop: '24px',
  borderRadius: '12px',
  fontSize: '16px',
};

const tables = {
  fontFamily:
    '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  overflow: 'hidden',
  padding: '16px',
  marginTop: '24px',
  borderRadius: '12px',
  fontSize: '16px',
};

const MarketPlacePagination = styled(Pagination)({
  backgroundColor: '#121212',
  color: '#fff',

  button: {
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '1.43',
    borderRadius: '4px',
    textAlign: 'center',
    boxSizing: 'border-box',
    minWidth: '32px',
    height: '32px',
    padding: '0px 6px',
    margin: '0px 3px',
    color: 'rgb(255, 255, 255)',
    border: '1px solid rgba(255, 255, 255, 0.23)',
  },

  '.Mui-selected': {
    backgroundColor: '#4B4B4B',
  },
});

const ITEMS_PER_PAGE = 10;

function Detail() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const [holders, setHolders] = useState([
    { rank: 1, address: "UQA6Z...DLHg1", percentage: 50, value: 24559402 },
    { rank: 2, address: "XW3F8...HJFg2", percentage: 35, value: 19876543 },
    { rank: 3, address: "PQ9R2...LKJg3", percentage: 20, value: 15345678 },
    { rank: 4, address: "LM6O7...XYZg4", percentage: 15, value: 12098765 },
    { rank: 5, address: "AB1CD...UVWg5", percentage: 10, value: 9876543 },
    { rank: 6, address: "OP2QR...EFGg6", percentage: 5, value: 8765432 },
    { rank: 7, address: "HI3JK...MNOg7", percentage: 2, value: 7654321 },
    // Repeat the above data 13 more times
    // (You can add or adjust more entries as needed)
    // Duplicate the above data or modify values as needed for a total of 20 entries
    { rank: 8, address: "ZX9AB...WVUg8", percentage: 18, value: 6543210 },
    { rank: 9, address: "RSTU1...456g9", percentage: 22, value: 5432109 },
    { rank: 10, address: "7890C...DEFg10", percentage: 30, value: 4321098 },
    { rank: 11, address: "XYZAB...678g11", percentage: 42, value: 3210987 },
    { rank: 12, address: "LMN12...345g12", percentage: 55, value: 2109876 },
    { rank: 13, address: "GHI23...012g13", percentage: 68, value: 1098765 },
    { rank: 14, address: "PQR34...567g14", percentage: 73, value: 987654 },
    { rank: 15, address: "JKL45...890g15", percentage: 80, value: 876543 },
    { rank: 16, address: "MNO56...123g16", percentage: 88, value: 765432 },
    { rank: 17, address: "45678...901g17", percentage: 95, value: 654321 },
    { rank: 18, address: "UVW89...234g18", percentage: 98, value: 543210 },
    { rank: 19, address: "DEF90...567g19", percentage: 99, value: 432109 },
    { rank: 20, address: "12345...678g20", percentage: 100, value: 321098 },
  ]);
  

  const filterHolders = (condition: (holder: any, index: number) => boolean) => {
    return holders.filter(condition);
  };

  const filteredHolders = filterHolders((_, index) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return index >= startIndex && index < endIndex;
  });

  const mapHoldersToRows = () => {
    return filteredHolders.map((holder) => (
      <tr key={holder.rank}>
        <td className="text-left p-4">{holder.rank}</td>
        <td className="text-left p-4">{holder.address}</td>
        <td className="text-left p-4">
          <StyledLineBar variant="determinate" value={holder.percentage} />
        </td>
        <td className="text-left">{holder.value}</td>
      </tr>
    ));
  };

  return (
    <div>
      <span className="m-0 font-sans text-5xl leading-tight text-yellow-400 font-bold">nano</span>
      <div>
        <StyledProgressBar variant="determinate" value={100} />
      </div>
      <span className="text-yellow-400 text-lg">Indexer progress: 2023/12/29 15:36:25</span>
      <div style={containerStyles}>
      <span className="text-gray-400">Inscription:</span>
                <br />
                <a className="m-10 text-blue-500 underline" href="2029DAB6E0FE0F610159C6F89969301A74BE3240340A400C20672DF5D1F32631">2029DAB6E0FE0F610159C6F89969301A74BE3240340A400C20672DF5D1F32631</a>
                <br />
                <span className="text-gray-400 mt-10">Total Supply:</span>
                <br />
                <span className="m-10">2,100,000,000</span>
                <br />
                <span className="text-gray-400 mt-10">Minted:</span>
                <br />
                <span className="m-10">2,100,000,000</span>
                <br />
                <span className="text-gray-400 mt-10">Limit per mint:</span>
                <br />
                <span className="m-10">100</span>
                <br />
                <span className="text-gray-400 mt-10">Deploy By:</span>
                <br />
                <a className="m-10 text-blue-500 underline" href="2029DAB6E0FE0F610159C6F89969301A74BE3240340A400C20672DF5D1F32631">2029DAB6E0FE0F610159C6F89969301A74BE3240340A400C20672DF5D1F32631</a>
                <br />
                <span className="text-gray-400 mt-10" >Deploy Time:</span>
                <br />
                <span className="m-10" >2023/11/30 21:29:26</span>
                <br />
                <span className="text-gray-400 mt-10" >Holders:</span>
                <br />
                <span className="m-10" >28,059</span>
                <br />
                <span className="text-gray-400 mt-10" >Minters:</span>
                <br />
                <span className="m-10">36,632</span>
      </div>
      <div style={tables}>
      <button className="bg-gray-700 p-3 rounded-md border border-solid border-gray-500"> Holder</button>
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
              count={Math.ceil(holders.length / ITEMS_PER_PAGE)}
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
