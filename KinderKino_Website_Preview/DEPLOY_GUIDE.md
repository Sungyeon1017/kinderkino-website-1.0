# Vercel 배포 가이드

## 1) 이 폴더가 저장소 루트인 경우
1. Vercel에서 `New Project`로 GitHub 저장소 연결
2. `Framework Preset`은 `Other`
3. `Build Command` 비우기
4. `Output Directory` 비우기
5. Deploy

## 2) 이 폴더가 저장소 하위 폴더인 경우
예: 저장소 구조가 `repo-root/KinderKino_Website_Preview/index.html`

1. Vercel Project Settings > General > Root Directory
2. Root Directory를 `KinderKino_Website_Preview`로 설정
3. 저장 후 Redeploy

## 3) 404가 계속 뜨는 경우 체크리스트
1. 최신 배포 URL로 접속했는지 확인
2. Root Directory가 올바른지 재확인
3. `vercel.json`이 Root Directory 기준으로 존재하는지 확인
4. 배포 로그에서 `index.html` 인식 여부 확인
