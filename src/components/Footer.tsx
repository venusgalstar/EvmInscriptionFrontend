import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-[32px] flex justify-center items-center">
      <a
        href="https://docs.optimism.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdMenuBook className="text-white"  size={30} />
      </a>
      <a href="https://twitter.com/OptimismFND" target="_blank" rel="noopener noreferrer" className="ml-[40px]">
        <FaTwitter className="text-white" size={30} />
      </a>
      <a href="https://discord.gg/optimism" target="_blank" rel="noopener noreferrer" className="ml-[40px]">
        <FaDiscord className="text-white" size={30} />
      </a>
    </footer>
  );
}
