import { MeMain, MeWrap } from "@/components/me";

export default function Home() {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <MeMain />
        <MeWrap wrapStyle={{ backgroundColor: "skyblue" }} />
        <MeWrap wrapStyle={{ backgroundColor: "pink" }} />
      </div>
    </div>
  );
}
