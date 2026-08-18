import ProductCard from "@/components/productCard/productcard";
import CategorySlider from "@/components/categorySlider/categoryslider";
import { products } from "@/data/products";


export default function DrinksPage() {
  return (
    <section>
      <div className="mx-auto mt-8 flex max-w-6xl items-start gap-8">

        {/* Category Slider */}
        <CategorySlider />

        {/* Products */}
        <div className="flex-1">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-lg font-bold text-[#1e3932]">
             Espresso
            </h1>
            <p className="mt-1 text-sm text-gray-600">
             Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-6">
            {products.drinks.map((product) => (
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
}