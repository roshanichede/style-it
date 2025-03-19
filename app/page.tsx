"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [occasion, setOccasion] = useState("");
  const [wardrobeItems, setWardrobeItems] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    suggestion: string;
    imageUrl: string;
  } | null>(null);
  
  //const myprompt = `You are a fashion stylist AI. Given an occasion and a list of wardrobe items, generate multiple cohesive outfit ideas that best suit the occasion. Consider factors like color coordination, layering, accessories, footwear, and overall aesthetic. If needed, suggest ways to enhance the outfit using styling techniques such as tucking, draping, or pairing with statement pieces. Provide diverse outfit variations for different style preferences (e.g., casual, elegant, trendy). Here’s the input: Occasion: ${occasion} Wardrobe Items: ${wardrobeItems}`; 
  const myprompt = `Create a fashion outfit for ${occasion} using the following items: ${wardrobeItems}`;

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
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">AI Outfit Stylist</h1>
          <p className="text-muted-foreground">
            Let AI help you create the perfect outfit combination from your wardrobe
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={generateOutfit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Occasion</label>
              <Input
                placeholder="e.g., Wedding, Business Meeting, Casual Date"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Your Wardrobe Items</label>
              <Textarea
                placeholder="List your clothing items (e.g., red dress, denim jacket, white sneakers)"
                value={wardrobeItems}
                onChange={(e) => setWardrobeItems(e.target.value)}
                required
                className="min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                "Generating..."
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Outfit Suggestion
                </>
              )}
            </Button>
          </form>
        </Card>

        {result && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Styling Suggestion</h2>
              <p className="whitespace-pre-wrap text-muted-foreground">
                {result.suggestion}
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Outfit Visualization</h2>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={result.imageUrl}
                  alt="AI Generated Outfit"
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}