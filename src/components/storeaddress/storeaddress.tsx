import { FiMapPin, FiClock } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiShoppingBagOpen } from "react-icons/pi";

const StoreAddress = () => {
  return (
    <section className="w-full bg-[#1e3932] px-20 py-8 text-white">
      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Location */}
          <div className="flex items-center gap-4">
            <FiMapPin className="text-xl" />

            <div>
              <p className="text-xs mb-1"> Store Address </p>

              <p className="text-sm text-white/40 border-b border-white/40 pb-1 w-60"> No Store Selected </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-1 ml-2">
            <FiClock className="text-lg" />
            <span className="text-sm font-medium">  00 mins </span>
          </div>

        </div>


        {/* Right Side */}
        <div className="flex border border-white/40 rounded-md overflow-hidden">

          {/* Dine-In */}
          <button className="flex items-center gap-3 bg-white text-[#1e3932] px-15 py-2.5 text-sm font-medium">
            <TbToolsKitchen2 className="text-md" />  Dine-In </button>

          {/* Takeaway */}
          <button className="flex items-center gap-3 bg-transparent text-white px-15 py-2.5 text-sm font-medium"> 
            <PiShoppingBagOpen className="text-md" /> Takeaway </button>

        </div>

      </div>
    </section>
  );
};

export default StoreAddress;