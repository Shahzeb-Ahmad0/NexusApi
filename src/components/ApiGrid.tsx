import ApiCard from "./ApiCard";

// Mock data for demonstration
const mockApis = [
  {
    id: "openweather",
    name: "OpenWeather API",
    description: "Get current weather, forecasts, and historical weather data for any location worldwide",
    category: "Weather",
    rating: 4.7,
    authType: "API Key",
    isPremium: false,
  },
  {
    id: "google-maps",
    name: "Google Maps API",
    description: "Embed maps, get directions, geocoding, and place information",
    category: "Maps",
    rating: 4.9,
    authType: "API Key",
    isPremium: true,
  },
  {
    id: "openai",
    name: "OpenAI API",
    description: "Access powerful AI models for text generation, completion, and embeddings",
    category: "AI & ML",
    rating: 4.8,
    authType: "Bearer Token",
    isPremium: true,
  },
  {
    id: "stripe",
    name: "Stripe API",
    description: "Accept payments, manage subscriptions, and handle financial transactions",
    category: "Finance",
    rating: 4.6,
    authType: "API Key",
    isPremium: false,
  },
  {
    id: "twitter",
    name: "Twitter API",
    description: "Post tweets, access timeline data, and interact with Twitter's platform",
    category: "Social",
    rating: 4.3,
    authType: "OAuth 2.0",
    isPremium: false,
  },
  {
    id: "sendgrid",
    name: "SendGrid API",
    description: "Send transactional and marketing emails at scale with detailed analytics",
    category: "Utilities",
    rating: 4.5,
    authType: "API Key",
    isPremium: false,
  },
  {
    id: "rapid-translate",
    name: "Google Translate API",
    description: "Translate text between 100+ languages with high accuracy",
    category: "Utilities",
    rating: 4.7,
    authType: "API Key",
    isPremium: false,
  },
  {
    id: "coinbase",
    name: "Coinbase API",
    description: "Access cryptocurrency prices, wallet management, and trading features",
    category: "Finance",
    rating: 4.4,
    authType: "OAuth 2.0",
    isPremium: true,
  },
  {
    id: "anthropic",
    name: "Anthropic Claude API",
    description: "Advanced AI assistant for complex reasoning, analysis, and content generation",
    category: "AI & ML",
    rating: 4.9,
    authType: "API Key",
    isPremium: true,
  },
];

interface ApiGridProps {
  selectedCategory: string;
}

const ApiGrid = ({ selectedCategory }: ApiGridProps) => {
  const filteredApis = selectedCategory === "All" 
    ? mockApis 
    : mockApis.filter(api => api.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {filteredApis.map((api) => (
          <ApiCard key={api.id} {...api} />
        ))}
      </div>

      {filteredApis.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No APIs found in this category</p>
        </div>
      )}
    </div>
  );
};

export default ApiGrid;
