import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Lock, ExternalLink, Code, Play, Video } from "lucide-react";

const ApiDetail = () => {
  const { id } = useParams();

  // Mock data - will be replaced with actual API data
  const apiData = {
    name: "OpenWeather API",
    description: "Get current weather, forecasts, and historical weather data for any location worldwide. Access real-time weather conditions, 5-day forecasts, and climate data.",
    category: "Weather",
    rating: 4.7,
    authType: "API Key",
    isPremium: false,
    baseUrl: "https://api.openweathermap.org/data/2.5",
    endpoints: [
      {
        method: "GET",
        path: "/weather",
        description: "Get current weather data for a specific location",
        parameters: ["q (city name)", "appid (API key)", "units (standard/metric/imperial)"],
      },
      {
        method: "GET",
        path: "/forecast",
        description: "Get 5 day weather forecast with 3-hour intervals",
        parameters: ["q (city name)", "appid (API key)", "units"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold">{apiData.name}</h1>
                {apiData.isPremium && (
                  <Badge variant="default" className="bg-accent text-accent-foreground">
                    <Lock className="mr-1 h-3 w-3" />
                    Premium
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{apiData.category}</Badge>
                <Badge variant="secondary">{apiData.authType}</Badge>
                <div className="flex items-center gap-1 ml-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{apiData.rating}</span>
                  <span className="text-xs text-muted-foreground">(245 reviews)</span>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Official Docs
            </Button>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl">{apiData.description}</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="documentation" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="documentation" className="gap-2">
              <Code className="h-4 w-4" />
              Documentation
            </TabsTrigger>
            <TabsTrigger value="playground" className="gap-2">
              <Play className="h-4 w-4" />
              Live Test
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="gap-2">
              <Video className="h-4 w-4" />
              Video Tutorials
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documentation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Base URL</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block p-4 bg-muted rounded-lg text-sm">
                  {apiData.baseUrl}
                </code>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Endpoints</h3>
              {apiData.endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {endpoint.method}
                      </Badge>
                      <CardTitle className="font-mono text-lg">{endpoint.path}</CardTitle>
                    </div>
                    <CardDescription>{endpoint.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Parameters:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {endpoint.parameters.map((param, i) => (
                          <li key={i} className="text-sm text-muted-foreground font-mono">
                            {param}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="playground">
            <Card>
              <CardHeader>
                <CardTitle>API Testing Playground</CardTitle>
                <CardDescription>
                  Test API endpoints directly from your browser. Results will appear below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                  <Play className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Interactive testing playground coming soon...
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials">
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Learn how to integrate and use this API with step-by-step video guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                  <Video className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Video tutorials will be available here...
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDetail;
