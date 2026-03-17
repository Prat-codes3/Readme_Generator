import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: "AIzaSyBz2gEzUusXdTj0ndDhddkCJxvM-UDtlUE",
  apiVersion: "v1"
});

const list = async () => {
  const models = await ai.models.list();

  console.log(models);
};

list();