import React from "react";

interface PagecardProps {
    title: string;
    content: string;
}

const Pagecard: React.FC<PagecardProps>=({title,content})=>{
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    );
      
}

export default Pagecard;