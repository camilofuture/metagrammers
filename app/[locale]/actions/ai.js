"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const openai = createOpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export const generateChallenge = async (level, lang) => {
	const { text } = await generateText({
		model: openai("gpt-4o-mini"),
		prompt: `
        Generate a programming challenge in ${lang} with a difficulty level of ${level} on a scale of 0 to 10, where 0 is the easiest and 10 is the most complex. The challenge should be clear, specific, and provide enough context for an advanced programmer to solve it. Make sure to include detailed requirements and any necessary constraints. Format the text for HTML display, using <br> tags for line breaks and other appropriate HTML (do not use html or body, the code will be inside div tags) tags to ensure the content is well-presented. Do not include any additional information or preambles, only the challenge itself. Here are some examples of how to structure the challenge for different difficulty levels and programming languages:

        Level 0-2 in ${lang}: Write a function that takes a string and returns the same string reversed.<br><br>

        Level 3-5 in ${lang}: Write a function that finds the number of palindromic subsequences in a given string.<br><br>

        Level 6-8 in ${lang}: Write a function that implements Dijkstra's algorithm to find the shortest path in an undirected graph with positive weights.<br><br>

        Level 9-10 in ${lang}: Write a function that implements a neural network from scratch, without using machine learning libraries such as TensorFlow or PyTorch. The network should be able to classify images from the MNIST dataset.<br><br>

        Generate a suitable challenge for the difficulty level ${level} in ${lang}.
        `,
	});
	return text;
};
