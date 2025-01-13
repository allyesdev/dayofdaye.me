import Image from "next/image";

export const MeWrap = ({
  children,
  wrapClass,
  wrapStyle,
}: {
  children?: React.ReactNode;
  wrapClass?: string;
  wrapStyle?: React.CSSProperties;
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-[calc(100lvh-52px)] ${wrapClass}`}
      style={wrapStyle}
    >
      {children}
    </div>
  );
};

export const Avatar = () => {
  return (
    <Image
      src={`/images/me.png`}
      alt="me"
      width={0}
      height={0}
      sizes="50vw"
      style={{ width: "30vh", height: "auto" }}
    />
  );
};

export const MeMain = () => {
  return (
    <MeWrap>
      <Avatar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-center break-keep">
          프론트엔드 개발자
          <br />
          김다예
        </h1>
      </div>
    </MeWrap>
  );
};
