import Image from "next/image";
import { FiPlus } from "react-icons/fi";


const ProductCard = ({ product }) => {
  return (
    <div className="w-md flex items-center justify-between bg-white p-5 rounded-xl shadow-lg">
      <div className="flex items-center gap-4">
        <Image
          src={product.image}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-full"
        />

        <div>
          <h3 className="font-semibold text-[#1e3932] text-sm ">{product.name}</h3>
          <p className="text-xs font-medium mt-1 text-[#a7a7a7]">{product.size} · {product.calories}</p>
          <p className="font-semibold mt-3 text-[#1e3932]">{product.price}</p>
        </div>
      </div>
     <button className="w-8 h-8 rounded-full bg-[#00754a] text-white flex items-center justify-center hover:bg-[#006241] transition opacity-50">
          <FiPlus size={16} />
        </button>

    </div>
  );
};

export default ProductCard;