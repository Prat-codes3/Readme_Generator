import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  apiVersion: "v1"   // 🔥 THIS IS THE FIX
});

const generateReadme = async (context) => {
  try {
   
    const prompt = `
Generate a professional GitHub README.

IMPORTANT RULES:
- DO NOT add explanations
- DO NOT add introductions like "Here is your README"
- DO NOT add conversational text
- ONLY output the README content


Project Name: ${context.name}
Description: ${context.description}
Dependencies: ${context.dependencies.join(", ")}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text;

    return text || "No README generated";

  } catch (err) {
    console.error("Gemini failed:", err);

    return `# ${context.name}

${context.description}

## Tech Stack
${context.language}

## Dependencies
${context.dependencies.join(", ")}
`;
  }
};

export { generateReadme };