import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            Universal Hub for Public APIs
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover, Test & Learn
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thousands of APIs
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your one-stop platform to explore curated public APIs, test endpoints in real-time, 
            and master integration with comprehensive video tutorials.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <Search className="mr-2 h-5 w-5" />
              Explore APIs
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Watch Tutorials
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">APIs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">100+</div>
              <div className="text-sm text-muted-foreground mt-1">Tutorials</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
