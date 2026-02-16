import { Link } from "react-router-dom";
function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full px-4 py-3 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const styles = {
    primary:
      base + " bg-yellow-400 px-4 py-3 md:px-6 md:py-4 hover:bg-yellow-300",
    secondary:
      base +
      "bg-transparent text-sm border border-stone-300 text-stone-400 px-4 py-3 md:px-6 md:py-4 hover:bg-stone-800 hover:text-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2",
    small: base + " bg-yellow-400 text-xs px-4 py-2 md:px-5 md:py-2.5",
    medium: base + "bg-yellow-400 text-base px-4 py-3 md:px-6 md:py-4",
    large: base + " bg-yellow-400 text-lg px-4 py-3.5 md:px-6 md:py-4.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
