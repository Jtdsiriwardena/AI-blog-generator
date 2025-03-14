import { NextResponse } from 'next/server';
import openai from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    
    if (!title || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional blog writer. Write well-structured, engaging, and informative blog posts that include an introduction, main content with subheadings, and a conclusion.'
        },
        {
          role: 'user',
          content: `Write a comprehensive blog post with the title: "${title}". Format the content in Markdown. Include an engaging introduction, 3-4 distinct sections with subheadings, and a conclusion. Aim for around 800-1000 words that provide real value to readers.`
        }
      ],
      temperature: 0.7,
      max_tokens: 2500,
    });

    const content = response.choices[0].message.content;

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}