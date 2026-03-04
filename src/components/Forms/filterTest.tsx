import React, { useState } from 'react';

// 1. Define the type for the data you expect to fetch
interface Post {
    userId?: number;
    id: number;
    category: string;
    tema: string;
    descricao: string;
}

const FetchDataOnClick: React.FC = () => {
  const [data, setData] = useState<Post[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 2. Define the asynchronous fetching function
  const fetchData = async (): Promise<Post | undefined> => {
    //setIsLoading(true);
    setError(null);
    try {
      // Use the Fetch API to make the request
      const response = await fetch('http://localhost:3000/posts/');
      
      // Check if the request was successful (fetch does not throw on HTTP errors like 404)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the JSON response, which is also an async operation
      const result: Post[] = await response.json();
      
      setData(result);
      return result;

    } catch (err) {
      // Type assertion for the error for TypeScript
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Define the click handler which calls the async fetch function
  const handleClick = () => {
    // You can call the async function directly here
    fetchData(); 
  };

  // 4. Render the component with the button and data display
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Fetching...' : 'Fetch Post ID 1'}
      </button>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {data && (
        <div>
          <h2>{data.includes}</h2>
          <p>{data.tema}</p>
        </div>
      )}
    </div>
  );
};

export default FetchDataOnClick;
