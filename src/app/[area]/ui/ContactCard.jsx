export function ContactCard({ children }) {
  return (
    <div
      className="
        rounded-xl border p-6 md:p-8 shadow-sm
        bg-[var(--cardBg)]
        border-[var(--cardBorder)]
      "
    >
      {children}
    </div>
  );
}
