"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Detail from "@/components/opc20/Detail";

const DetailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[40px] container mx-auto">
      <Box sx={{ width: "100%" }}>
        <Detail />
      </Box>
    </div>
  );
};
export default DetailPage;
