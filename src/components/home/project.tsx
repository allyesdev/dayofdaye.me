import Image from "next/image";
import { MeWrap } from "./me";

export const MeProject = () => {
  return (
    <MeWrap
      wrapStyle={{
        backgroundColor: "hsl(var(--primary-background))",
        flexDirection: "column",
      }}
    >
      <div className="flex flex-col items-center justify-center py-20 gap-10">
        <h2>PROJECTS</h2>
        <div className="w-[80vmin]">
          <details className="collapse collapse-plus rounded-2xl p-3 bg-background">
            <summary className="collapse-title text-xl font-medium">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3>세무 채팅 AI 서비스</h3>
                  <div className="text-sm font-normal">
                    세법을 학습한 LLM으로 자문, 보고서 생성 서비스를 제공합니다.
                  </div>
                  <div className="text-sm font-light">2024.09 - 2024.12</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-base font-normal">What I did</div>
                  <div className="text-base font-normal flex flex-col gap-1">
                    채팅 서비스 - 백엔드 API 및 화면 구현
                    <ol className="text-sm font-light list-disc list-inside ps-2">
                      <li>
                        채팅 보내기 (SSE기반 스트리밍되도록 구현, 채팅 agent는
                        모델러가 구현)
                      </li>
                      <li>다시 보내기/재생성 (트리구조로 구현)</li>
                      <li>피드백, 내용 복사하기, 채팅 비교 다이얼로그</li>
                      <li>참조문서 보여주기, 채팅 과정 보이기</li>
                    </ol>
                  </div>
                  <div className="text-base font-normal flex flex-col gap-1">
                    보고서 생성 서비스
                    <ol className="text-sm font-light list-disc list-inside ps-2">
                      <li>채팅 기반 하이라이팅 기능 구현</li>
                      <li>보고서 생성 (스트리밍 구현)</li>
                      <li>문단 재생성, 선택 부분 재생성 기능 구현</li>
                      <li>문단 추가, 삭제, 문단 순서 변경 기능 구현</li>
                    </ol>
                  </div>
                </div>
              </div>
            </summary>
            <div className="collapse-content flex flex-col gap-3">
              <Image
                src={`/images/project-tax-01.png`}
                alt="tax-project"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="text-base font-normal flex flex-col gap-1">
                <div className="text-base font-normal">사용한 기술</div>
                <div className="flex justify-between">
                  <div className="flex flex-col flex-auto">
                    <span className="text-sm font-normal">프론트엔드</span>
                    <ol className="text-sm font-light list-disc list-inside ps-2">
                      <li>React</li>
                      <li>Typescript</li>
                      <li>Tanstack Query</li>
                      <li>Jotai</li>
                      <li>SCSS</li>
                      <li>Material UI</li>
                    </ol>
                  </div>
                  <div className="flex flex-col flex-auto">
                    <span className="text-sm font-normal">백엔드</span>
                    <ol className="text-sm font-light list-disc list-inside ps-2">
                      <li>FAST API</li>
                      <li>Python</li>
                      <li>MYSQL</li>
                      <li>Redis</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </MeWrap>
  );
};
