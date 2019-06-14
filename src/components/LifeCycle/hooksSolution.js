import React, { useState, useEffect } from 'react';
import './LifeCycle.css';

const LifeCycle = () => {
  const [title, setTitle] = useState('LifeCycle Demo');

  useEffect(() => {
    document.title = title;
    return () => { document.title = 'React App'; };
  });

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="LifeCycle">
      <input onChange={updateTitle} />
    </div>
  );
};

export default LifeCycle;

