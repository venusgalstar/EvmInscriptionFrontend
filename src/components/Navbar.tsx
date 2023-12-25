"use client";
import { FaWallet, FaCircle } from 'react-icons/fa';
import Link from 'next/link';
import { AuthContext, useWeb3Context } from './Web3';

export default function Navbar() {
  console.log("useWeb3Context", useWeb3Context);
  console.log("AuthContext", AuthContext);
  console.log("Link", Link);
  const { account, connect, disconnect, chainId } = useWeb3Context();

  console.log("account", account);

  const substring = (address) =>{
    return address.substring(0, 5) + "..." + address.substring(address.length - 5);
  }

  return (
    <nav className="text-white px-4 py-4 flex justify-between items-center">
      <div className="flex space-x-4 text-[14px] items-center">
        <div className='flex items-center justify-center'>
          <FaCircle className='text-blue-500 mr-2' size={40} />
          <h1 className='text-[20px]'>Tonano</h1>
        </div>
        <Link href="/" passHref legacyBehavior>
          <a className="hover:bg-gray-100 hover:bg-opacity-25 transition-colors p-2 rounded">Home</a>
        </Link>
        <Link href="/inscribe" passHref legacyBehavior>
          <a className="hover:bg-gray-100 hover:bg-opacity-25 transition-colors p-2 rounded">Inscribe</a>
        </Link>
        <Link href="/ton20" passHref legacyBehavior>
          <a className="hover:bg-gray-100 hover:bg-opacity-25 transition-colors p-2 rounded">ton-20</a>
        </Link>
        <Link href="/marketplace" passHref legacyBehavior>
          <a className="hover:bg-gray-100 hover:bg-opacity-25 transition-colors p-2 rounded">Marketplace</a>
        </Link>
      </div>
      <button className="bg-[#0098ea] hover:scale-110 text-[#fff] text-lg font-bold py-2 px-4 rounded-full inline-flex items-center"
        onClick={() => (account ? disconnect() : connect())}>
        <FaWallet className="mr-2" />
        {
          account ? substring(account): "Connect Wallet" 
        }
      </button>
    </nav>
  );
}
