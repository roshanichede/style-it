import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const client = new OpenAI({
    baseURL: 'https://api.studio.nebius.com/v1/',
    apiKey: process.env.NEBIUS_API_KEY,
});

console.log('apikey: ', client);
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    //const { occasion, wardrobeItems } = await req.json();
    const { myprompt } = await req.json();
    /*
    const suggestionResponse = await client.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
      temperature: 0.6,
      top_p: 0.9,
      messages: [
        {
          role: "system",
          content: "Given an occasion and a list of wardrobe items, suggest multiple stylish outfit ideas. Consider color coordination, layering, accessories, and footwear. Keep suggestions practical and creative while ensuring they match the occasion."
        },
        {
          role: "user",
          content: myprompt  // Use the prompt directly instead of template literals
        }
      ]
    });

    const suggestion = suggestionResponse.choices[0].message.content;
    
    console.log('Suggestion:', suggestion);
    
    // Generate image based on the suggestion
    const params: any = {
      model: "black-forest-labs/flux-dev",
      response_format: "b64_json",
      extra_body: {
        response_extension: "webp",
        width: 1024,
        height: 1024,
        num_inference_steps: 28,
        negative_prompt: "",
        seed: -1
      },
      prompt: myprompt
    };
    const imageResponse = await client.images.generate(params);
    const base64Image = imageResponse.data[0].b64_json; // Adjust based on the actual response structure
    */
    const textParams: any = {
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
      temperature: 0.6,
      top_p: 0.9,
      messages: [
        {
          role: "system",
          content: "Given an occasion and a list of wardrobe items, suggest multiple stylish outfit ideas. Consider color coordination, layering, accessories, and footwear. Keep suggestions practical and creative while ensuring they match the occasion."
        },
        {
          role: "user",
          content: myprompt
        }
      ]
    };
    
    const params: any = {
      model: "black-forest-labs/flux-dev",
      response_format: "b64_json",
      extra_body: {
        response_extension: "webp",
        width: 1024,
        height: 1024,
        num_inference_steps: 28,
        negative_prompt: "",
        seed: -1
      },
      prompt: myprompt
    };
    
    // Run both API calls in parallel
    const [suggestionResponse, imageResponse] = await Promise.all([
      client.chat.completions.create(textParams),
      client.images.generate(params)
    ]);
    
    // Process results after both have completed
    const suggestion = suggestionResponse.choices[0]?.message?.content || "No suggestion available";
    const base64Image = imageResponse.data[0]?.b64_json;
    
    if (!base64Image) {
      throw new Error('Image generation failed');
    }
    return NextResponse.json({
      //imageUrl: imageResponse.data[0].url
      suggestion,
      imageUrl: `data:image/webp;base64,${base64Image}` // Format for displaying the image
    });
  } catch (error: any) {
    console.error('Error details:', error.message, error.stack);
    
    // More descriptive error messages
    let errorMessage = 'Failed to generate outfit suggestion';
    let statusCode = 500;
    
    if (error.message?.includes('timeout')) {
      errorMessage = 'The request timed out. Please try again.';
      statusCode = 504;
    }
    
    if (error.name === 'FetchError') {
      errorMessage = `API communication error: ${error.message}`;
    }
    return NextResponse.json(
      { error: 'Failed to generate outfit suggestion' },
      { status: 500 }
    );
  }
}