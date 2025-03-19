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
    //console.log('Prompt:', myprompt);

    // Generate outfit suggestion text

    const suggestionResponse = await client.chat.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: [
            {
                type: "text",
                text: "Given an occasion and a list of wardrobe items, suggest multiple stylish outfit ideas. Consider color coordination, layering, accessories, and footwear. Keep suggestions practical and creative while ensuring they match the occasion."
            }
        ]
          //content: "Given an occasion and a list of wardrobe items, suggest multiple stylish outfit ideas. Consider color coordination, layering, accessories, and footwear. Keep suggestions practical and creative while ensuring they match the occasion."
        },
        {
          role: "user",
          content: [
                {
                    type: "text",
                    text: myprompt
                }
            ]
          //content: myprompt  // Use the prompt directly instead of template literals
        }
      ]
    });

    const suggestion = suggestionResponse.choices[0].message.content;
    
    console.log('Suggestion:', suggestion);
    
    /*const imageResponse = await client.images.generate({
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
    });*/

    // Generate image based on the suggestion
    const imageResponse = await client.images.generate({
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
    });

    //console.log('Image Generated:', imageResponse);

    const base64Image = imageResponse.data[0].b64_json; // Adjust based on the actual response structure

    return NextResponse.json({
      //imageUrl: imageResponse.data[0].url
      suggestion,
      imageUrl: `data:image/webp;base64,${base64Image}` // Format for displaying the image
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate outfit suggestion' },
      { status: 500 }
    );
  }
}