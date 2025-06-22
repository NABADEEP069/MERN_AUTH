import { useState } from 'react';

export default function ChatComponent() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.response) {
        setResponse(data.response);
      } else {
        setResponse(' Fuck ! No valid response ! rewrite your promt');
      }
    } catch (err) {
      console.error('Frontend Error:', err);
      setResponse(' Error while contacting the API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
 
      <h1 className="text-3xl font-semibold mb-2 text-center">Ask Anything !    ask to plan your vacation</h1>

           <br></br>     <br></br>
      <textarea
        className="w-full p-4 border rounded mb-3"
        rows={3}
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Let me Think...' : 'Send'}
      </button>
      <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-4 rounded">
        {response}
      </div>
    </div>
  );
}
