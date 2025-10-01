import clsx from "clsx";

export default function HamburgerButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      className="relative z-100 h-8 w-8 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={clsx(
          "absolute top-1/2 left-1/2 block h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 transform transform-gpu bg-black transition duration-300 ease-in-out will-change-transform",
          isOpen ? "rotate-20" : "-translate-y-1.75",
        )}
      ></span>
      <span
        className={clsx(
          "absolute top-1/2 left-1/2 block h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 transform transform-gpu bg-black transition duration-300 ease-in-out will-change-transform",
          isOpen ? "-rotate-20" : "translate-y-1.75",
        )}
      ></span>
    </button>
  );
}
