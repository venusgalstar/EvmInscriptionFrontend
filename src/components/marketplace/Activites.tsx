import React, { useState } from 'react';
import { listedd } from "@/data/marketplace";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { styled } from "@mui/system";

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

const StyledTable = styled('table')({
    width: "100%",
    borderCollapse: "collapse",
});

const StyledTh = styled('th')({
    padding: "2px",
    textAlign: "center",
    fontWeight: "medium",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    fontFamily: '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: "#fff",
});

const StyledTd = styled('td')({
    padding: "2px",
    textAlign: "center",
    fontWeight: "medium",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    fontFamily: '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    
});

function Activites() {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listedd.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Tick</StyledTh>
                        <StyledTh>Total Value</StyledTh>
                        <StyledTh>Price</StyledTh>
                        <StyledTh>Amount</StyledTh>
                        <StyledTh>Seller</StyledTh>
                        <StyledTh>Buyer</StyledTh>
                        <StyledTh>Hash</StyledTh>
                        <StyledTh>Time</StyledTh>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : ''}>
                        
                        <StyledTd style={{ color: 'rgb(246, 174, 45)',    padding: "2px",
                        textAlign: "center",
                        fontWeight: "medium",
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        fontFamily: '-apple-system, monospace, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', }}>{item.Tick}</StyledTd>
                            <StyledTd>{item.Total_Value}</StyledTd>
                            <StyledTd>{item.Price}<br /><span className="mt-5 font-normal text-sm text-gray-400 text-center">{item.span}</span></StyledTd>
                            <StyledTd>{item.Amounts}</StyledTd>
                            <StyledTd>{item.Seller}</StyledTd>
                            <StyledTd>{item.Buyer}</StyledTd>
                            <StyledTd>{item.Hash}</StyledTd>
                            <StyledTd>{item.Time}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            <div className="py-[40px] flex justify-center">
                <Stack spacing={2}>
                    <MarketPlacePagination
                        count={Math.ceil(listedd.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </div>
        </div>
    );
}

export default Activites;
