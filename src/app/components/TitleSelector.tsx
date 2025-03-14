import React from 'react';

interface TitleSelectorProps {
  titles: string[];
  selectedTitle: string;
  onSelectTitle: (title: string) => void;
  onGenerateContent: () => void;
  isGenerating: boolean;
}

const TitleSelector: React.FC<TitleSelectorProps> = ({
  titles,
  selectedTitle,
  onSelectTitle,
  onGenerateContent,
  isGenerating,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">Select a Title</h3>
      <div className="space-y-2 mb-4">
        {titles.map((title, index) => (
          <div key={index} className="flex items-start">
            <input
              type="radio"
              id={`title-${index}`}
              name="title"
              value={title}
              checked={selectedTitle === title}
              onChange={() => onSelectTitle(title)}
              className="mt-1 mr-2"
            />
            <label
              htmlFor={`title-${index}`}
              className="text-gray-800 cursor-pointer hover:text-blue-600"
            >
              {title}
            </label>
          </div>
        ))}
      </div>
      
      <button
        onClick={onGenerateContent}
        disabled={!selectedTitle || isGenerating}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isGenerating ? 'Generating Content...' : 'Generate Blog Content'}
      </button>
    </div>
  );
};

export default TitleSelector;