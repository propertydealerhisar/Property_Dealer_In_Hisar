export function FormInput(props) {
  return (
    <input
      {...props}
      className="
        w-full rounded-md border
        px-3 py-2 text-sm
        bg-[var(--cardBg)]
        text-[var(--text)]
        placeholder:text-[var(--mutedText)]
        border-[var(--cardBorder)]
        focus:outline-none
        focus:ring-2 focus:ring-[var(--primary)]
      "
    />
  );
}
