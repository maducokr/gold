const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 서빙 설정
app.use(express.static(__dirname));

// 메인 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 헬스 체크 엔드포인트 (Render용)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Golden Coin Game is running!' });
});

// 404 핸들러
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Golden Coin Game 서버가 포트 ${PORT}에서 실행 중입니다!`);
  console.log(`🌐 http://localhost:${PORT}`);
});

module.exports = app; 