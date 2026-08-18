import Image from "next/image";
import Link from "next/link";
import { FiSearch, } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-lg sticky top-0 z-20" >
            <div className="mx-auto flex p-4 max-w-360 items-center justify-center gap-20 px-20">
                <nav className="flex gap-15">
                <div className="flex items-center">
                    <Image src="/images/logo.png" alt="Starbucks logo" width={40} height={40} />
                    </div>
                    <ul className="flex items-center gap-10 text-md font-medium text-[#00754a]">
                        <li> <Link href="/">Home</Link></li>
                        <li> <Link href="/">Gift</Link></li>
                        <li> <Link href="/">Order</Link></li>
                        <li> <Link href="/">Pay</Link></li>
                        <li> <Link href="/">Store</Link></li>
                        <li> <Link href="/">Corporate Gifting</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-10">
                    <div className="flex w-70 items-center gap-3 rounded-full px-4 py-2.5 shadow-lg">
                        <FiSearch className="text-gray-500" size={18} />
                        <input type="search" placeholder="Looking for something specific?" className="w-full bg-white opacity-80 text-xs outline-none" />
                    </div>

                    <button className="flex h-8 w-8 items-center text-[#00754A] justify-center rounded-full border">
                        <LuUserRound size={18} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;