import { useRef } from 'react';

export default function Refs() {
  const inputRef = useRef(null);
  return (
    <section>
      <label>Focus target<input ref={inputRef} /></label>
      <button type="button" onClick={() => inputRef.current?.focus()}>Focus input</button>
    </section>
  );
}
