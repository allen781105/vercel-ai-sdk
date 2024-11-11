import { openai } from '@ai-sdk/openai';
//import { groq } from '@ai-sdk/groq';

import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'), 
    //model: groq('llama3-8b-8192'),
    messages,
  });

  return result.toDataStreamResponse();
}