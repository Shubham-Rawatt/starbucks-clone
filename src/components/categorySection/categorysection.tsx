import { categories } from "@/data/categories";
import CategoryCard from "../categoryCard/categorycard";


//  yeha category card show ho rhe h 


const CategorySection = () => {
  return (
    <section className="px-8 mt-20">
      <h2 className="text-[#1E3932] font-extrabold text-2xl px-30">Handcrafted Curations</h2>
      <div className="flex gap-6 justify-center">

        {categories.map((category) => (
  <CategoryCard
    key={category.id}
    category={category}
  />
))}
      </div>
    </section>
  );
};

export default CategorySection;