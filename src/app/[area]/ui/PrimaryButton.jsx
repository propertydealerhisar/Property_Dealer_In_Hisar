export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="
        w-full rounded-md
        bg-gray-900 px-4 py-3
        text-sm font-semibold text-white
        transition-all
        hover:bg-gray-800
        focus:outline-none focus:ring-2 focus:ring-gray-400
      "
    >
      {children}
    </button>
  )
}