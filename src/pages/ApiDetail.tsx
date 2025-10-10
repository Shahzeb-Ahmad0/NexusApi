import { useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, Lock, ExternalLink, Code, Play, Video, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApiDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Live Test state
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState("");

  // Temporary API key for hackathon demo
  const OPENWEATHER_API_KEY = "bd5e378503939ddaee76f12ad7a97608";

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

  const handleTestApi = async () => {
    if (!cityName.trim()) {
      setError("Please enter a city name");
      return;
    }

    setIsLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please check the spelling and try again.");
        }
        throw new Error("Failed to fetch weather data. Please try again.");
      }

      const data = await response.json();
      setWeatherData(data);
      toast({
        title: "Success!",
        description: `Weather data loaded for ${data.name}`,
      });
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                <CardTitle>Live API Test</CardTitle>
                <CardDescription>
                  Test the OpenWeather API directly from your browser. Enter a city name to get real-time weather data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Form */}
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter city name (e.g., London, Tokyo, New York)"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleTestApi()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleTestApi}
                    disabled={isLoading}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Testing...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Test API
                      </>
                    )}
                  </Button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                    <p className="text-sm text-destructive font-medium">{error}</p>
                  </div>
                )}

                {/* Weather Results */}
                {weatherData && (
                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{weatherData.name}, {weatherData.sys.country}</h3>
                          <p className="text-sm text-muted-foreground capitalize">
                            {weatherData.weather[0].description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</div>
                          <p className="text-sm text-muted-foreground">
                            Feels like {Math.round(weatherData.main.feels_like)}°C
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-3 bg-background/50 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Humidity</p>
                          <p className="text-lg font-semibold">{weatherData.main.humidity}%</p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Pressure</p>
                          <p className="text-lg font-semibold">{weatherData.main.pressure} hPa</p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Wind Speed</p>
                          <p className="text-lg font-semibold">{weatherData.wind.speed} m/s</p>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Visibility</p>
                          <p className="text-lg font-semibold">{(weatherData.visibility / 1000).toFixed(1)} km</p>
                        </div>
                      </div>
                    </div>

                    {/* Raw JSON Response */}
                    <details className="group">
                      <summary className="cursor-pointer p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <span className="font-medium">View Raw JSON Response</span>
                      </summary>
                      <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-x-auto">
                        {JSON.stringify(weatherData, null, 2)}
                      </pre>
                    </details>
                  </div>
                )}

                {/* Placeholder when no data */}
                {!weatherData && !error && !isLoading && (
                  <div className="p-8 border-2 border-dashed border-border rounded-lg text-center">
                    <Play className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Enter a city name and click "Test API" to see live weather data
                    </p>
                  </div>
                )}
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
