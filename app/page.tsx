"use client";

import { useState, useEffect } from "react";
import { Wand2, Loader2, ShoppingBag, Calendar, Camera, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [occasion, setOccasion] = useState("");
  const [wardrobeItems, setWardrobeItems] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    suggestion: string;
    imageUrl: string;
  } | null>(null);
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [colorScheme, setColorScheme] = useState("purple");

  // Fashion-related texts for animation
  const fashionTexts = [
    "Express yourself",
    "Find your style",
    "Look your best",
    "Dress with confidence",
    "Fashion forward"
  ];
  
  // Text animation effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setActiveTextIndex((prev) => (prev + 1) % fashionTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);
  
  // Slowly transition between color schemes
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorScheme(prev => {
        if (prev === "purple") return "purple-blue"; // Add intermediate state
        if (prev === "purple-blue") return "blue";
        if (prev === "blue") return "blue-teal"; // Add intermediate state
        if (prev === "blue-teal") return "teal";
        if (prev === "teal") return "teal-lavender"; // Add intermediate state
        if (prev === "teal-lavender") return "lavender";
        if (prev === "lavender") return "lavender-purple"; // Add intermediate state
        return "purple";
      });
    }, 15000); // Change every 15 seconds
    
    return () => clearInterval(colorInterval);
  }, []);
  
  const getColorScheme = () => {
    switch (colorScheme) {
      case "purple":
        return {
          primary: "purple",
          from: "from-purple-500",
          to: "to-purple-700", 
          via: "via-purple-600",
          bg: "bg-purple-100",
          bgDark: "dark:bg-purple-900/30",
          text: "text-purple-700",
          textDark: "dark:text-purple-300",
          border: "border-purple-200",
          borderDark: "dark:border-purple-800",
          hover: "hover:bg-purple-50",
          hoverDark: "dark:hover:bg-purple-900/20",
          gradient: "from-purple-400 to-purple-600",
          orb: "bg-purple-200/30",
        };
      case "blue":
        return {
          primary: "blue",
          from: "from-blue-500",
          to: "to-blue-700",
          via: "via-blue-600",
          bg: "bg-blue-100",
          bgDark: "dark:bg-blue-900/30",
          text: "text-blue-700",
          textDark: "dark:text-blue-300",
          border: "border-blue-200",
          borderDark: "dark:border-blue-800",
          hover: "hover:bg-blue-50",
          hoverDark: "dark:hover:bg-blue-900/20",
          gradient: "from-blue-400 to-blue-600",
          orb: "bg-blue-200/30",
        };
      case "teal":
        return {
          primary: "teal",
          from: "from-teal-500",
          to: "to-teal-700",
          via: "via-teal-600",
          bg: "bg-teal-100",
          bgDark: "dark:bg-teal-900/30",
          text: "text-teal-700",
          textDark: "dark:text-teal-300",
          border: "border-teal-200",
          borderDark: "dark:border-teal-800",
          hover: "hover:bg-teal-50",
          hoverDark: "dark:hover:bg-teal-900/20",
          gradient: "from-teal-400 to-teal-600",
          orb: "bg-teal-200/30",
        };
      case "lavender":
        return {
          primary: "indigo",
          from: "from-indigo-500",
          to: "to-indigo-700",
          via: "via-indigo-600",
          bg: "bg-indigo-100",
          bgDark: "dark:bg-indigo-900/30",
          text: "text-indigo-700",
          textDark: "dark:text-indigo-300",
          border: "border-indigo-200",
          borderDark: "dark:border-indigo-800",
          hover: "hover:bg-indigo-50",
          hoverDark: "dark:hover:bg-indigo-900/20",
          gradient: "from-indigo-400 to-indigo-600",
          orb: "bg-indigo-200/30",
        };
        // Add these cases to your getColorScheme function:

case "purple-blue":
  return {
    primary: "indigo",
    from: "from-purple-400",
    to: "to-blue-600", 
    via: "via-indigo-500",
    bg: "bg-indigo-100",
    bgDark: "dark:bg-indigo-900/30",
    text: "text-indigo-700",
    textDark: "dark:text-indigo-300",
    border: "border-indigo-200",
    borderDark: "dark:border-indigo-800",
    hover: "hover:bg-indigo-50",
    hoverDark: "dark:hover:bg-indigo-900/20",
    gradient: "from-purple-400 to-blue-500",
    orb: "bg-indigo-200/30",
  };

case "blue-teal":
  return {
    primary: "cyan",
    from: "from-blue-400",
    to: "to-teal-600",
    via: "via-cyan-500", 
    bg: "bg-cyan-100",
    bgDark: "dark:bg-cyan-900/30",
    text: "text-cyan-700",
    textDark: "dark:text-cyan-300",
    border: "border-cyan-200",
    borderDark: "dark:border-cyan-800",
    hover: "hover:bg-cyan-50",
    hoverDark: "dark:hover:bg-cyan-900/20",
    gradient: "from-blue-400 to-teal-500",
    orb: "bg-cyan-200/30",
  };

case "teal-lavender":
  return {
    primary: "violet",
    from: "from-teal-400",
    to: "to-indigo-600",
    via: "via-violet-500",
    bg: "bg-violet-100",
    bgDark: "dark:bg-violet-900/30",
    text: "text-violet-700",
    textDark: "dark:text-violet-300",
    border: "border-violet-200",
    borderDark: "dark:border-violet-800",
    hover: "hover:bg-violet-50",
    hoverDark: "dark:hover:bg-violet-900/20",
    gradient: "from-teal-400 to-indigo-500",
    orb: "bg-violet-200/30",
  };

case "lavender-purple":
  return {
    primary: "fuchsia",
    from: "from-indigo-400",
    to: "to-purple-600",
    via: "via-fuchsia-500",
    bg: "bg-fuchsia-100",
    bgDark: "dark:bg-fuchsia-900/30",
    text: "text-fuchsia-700",
    textDark: "dark:text-fuchsia-300",
    border: "border-fuchsia-200",
    borderDark: "dark:border-fuchsia-800",
    hover: "hover:bg-fuchsia-50",
    hoverDark: "dark:hover:bg-fuchsia-900/20",
    gradient: "from-indigo-400 to-purple-500",
    orb: "bg-fuchsia-200/30",
  };
      default:
        return {
          primary: "purple",
          from: "from-purple-500",
          to: "to-purple-700",
          via: "via-purple-600",
          bg: "bg-purple-100",
          bgDark: "dark:bg-purple-900/30",
          text: "text-purple-700",
          textDark: "dark:text-purple-300",
          border: "border-purple-200",
          borderDark: "dark:border-purple-800",
          hover: "hover:bg-purple-50",
          hoverDark: "dark:hover:bg-purple-900/20",
          gradient: "from-purple-400 to-purple-600",
          orb: "bg-purple-200/30",
        };
    }
  };
  
  const colors = getColorScheme();
  
  const myprompt = `Create a fashion outfit for ${occasion} using the following items: ${wardrobeItems}`;

  // Example occasions for quick selection
  const occasionSuggestions = [
    "Business Meeting", 
    "Casual Date", 
    "Wedding Guest", 
    "Job Interview",
    "Weekend Brunch",
    "Vacation"
  ];

  const generateOutfit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ myprompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", response.status, errorData);
        throw new Error("Failed to generate outfit");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main 
      className={`min-h-screen relative bg-gradient-to-br from-${colors.primary}-50 via-${colors.primary}-50/80 to-${colors.primary}-100 dark:from-gray-900 dark:via-${colors.primary}-900/20 dark:to-gray-900 transition-colors duration-3000`}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/fashion-bg1.jpg')",
          backgroundSize: '300px 300px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className={`absolute top-20 left-20 w-64 h-64 rounded-full ${colors.orb} blur-3xl animate-blob transition-colors duration-3000`}></div>
      <div className={`absolute top-40 right-20 w-72 h-72 rounded-full ${colors.orb} blur-3xl animate-blob animation-delay-2000 transition-colors duration-3000`}></div>
      <div className={`absolute bottom-20 left-1/3 w-80 h-80 rounded-full ${colors.orb} blur-3xl animate-blob animation-delay-4000 transition-colors duration-3000`}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className="flex items-center justify-center mb-2">
              <div className={`relative mr-4 p-2 bg-gradient-to-br ${colors.from} ${colors.to} rounded-full shadow-lg animate-pulse transition-colors duration-3000`}>
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h1 className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.from} ${colors.to} text-5xl font-bold tracking-tight animate-gradient-x transition-colors duration-3000`}>
                AI Outfit Stylist
              </h1>
            </div>
            
            <div className="h-8 relative">
              <p className={`text-xl ${colors.text} ${colors.textDark} max-w-2xl mx-auto font-medium absolute left-0 right-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <span className="inline-block mr-2">✨</span>
                {fashionTexts[activeTextIndex]}
                <span className="inline-block ml-2">✨</span>
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create the perfect outfit combination from your wardrobe with AI assistance
            </p>
          </div>

          <Card className={`p-6 card-hover animate-float shadow-pastel border-2 ${colors.border} ${colors.borderDark} bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg transition-colors duration-3000`}>
            <CardHeader className="pb-2">
              <CardTitle className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${colors.from} ${colors.to} transition-colors duration-3000`}>
                Create Your Outfit
              </CardTitle>
              <CardDescription>
                Enter your occasion and list your available clothing items
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={generateOutfit} className="space-y-6">
                <div className="space-y-2">
                  <label className={`text-sm font-medium flex items-center ${colors.text} ${colors.textDark} transition-colors duration-3000`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Occasion
                  </label>
                  <Input
                    placeholder="e.g., Wedding, Business Meeting, Casual Date"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                    className={`hover-lift ${colors.border} ${colors.borderDark} focus:ring-${colors.primary}-300 focus:border-${colors.primary}-300 transition-colors duration-3000`}
                  />
                  
                  {/* Quick occasion selection */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {occasionSuggestions.map((sugg, index) => (
                      <Badge 
                        key={sugg}
                        variant="outline" 
                        className={`cursor-pointer transition-all duration-300 animate-fade-in animation-delay-${index * 200} ${colors.bg} ${colors.text} hover:bg-${colors.primary}-200 ${colors.border} transition-colors duration-3000`}
                        onClick={() => setOccasion(sugg)}
                      >
                        {sugg}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium flex items-center ${colors.text} ${colors.textDark} transition-colors duration-3000`}>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Your Wardrobe Items
                  </label>
                  <Textarea
                    placeholder="List your clothing items (e.g., red dress, denim jacket, white sneakers)"
                    value={wardrobeItems}
                    onChange={(e) => setWardrobeItems(e.target.value)}
                    required
                    className={`min-h-[120px] hover-lift ${colors.border} ${colors.borderDark} focus:ring-${colors.primary}-300 focus:border-${colors.primary}-300 transition-colors duration-3000`}
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full button-hover group bg-gradient-to-r ${colors.gradient} hover:${colors.from} hover:brightness-110 text-white transition-colors duration-3000`}
                  size="lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating your perfect outfit...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-700" />
                      Generate Outfit Suggestion
                      <Sparkles className="ml-2 h-5 w-5 group-hover:animate-sparkle" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {result && (
            <div className="space-y-6 animate-fade-in">
              <Tabs defaultValue="suggestion" className="w-full">
                <TabsList className={`grid w-full grid-cols-2 mb-4 ${colors.bg} ${colors.bgDark} transition-colors duration-3000`}>
                  <TabsTrigger value="suggestion" className={`data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:${colors.text} dark:data-[state=active]:${colors.textDark} transition-colors duration-3000`}>
                    Styling Details
                  </TabsTrigger>
                  <TabsTrigger value="visualization" className={`data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:${colors.text} dark:data-[state=active]:${colors.textDark} transition-colors duration-3000`}>
                    Visual Preview
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="suggestion" className="animate-slide-up">
                  <Card className={`p-6 card-hover shadow-pastel border-2 ${colors.border} ${colors.borderDark} bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg transition-colors duration-3000`}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-2xl flex items-center text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} transition-colors duration-3000`}>
                        <Wand2 className={`h-5 w-5 mr-2 ${colors.text} transition-colors duration-3000`} />
                        Styling Suggestion
                      </CardTitle>
                      <CardDescription>
                        Occasion: <span className={`font-medium ${colors.text} ${colors.textDark} transition-colors duration-3000`}>{occasion}</span>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-200">
                          {result.suggestion}
                        </p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm" className={`button-hover ${colors.border} ${colors.text} ${colors.hover} ${colors.borderDark} dark:text-${colors.primary}-300 ${colors.hoverDark} transition-colors duration-3000`}>
                        <Share2 className="h-4 w-4 mr-2" /> 
                        Share
                      </Button>
                      <Button size="sm" className={`button-hover bg-gradient-to-r ${colors.gradient} hover:brightness-110 text-white transition-colors duration-3000`}>
                        <Camera className="h-4 w-4 mr-2" />
                        Save Outfit
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="visualization" className="animate-slide-up">
                  <Card className={`p-6 card-hover shadow-pastel border-2 ${colors.border} ${colors.borderDark} bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg transition-colors duration-3000`}>
                    <CardHeader className="pb-2">
                      <CardTitle className={`text-2xl flex items-center text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient} transition-colors duration-3000`}>
                        <Camera className={`h-5 w-5 mr-2 ${colors.text} transition-colors duration-3000`} />
                        Outfit Visualization
                      </CardTitle>
                      <CardDescription>
                        AI-generated outfit based on your wardrobe items
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className={`relative overflow-hidden rounded-lg hover-lift border-2 ${colors.border} ${colors.borderDark} shadow-pastel transition-colors duration-3000`}>
                        <img
                          src={result.imageUrl}
                          alt="AI Generated Outfit"
                          className="object-cover w-full transition-transform duration-700 hover:scale-105"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-${colors.primary}-900/70 to-transparent p-4 transition-colors duration-3000`}>
                          <Badge className={`mb-2 ${colors.bg} ${colors.text} ${colors.border} transition-colors duration-3000`}>AI Generated</Badge>
                          <h3 className="font-medium text-white">{occasion} Outfit</h3>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm" className={`button-hover ${colors.border} ${colors.text} ${colors.hover} ${colors.borderDark} dark:text-${colors.primary}-300 ${colors.hoverDark} transition-colors duration-3000`}>
                        <Share2 className="h-4 w-4 mr-2" /> 
                        Share
                      </Button>
                      <Button size="sm" className={`button-hover bg-gradient-to-r ${colors.gradient} hover:brightness-110 text-white transition-colors duration-3000`}>
                        <Camera className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {/* Feature highlights */}
          {!result && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icon: <Wand2 className={`h-6 w-6 ${colors.text} transition-colors duration-3000`} />,
                  title: "AI Styling",
                  description: "Personalized outfit recommendations based on your wardrobe",
                },
                {
                  icon: <Camera className={`h-6 w-6 ${colors.text} transition-colors duration-3000`} />,
                  title: "Visual Preview",
                  description: "See how your outfit combinations look before wearing them",
                },
                {
                  icon: <Calendar className={`h-6 w-6 ${colors.text} transition-colors duration-3000`} />,
                  title: "Occasion Perfect",
                  description: "Get outfit ideas perfectly matched to your specific events",
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className={`card-hover animate-float animation-delay-${index * 500} shadow-pastel backdrop-blur-lg ${colors.bg}/80 border-2 ${colors.border} dark:bg-gray-800/60 dark:border-gray-700 transition-colors duration-3000`}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={`h-12 w-12 rounded-full bg-white/80 dark:bg-gray-900/80 flex items-center justify-center mb-4 shadow-md animate-pulse`}>
                        {feature.icon}
                      </div>
                      <h3 className={`font-semibold text-lg mb-2 ${colors.text} dark:text-gray-100 transition-colors duration-3000`}>{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Add these custom animations to your global CSS */}
         </main>
  );
}