import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ApiCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  authType: string;
  isPremium?: boolean;
}

const ApiCard = ({ id, name, description, category, rating, authType, isPremium }: ApiCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="bg-accent text-accent-foreground">
            <Lock className="mr-1 h-3 w-3" />
            Premium
          </Badge>
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {authType}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground ml-1">(245)</span>
          </div>

          <Link to={`/api/${id}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              Explore
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiCard;
