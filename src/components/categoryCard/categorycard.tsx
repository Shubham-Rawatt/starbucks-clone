import Link from "next/link";
import Image from "next/image";
interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}
// yeha category card ka data create kara h 

const CategoryCard = ({ category } : {category : Category}) => {  
  return (                                    
    <Link href={category.link}>
      <div className="mx-auto p-8">
        <Image
          src={category.image}
          alt={category.name}
          width={105}
          height={105}
         className="rounded-full transition-transform hover:scale-102 duration-350 outline-1 hover:outline-gray-800"/>

        <p className="mt-2 text-center font-extrabold text-[#212529] text-sm">{category.name}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;


