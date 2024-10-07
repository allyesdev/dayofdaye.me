# My Portfolio

- [My Portfolio](#my-portfolio)
  - [개요](#개요)
  - [초기 세팅 및 실행](#초기-세팅-및-실행)
    - [로컬](#로컬)
    - [서버 배포](#서버-배포)
    - [동적 config](#동적-config)
    - [다국어](#다국어)

## 개요

- my portfolio
- 프로젝트 경험, 라이브 데모의 시연을 위한 프로젝트

## 초기 세팅 및 실행

### 로컬

```sh
# pnpm 설치 가정
pnpm install
pnpm dev
```

### 서버 배포

도커 이미지로 배포

```sh
docker build -f Dockerfile.template -t {docker_registry_name}/{docker_repository_name}:{tag} .
docker push {docker_registry_name}/{docker_repository_name}:{tag}
```

### 동적 config

- .env를 사용하면 env 값이 바뀌는 경우 매번 프론드엔드 빌드를 다시해야하는 고충이 있어
  k8s/docker의 env 변경 후 container restart하여 환경변수값 변경할 수 있도록 구성함

- custom-config.json 환경변수 필요시 아래 위치 json에 값 추가 **필요**
  - public/custom-config.json
    - 로컬 개발시 필요한 변수 추가
  - deploy-config/custom-config.json.template
    - docker build시 필요한 변수 VARIABLE: "$VARIABLE" 형태로 추가

### 다국어

- modules/i18n 하위에서 작업
- namespace는 common을 default로 사용
