"use client";

import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Grid,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import InscribeBox from "@/components/InscribeBox";
import CustomInput from "@/components/CustomInput";
import RepeatMintButtons from "@/components/RepeatMintButtons";

type ActionState = "mint" | "deploy" | "transfer";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6b70f5 !important",
  color: "#fff",
  padding: 6,
  borderRadius: 12,
  fontSize: 16,
  "&:hover": {
    backgroundColor: "#6b70f5aa !important",
  },
}));

export default function InscribeForm() {
  const [action, setAction] = useState<ActionState>("mint");

  const handleActionChange = (event: { target: { value: string } }) => {
    const value = event.target.value as ActionState;
    setAction(value);
  };

  const handleNumericChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  };

  return (
    <div className="flex flex-col items-center justify-center py-[40px]">
      <div className="text-[24px] mb-4 text-[#f6ae2d] font-bold line-[12px] tracking-widest">
        Tonano Inscribe TON-20
      </div>
      <div className="text-[14px] mb-8 text-[#ffffff73] tracking-widest">
        <a
          href="https://docs.tonano.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4"
        >
          Read more details about ton-20
        </a>
      </div>

      <div
        className="flex flex-col items-center justify-center px-[16px] py-[24px] rounded-lg w-[600px]"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <FormControl component="fieldset" className="mb-8">
          <RadioGroup row value={action} onChange={handleActionChange}>
            <FormControlLabel
              value="mint"
              control={
                <Radio
                  sx={{ color: "#fff", "&.Mui-checked": { color: "#6b70f5" } }}
                />
              }
              label={<span className="text-white text-[16px]">Mint</span>}
            />
            <FormControlLabel
              value="deploy"
              control={
                <Radio
                  sx={{ color: "#fff", "&.Mui-checked": { color: "#6b70f5" } }}
                />
              }
              label={<span className="text-white text-[16px]">Deploy</span>}
            />
            <FormControlLabel
              value="transfer"
              control={
                <Radio
                  sx={{ color: "#fff", "&.Mui-checked": { color: "#6b70f5" } }}
                />
              }
              label={<span className="text-white text-[16px]">Transfer</span>}
            />
          </RadioGroup>
        </FormControl>

        <div className="w-full text-[24px]">
          <form className="p-6 rounded-lg space-y-6">
            <InscribeBox>
              {action === "mint" && (
                <>
                  <Grid item xs={12}>
                    <CustomInput label="Amount" placeholder="21000000" />
                  </Grid>
                  <Grid item xs={12}>
                    <RepeatMintButtons
                      label={"Repeat Mint"}
                      selectList={[1, 2, 3, 4]}
                    />
                  </Grid>
                </>
              )}
              {action === "deploy" && (
                <>
                  <Grid item xs={12}>
                    <CustomInput label="Total Supply" placeholder="21000000" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput label="Limit Per Mint" placeholder="100" />
                  </Grid>
                </>
              )}
              {action === "transfer" && (
                <>
                  <Grid item xs={12}>
                    <CustomInput label="To" placeholder="receiver address" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput label="Amount" placeholder="21000000" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput label="Memo" placeholder="optional" />
                  </Grid>
                </>
              )}
            </InscribeBox>
            <StyledButton fullWidth variant="contained">
              Connect Wallet
            </StyledButton>
            <Link href="/getton" passHref legacyBehavior>
              <a className="text-[#ffffff73] text-sm mt-4 block text-center tracking-widest underline decoration-2 underline-offset-4">
                How to get TON for sending transaction?
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
