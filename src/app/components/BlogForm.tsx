import React, { useState } from 'react';
import toast from 'react-hot-toast';
import TitleSelector from './TitleSelector';
import GeneratedContent from './GeneratedContent';

const BlogForm = () => {
  const [keywords, setKeywords] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [content, setContent] = useState('');
  const [isGeneratingTitles, setIsGeneratingTitles] = useState(false);
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);

  const handleGenerateTitles = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!keywords.trim()) {
      toast.error('Please enter keywords');
      return;
    }
    
    try {
      setIsGeneratingTitles(true);
      setTitles([]);
      setSelectedTitle('');
      setContent('');
      
      const response = await fetch('/api/generate-titles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate titles');
      }
      
      setTitles(data.titles);
      toast.success('Titles generated successfully!');
    } catch (error) {
      console.error('Error generating titles:', error);
      toast.error('Failed to generate titles. Please try again.');
    } finally {
      setIsGeneratingTitles(false);
    }
  };

  const handleGenerateContent = async () => {
    if (!selectedTitle) {
      toast.error('Please select a title first');
      return;
    }
    
    try {
      setIsGeneratingContent(true);
      setContent('');
      
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: selectedTitle }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate content');
      }
      
      setContent(data.content);
      toast.success('Content generated successfully!');
    } catch (error) {
      console.error('Error generating content:', error);
      toast.error('Failed to generate content. Please try again.');
    } finally {
      setIsGeneratingContent(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
  <div className="bg-black text-white rounded-lg shadow-lg p-6 mb-8 border border-gray-800 h-128 mt-20">
    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Generate Blog Content</h2>
    
    <form onSubmit={handleGenerateTitles} className="mb-6 mt-12">
      <div className="mb-4">
        <label htmlFor="keywords" className="block text-sm font-medium text-gray-300 mb-1">
          Enter keywords or topic
        </label>
        <input
          type="text"
          id="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="e.g., artificial intelligence, machine learning, future technology, ..."
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
          disabled={isGeneratingTitles}
        />
      </div>
      
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black mt-6 "
        disabled={isGeneratingTitles || !keywords.trim()}
      >
        {isGeneratingTitles ? 'Generating Titles...' : 'Generate Title Suggestions'}
      </button>
    </form>
    
    {titles.length > 0 && (
      <TitleSelector
        titles={titles}
        selectedTitle={selectedTitle}
        onSelectTitle={setSelectedTitle}
        onGenerateContent={handleGenerateContent}
        isGenerating={isGeneratingContent}
      />
    )}
  </div>
  
  {content && <GeneratedContent title={selectedTitle} content={content} />}
</div>
  );
};

export default BlogForm;