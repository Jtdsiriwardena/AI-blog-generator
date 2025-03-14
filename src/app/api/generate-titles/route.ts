import { NextResponse } from 'next/server';
import openai from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { keywords } = await request.json();
    
    if (!keywords || keywords.trim() === '') {
      return NextResponse.json(
        { error: 'Keywords are required' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates blog title suggestions based on keywords.'
        },
        {
          role: 'user',
          content: `Generate 5 catchy and SEO-friendly blog titles based on these keywords: ${keywords}. Return just the titles in a JSON array without any additional text.`
        }
      ],
      temperature: 0.7,
    });

    const titlesText = response.choices[0].message.content;
    let titles;
    
    try {
      // Parse the response to extract titles
      titles = JSON.parse(titlesText || '[]');
    } catch {
      // If the response is not valid JSON, try to extract titles using regex
      const titleMatches = (titlesText || '').match(/"([^"]+)"/g);
      titles = titleMatches 
        ? titleMatches.map(match => match.replace(/"/g, '')) 
        : [];
    }

    return NextResponse.json({ titles });
  } catch (error) {
    console.error('Error generating titles:', error);
    return NextResponse.json(
      { error: 'Failed to generate titles' },
      { status: 500 }
    );
  }
}