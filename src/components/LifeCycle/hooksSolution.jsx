import { useEffect, useState } from 'react';
import './LifeCycle.css';

export function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    return () => { document.title = previousTitle; };
  }, [title]);
}

export default function LifeCycle() {
  const [title, setTitle] = useState('Lifecycle');
  useDocumentTitle(title);
  return <label>Page title<input value={title} onChange={event => setTitle(event.target.value)} /></label>;
}
