import DarkModeToggle from "@/components/darkmode-toggle";
import { HomeIcon, BotIcon, GlobeIcon } from "./icons";
import Link from "next/link";
import { useScrollHook } from "@/hooks/use-scroll-hook";
import cn from "classnames";

export const GNB = () => {
  const { scrollData } = useScrollHook();

  return (
    <div className={cn("sticky top-2 bg-transparent pl-6 pr-4")}>
      <nav
        className={cn(
          "flex flex-row items-center justify-between py-4 px-6 gap-4 rounded-2xl bg-background h-16",
          !scrollData.isAtTop && "shadow-md"
        )}
      >
        <div className="text-lg">
          {!scrollData.isAtTop && <span>개발자 김다예</span>}
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="tooltip tooltip-bottom" data-tip="Home">
            <Link href="/">
              <HomeIcon size={20} />
            </Link>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Chat">
            <Link href="/chat">
              <BotIcon size={20} />
            </Link>
          </div>
          <div className="divider divider-horizontal m-0"></div>
          <div className="flex h-5 tooltip tooltip-bottom" data-tip="Language">
            <button>
              <GlobeIcon size={20} />
            </button>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};
