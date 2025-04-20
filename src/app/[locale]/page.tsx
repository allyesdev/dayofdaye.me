import { MeInfo } from "@/components/home/info";
import { MeMain } from "@/components/home/me";
import { MeProject } from "@/components/home/project";
import { MeSkill } from "@/components/home/skill";

const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <MeMain />
        <MeInfo />
        <MeProject />
        <MeSkill />
      </div>
    </div>
  );
};

export default Home;
