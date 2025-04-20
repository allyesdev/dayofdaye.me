import { usePathname } from "next/navigation";
import Link from "next/link";
import { GlobeIcon } from "./icons";

export const LanguageSelector = () => {
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/[a-z]{2}/, "");

  return (
    <>
      <div className="flex h-5 tooltip tooltip-bottom" data-tip="Language">
        <button
          className="text-base-500 dark:text-white"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } as React.CSSProperties}
        >
          <GlobeIcon size={20} />
        </button>
      </div>
      <ul
        className="dropdown dropdown-end menu w-36 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" } as React.CSSProperties}
      >
        <li>
          <Link href={`/en${currentPath}`}>English</Link>
        </li>
        <li>
          <Link href={`/ko${currentPath}`}>한국어</Link>
        </li>
      </ul>
    </>
  );
};

export default LanguageSelector;
