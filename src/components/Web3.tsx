"use client";

import Web3 from 'web3'
import React, { createContext, useState, useEffect, useContext } from "react"
let web3;

export const AuthContext = createContext({
    account: null,
    connect: () => null,
    disconnect: () => null,
    chainId: null,
    sendTransaction: (toAddress:any, payload:any, value:any) => null,
});

function stringToHex(str: string): string {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const hex = str.charCodeAt(i).toString(16);
        result += hex;
    }
    return result;
}

export const AuthProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [chainId, setChainId] = useState(null);

    const connect = async () => {
        
        if ( account != null )
            return;

        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            // We are in the browser and metamask is running.
            web3 = new Web3(window.ethereum);
            console.log("web3", web3);
        } else {
            // We are on the server *OR* the user is not running metamask
            // const provider = new Web3.providers.HttpProvider(
            //     'https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY'
            // );
            // web3 = new Web3(provider);
        }

        const accounts = await web3.eth.requestAccounts();
        const chain = await web3.eth.getChainId();

        console.log("accounts", accounts);
        console.log("chain", chain);

        setAccount(accounts[0]);
        // setIsConnect(true);
        setChainId(chain);
    }

    const disconnect = () => {
        setAccount(null);
        setChainId(null);
    };

    const sendTransaction = (toAddress, payload, value) => {
        web3.eth.sendTransaction({
            from: account,
            gas: "210000",
            to: toAddress,
            value: value,
            data: stringToHex(payload),
        });
    }

    useEffect(() => {
        if (account == null) {
            connect();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <AuthContext.Provider
            value={{ account, connect, disconnect, chainId, sendTransaction }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useWeb3Context = () => {
    return useContext(AuthContext);
}
