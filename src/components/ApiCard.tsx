import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";

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
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingApiId, setPendingApiId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!user) {
      setPendingApiId(id);
      setShowAuthModal(true);
    } else {
      navigate(`/api/${id}`);
    }
  };

  const handleAuthSuccess = () => {
    if (pendingApiId) {
      navigate(`/api/${pendingApiId}`);
      setPendingApiId(null);
    }
  };

  return (
    <>
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

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleExploreClick}
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              Explore
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <AuthModal 
        open={showAuthModal} 
        onOpenChange={setShowAuthModal}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default ApiCard;
