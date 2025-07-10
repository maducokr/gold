# 🪙 골든 코인 투하 게임

골든 코인을 비행접시에 투하하는 재미있는 HTML5 게임입니다.

## 🎮 게임 설명

- 비행접시가 화면에서 랜덤하게 이동합니다
- "Drop Coins" 버튼을 클릭하면 금괴가 떨어집니다
- 비행접시를 클릭하면 새로운 페이지가 열립니다
- 점수와 코인 개수가 실시간으로 표시됩니다

## 🚀 로컬 실행 방법

### 필수 요구사항
- Node.js 14.0.0 이상

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 모드로 실행 (자동 재시작)
npm run dev

# 프로덕션 모드로 실행
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

## 🌐 Render 배포 방법

### 1. GitHub에 코드 푸시
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/golden-coin-game.git
git push -u origin main
```

### 2. Render에서 배포
1. [Render.com](https://render.com)에 로그인
2. "New +" → "Web Service" 클릭
3. GitHub 저장소 연결
4. 다음 설정으로 구성:
   - **Name**: golden-coin-game
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 3. 환경 변수 설정 (선택사항)
- `PORT`: 서버 포트 (기본값: 3000)

## 📁 프로젝트 구조

```
golden-coin-game/
├── index.html          # 메인 게임 파일
├── server.js           # Express 서버
├── package.json        # 프로젝트 설정
├── .gitignore          # Git 제외 파일
├── README.md           # 프로젝트 설명
├── coin1.png           # 게임 이미지
├── coin2.png           # 게임 이미지
├── dish.png            # 비행접시 이미지
├── dish1.jpg           # 게임 이미지
├── dish3_30.png        # 게임 이미지
├── gold.png            # 배경 이미지
├── token.png           # 게임 이미지
└── 금괴.png            # 금괴 이미지
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **배포**: Render

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요. 