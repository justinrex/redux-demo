export default function Count({ count = 0, multiple = 0, hover = 0, n = 20 }) {
  return (
    <div className="count" data-tag="Count" aria-live="polite">
      <p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <p>Count × {n}: {multiple}</p>
      <p>Pointer entries: {hover}</p>
    </div>
  );
}
