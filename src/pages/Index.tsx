import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ApiGrid from "@/components/ApiGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      <main className="flex-1">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ApiGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
