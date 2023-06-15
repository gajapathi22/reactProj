import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>Data Details</h2>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;
