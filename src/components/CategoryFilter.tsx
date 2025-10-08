import { Badge } from "@/components/ui/badge";
import { Zap, Cloud, DollarSign, MessageSquare, Map, Brain } from "lucide-react";

const categories = [
  { name: "All", icon: null },
  { name: "AI & ML", icon: Brain },
  { name: "Finance", icon: DollarSign },
  { name: "Weather", icon: Cloud },
  { name: "Maps", icon: Map },
  { name: "Social", icon: MessageSquare },
  { name: "Utilities", icon: Zap },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.name;
          
          return (
            <Badge
              key={category.name}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "border-border hover:border-primary hover:bg-muted"
              }`}
              onClick={() => onCategoryChange(category.name)}
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {category.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
