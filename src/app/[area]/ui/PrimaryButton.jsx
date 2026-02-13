export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="
        w-full rounded-md
        px-4 py-3 text-sm font-semibold
        bg-[var(--primary)]
        text-[var(--heading)]
        transition-all
        hover:bg-[color:var(--btnPrimaryHover)]
        focus:outline-none cursor-pointer
        focus:ring-2 focus:ring-[var(--primary)]
      "
    >
      {children}
    </button>
  );
}
