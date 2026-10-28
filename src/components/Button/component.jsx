export default function Button({ incrementCount, incrementHover }) {
  return (
    <button className="clickableButton" onClick={incrementCount} onMouseEnter={incrementHover}
      data-tag="IncrementButton" type="button">
      Increment count
    </button>
  );
}
