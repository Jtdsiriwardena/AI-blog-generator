'use client';

import React from 'react';
import Header from './components/Header';
import BlogForm from './components/BlogForm';
import About from './components/About';

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Header />
      <BlogForm />
      <About  />
      <footer className="text-center py-6 text-gray-500">
        <p>© {new Date().getFullYear()} IdeaLoom. All rights reserved.</p>
      </footer>
    </main>
  );
}