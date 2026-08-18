// export default function ReadyToEatPage() {
//   return (
//     <main>
//       <h1>ready to eat </h1>
//       <p>This is the ready to eat page.</p>
//     </main>
//   );
// }



import ProductCard from "@/components/productCard/productcard";
import CategorySlider from "@/components/categorySlider/categoryslider";
import { products } from "@/data/products";


export default function ReadyToEatPage() {
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
            ""
            </h1>
            <p className="mt-1 text-sm text-gray-600">
             ""
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-2 gap-6">
            {products.readyToEat.map((product) => (
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