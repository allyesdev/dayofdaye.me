import { MeWrap } from "./me";

export const MeInfo = () => {
  return (
    <MeWrap
      wrapStyle={{
        flexDirection: "column",
        gap: "100px",
      }}
    >
      <div className="w-[80vmin] sm:w-[60vmin] break-keep text-center">
        <span>
          사용자와 맞닿아 있는 <span className="text-5xl">프론트엔드</span>
          개발을 좋아합니다.&nbsp;
        </span>
        <span>
          효율적인 코드의 구조와 재사용성 좋은 코드를 만들기 위해
          노력합니다.&nbsp;
        </span>
        <span>어플리케이션 빌드/배포에도 관심이 많습니다.</span>
      </div>
      <div className="flex py-20 px-7 gap-10 flex-col md:items-center lg:flex-row">
        <h2>INFORMATION</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end">
            <span className="font-light">이름</span>
            <span className="text-2xl font-light">김다예</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end">
            <span className="font-light">email</span>
            <span className="text-2xl font-light">kdy24610@gmail.com</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end">
            <span className="font-light">학력</span>
            <span className="text-2xl font-light">숙명여자대학교</span>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 md:items-center lg:flex-row lg:items-end">
            <span className="font-light">Linked In</span>
            <a
              href="https://www.linkedin.com/in/daye-kim-577976192/"
              target="_blank"
              className="text-2xl font-light underline underline-offset-1"
            >
              MY PROFILE
            </a>
          </div>
        </div>
      </div>
    </MeWrap>
  );
};
