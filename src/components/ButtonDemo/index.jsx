import Button from '../Button';
import Count from '../Count';

export default function ButtonDemo() {
  return (
    <section className="content" data-tag="CounterDemo" aria-labelledby="counter-heading">
      <h2 id="counter-heading">Shared state and derived values</h2>
      <p>The button dispatches an action. Connected components select the updated count and its multiple.</p>
      <Button />
      <Count n={20} />
    </section>
  );
}
