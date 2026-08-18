// import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/hero";
import TopDiv from "@/components/TopDiv/topdiv";
import CategorySection from "@/components/categorySection/categorysection";
import Footer from "@/components/Footer/footer";
import Recommended from "@/components/recommend/recommend";
import CofeeCulture from "@/components/cofeeCulture/cofeeCulture";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <TopDiv/> 
      <Hero />
      <CategorySection />
      <Recommended />
      <CofeeCulture />
      <Footer />
    </div>

  );
}
