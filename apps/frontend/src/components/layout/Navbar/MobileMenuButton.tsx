import { Menu } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function MobileMenuButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-slate-700 p-2 text-slate-200 lg:hidden"
      aria-label="Open menu"
    >
      <Menu size={22} />
    </button>
  );
}