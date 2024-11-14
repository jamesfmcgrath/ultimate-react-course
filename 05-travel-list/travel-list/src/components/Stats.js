export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        Start adding items to your packing list!
      </footer>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You are packed and ready to go! ✈️'
          : `You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percentage}%).`}
      </em>
    </footer>
  );
}
