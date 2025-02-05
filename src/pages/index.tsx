import { MeInfo } from "@/components/home/info";
import { MeMain } from "@/components/home/me";
import { MeProject } from "@/components/home/project";
const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <MeMain />
        <MeInfo />
        <MeProject />
      </div>
    </div>
  );
};

export default Home;
