"use client";

import React, { useContext, useState } from "react";
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
import { AuthContext, useWeb3Context} from '../../components/Web3';

type ActionState = "mint" | "deploy" | "transfer";

let adminWallet = "0x7361A0E33F717BaF49cd946f5B748E6AA81cC6Fb";

let prefix = "data:ops20,";
let op20Mint = {
  p: "OPS-20",
  op: "mint",
  tick: "",
  amt: 0,
};

let op20Deploy = {
  p: "OPS-20",
  op: "deploy",
  tick: "",
  max: 0,
  lim: 0,
};

let op20Transfer = {
  p: "OPS-20",
  op: "transfer",
  tick: "",
  to: "",
  val: "",
  amt: 0,
};


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
  const { account, connect, sendTransaction } = useWeb3Context();

  const [tick, setTick] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [limit, setLimit] = useState(0);
  const [receiver, setReceiver] = useState("");
  const [ethvalue, setEthvalue] = useState("");

  const handleActionChange = (event: { target: { value: string } }) => {
    const value = event.target.value as ActionState;
    setAction(value);
  };

  const handleNumericChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  };

  const submitAction = () => {

    if (account == null) {
      connect();
      return;
    }

    if (action == "mint") {
      op20Mint.tick = tick;
      op20Mint.amt = amount;

      let payload = prefix + JSON.stringify(op20Mint);
      sendTransaction("0x0000000000000000000000000000000000000000", payload, 0);    
      return;
    }

    if (action == "deploy"){
      op20Deploy.tick = tick;
      op20Deploy.max = totalSupply;
      op20Deploy.lim = limit;

      let payload = prefix + JSON.stringify(op20Deploy);
      sendTransaction("0x0000000000000000000000000000000000000000", payload, 0);    
      return;
    }

    if (action == "transfer"){
      op20Transfer.tick = tick;
      op20Transfer.to = receiver;
      op20Transfer.amt = amount;
      op20Transfer.val = ethvalue;

      let payload = prefix + JSON.stringify(op20Transfer);
      sendTransaction("0x0000000000000000000000000000000000000000", payload, 0);    
      return;
    }

  }

  const handleTick = (tick) => {
    setTick(tick);
  }

  const handleAmount = (amount) =>{
    setAmount(amount);
  }

  const handleTotalSupply = (totalSupply) =>{
    setTotalSupply(totalSupply);
  }

  const handleLimit = (limit) => {
    setLimit(limit);
  }

  const handleReceiver = (address)=>{
    setReceiver(address);
  }

  const handleEth = (ethVal)=>{
    setEthvalue(ethVal);
  }

  return (
    <div className="flex flex-col items-center justify-center py-[40px]">
      <div className="text-[24px] mb-4 text-[#f6ae2d] font-bold line-[12px] tracking-widest">
        Optimization Inscribe OPC-20
      </div>
      <div className="text-[14px] mb-8 text-[#ffffff73] tracking-widest">
        <a
          href="https://docs.optimism.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 underline-offset-4"
        >
          Read more details about opc-20
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
            <InscribeBox handleTick={handleTick}>
              {action === "mint" && (
                <>
                  <Grid item xs={12}>
                    <CustomInput onChangeInput={handleAmount} label="Amount" placeholder="21000000" />
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
                    <CustomInput onChangeInput={handleTotalSupply} label="Total Supply" placeholder="21000000" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput onChangeInput={handleLimit} label="Limit Per Mint" placeholder="100" />
                  </Grid>
                </>
              )}
              {action === "transfer" && (
                <>
                  <Grid item xs={12}>
                    <CustomInput onChangeInput={handleReceiver} label="To" placeholder="receiver address" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput onChangeInput={handleAmount} label="Amount" placeholder="21000000" />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomInput onChangeInput={handleEth} label="Eth Amount" placeholder="0" />
                  </Grid>
                </>
              )}
            </InscribeBox>
            <StyledButton fullWidth variant="contained" onClick={submitAction}>
              {account ? action : "Connect Wallet"}
            </StyledButton>
            <Link href="/getton" passHref legacyBehavior>
              <a className="text-[#ffffff73] text-sm mt-4 block text-center tracking-widest underline decoration-2 underline-offset-4">
                How to get OP for sending transaction?
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
