import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateReadme = async (context) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-pro"
  });

  const prompt = `
You are an expert developer.

Generate a professional GitHub README for the following project.

Project Information:

Name: ${context.name}

Description: ${context.description || "No description provided"}

Primary Language: ${context.language}

Repository Files:
${context.files.join(", ")}

Dependencies:
${context.dependencies.join(", ")}

The README should contain:

# Project Title
Brief description

# Features

# Tech Stack

# Installation

# Usage

# Contributing

# License

Write it in clean Markdown format suitable for GitHub.
`;

  const result = await model.generateContent(prompt);

  const readme = result.response.text();

  return readme;
};

export { generateReadme };