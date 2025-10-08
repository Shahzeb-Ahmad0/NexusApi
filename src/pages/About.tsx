import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About NexusAPI
            </h1>
            <p className="text-xl text-muted-foreground">
              Bridge To Better Tech
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                NexusAPI is your universal hub for discovering, testing, and learning how to use public APIs. 
                We empower developers to build better applications by providing easy access to comprehensive 
                API documentation, interactive testing environments, and educational resources.
              </p>
              <p className="text-foreground">
                Whether you're a seasoned developer or just starting your coding journey, NexusAPI makes 
                API integration simple and accessible for everyone.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse through our curated collection of public APIs across various categories including 
                  weather, AI, finance, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Try out APIs directly in your browser with our built-in testing playground. 
                  See live responses and understand how APIs work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access video tutorials and comprehensive documentation to master API integration 
                  and best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose NexusAPI?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">Comprehensive API catalog with detailed documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">Interactive testing playground for hands-on experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">Video tutorials for visual learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">Save and organize your favorite APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-foreground">Community reviews and ratings</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Have questions or suggestions?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                We'd love to hear from you! Reach out to us at{" "}
                <a href="mailto:contact@nexusapi.com" className="text-primary hover:underline">
                  contact@nexusapi.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
