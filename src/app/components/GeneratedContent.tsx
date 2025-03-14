import React from 'react';
import toast from 'react-hot-toast';

interface GeneratedContentProps {
  title: string;
  content: string;
}

const GeneratedContent: React.FC<GeneratedContentProps> = ({ title, content }) => {
  const handleCopyContent = () => {
    const formattedContent = `# ${title}\n\n${content}`;
    navigator.clipboard.writeText(formattedContent)
      .then(() => toast.success('Content copied to clipboard!'))
      .catch(() => toast.error('Failed to copy content'));
  };

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(title)
      .then(() => toast.success('Title copied to clipboard!'))
      .catch(() => toast.error('Failed to copy title'));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Generated Blog Post</h2>
        <div className="space-x-2">
          <button
            onClick={handleCopyTitle}
            className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Copy Title
          </button>
          <button
            onClick={handleCopyContent}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Copy All
          </button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="prose max-w-none">
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratedContent;