import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  theme = "transparent",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  theme?: "black" | "white" | "transparent";
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "font-medium",
        theme === "black" && "rounded bg-black px-4 py-3 text-white transition-colors duration-300 hover:text-[var(--hover-white)]",
        theme === "white" && "rounded bg-white px-4 py-3 text-black transition-colors duration-300 hover:text-[var(--hover-black)]",
        theme === "transparent" &&
          "transition-colors duration-300 hover:text-[var(--hover-black)]",
      )}
    >
      {children}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        className={clsx(
          "inline h-5 w-5 fill-current",
          external && "-rotate-45",
        )}
      >
        <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
      </svg>
    </Link>
  );
}
