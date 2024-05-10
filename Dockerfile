# 베이스 이미지 선택
FROM node:14

# 작업 디렉터리 설정
WORKDIR /usr/src/app

# 의존성 파일 복사
COPY package*.json ./

# npm 패키지 설치
RUN npm install

# 앱 소스 추가
COPY . .

# 앱 실행 포트 설정
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
