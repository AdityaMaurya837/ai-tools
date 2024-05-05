import React, { useState, useEffect } from 'react';

function AiTools() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h2>Mock API Data</h2>
      </div>
      {loading ? ( 
        <div>Loading...</div>
      ) : (
        <div className="card-row">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-info">
                <h3><strong>Tool Name : </strong> {item.title}</h3>
                <p><strong>Description : </strong> {item.body}</p>
                <span>
                  <a className="default-btn" href="/">Try This Tool</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default AiTools;
