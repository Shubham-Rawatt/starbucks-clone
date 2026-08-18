import ProductCard from "@/components/productCard/productcard";
import CategorySlider from "@/components/categorySlider/categoryslider";
import { products } from "@/data/products";
import Recommended from "@/components/recommend/recommend";
import StoreAddress from "@/components/storeaddress/storeaddress";


const Bestseller = () => {
  return (
    <section className="min-h-screen bg-[#f2f0eb] px-8 py-8">

      <StoreAddress />
      <Recommended />

      <div className="mx-auto mt-8 flex max-w-6xl items-start gap-8">

        {/* Category Slider */}
        <CategorySlider />

        {/* Products */}
        <div className="flex-1">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-lg font-bold text-[#1e3932]">
              Bestseller
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Everyones favorite Starbucks put together in a specially
              curated collection.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-6">
            {products.bestseller.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bestseller;