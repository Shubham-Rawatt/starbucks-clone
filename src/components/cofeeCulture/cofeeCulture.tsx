import Image from "next/image";
import Link from 'next/link';



const CoffeeCulture = () => {
  return (
    <section className="px-5 py-4">
      <div className='flex justify-between items-center px-20 mb-8'>
        <h2 className='text-[#1e3932] font-bold text-2xl'>Learn more about the world of coffee!</h2>
        <Link href="" className='text-[#00754a] font-semibold text-sm'>Discover More</Link>
      </div>
      <div className="relative h-92 mx-auto max-w-6xl shadow-lg/20 overflow-hidden rounded-xl pt-10">

        {/* Background Image */}
        <Image src="/images/banner4.jpg" alt="Coffee brewing" fill className="object-cover transition-all duration-300 hover:bg-black/80" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">

          {/* Badge */}
          <div>
            <span className="rounded-sm bg-white px-2 py-1 text-[10px] font-semibold text-[#00754a]">Coffee Culture</span>
          </div>

          {/* Bottom text */}
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl font-bold"> Art & Science Of Coffee Brewing </h2>
            <p className="mt-3 text-md text-white"> Master the perfect brew with Starbucks! Learn the art and science of coffee brewing. </p>
            <button className="mt-6 w-50 rounded-full bg-white py-2.5 text-sm font-semibold text-black hover:bg-gray-200"> Learn More </button>
          </div>

        </div>
      </div>
        <div className="flex justify-center mt-20">
          <p className="text-[#000000de] text-sm opacity-80">
                     An average active adult requires 2,000 kcal energy per day,<br/>
                       however, calorie needs may vary.<br/>
                   Image for representation purpose only.<br/>
                       FSSAI Lic. No. 10015022003801</p>
        </div>
    </section>
  );
};

export default CoffeeCulture;