
import { GoogleGenAI, Type } from '@google/genai';
import type { MenuItem } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini features will be disabled.");
}

// Only initialize the AI client if we have an API key
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const getDishRecommendation = async (preferences: string, menu: MenuItem[]): Promise<{ dishName: string; reason: string; } | null> => {
  if (!ai) {
    return {
      dishName: 'Masala Dosa',
      reason: 'This classic dish is a crowd-pleaser, known for its crispy texture and flavorful potato filling. It is a great choice for anyone new to South Indian cuisine. (This is a sample response as API key is not configured).',
    };
  }

  const menuString = menu.map(item => `${item.name}: ${item.description}`).join('\n');

  const prompt = `
    You are a helpful restaurant assistant for "Srivalli", a South Indian restaurant.
    A customer has the following preferences: "${preferences}".
    
    Based on their preferences, recommend exactly one dish from the following menu.
    
    Menu:
    ${menuString}
    
    Provide your response in JSON format.
  `;
  
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    dishName: {
                        type: Type.STRING,
                        description: "The name of the recommended dish."
                    },
                    reason: {
                        type: Type.STRING,
                        description: "A brief, friendly explanation for why this dish was recommended based on the user's preferences."
                    }
                },
                required: ["dishName", "reason"]
            },
        },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);

    // Validate that the recommended dish is actually on the menu
    if (menu.some(item => item.name === result.dishName)) {
      return result;
    } else {
      console.error("Gemini recommended a dish not on the menu:", result.dishName);
      // Fallback to a default recommendation
      return {
        dishName: menu[0].name,
        reason: `We'd love for you to try our classic ${menu[0].name}. It's a house favorite!`
      };
    }
  } catch (error) {
    console.error('Error getting recommendation from Gemini:', error);
    return null;
  }
};
