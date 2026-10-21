# 윤성용 개발자 포트폴리오

React + TypeScript + Vite 기반의 **프론트엔드 전용** 포트폴리오입니다. DB 또는 백엔드 없이 Vercel로 배포할 수 있습니다.

## 실행

```bash
npm install
npm run dev
```

## 배포 전 수정할 항목

1. **프로필 사진**: `public/profile.jpg` 파일을 추가하고 `src/main.tsx`의 `portrait-placeholder` 영역을 `<img src="/profile.jpg" alt="윤성용 프로필" />` 등의 형태로 교체하세요.
2. **GitHub와 영상**: `src/projects.ts`의 각 프로젝트에 `github: 'https://github.com/...'` 및 `youtubeId: '영상ID'`를 추가하세요. 영상 ID는 YouTube URL의 `v=` 뒤에 있는 값입니다.
3. **프로젝트 정보 확인**: 역할·기능 및 문제 해결 경험은 초안이며, 실제 증빙 가능한 수준으로 수정하세요. 특히 TripKorea는 확인된 정보가 부족해 명시적인 작성용 문구가 들어 있습니다.
4. **연락처**: `src/main.tsx`의 `contact-placeholder`를 실제 이메일 및 GitHub 링크로 바꾸세요.
5. **아키텍처/스크린샷**: 각 상세 화면의 `assets-placeholder`를 실제 이미지로 교체하세요.
6. **기술 스택**: 스스로 설명 가능한 기술만 남기세요.

## Vercel 배포

- GitHub에 이 폴더를 저장한 뒤 Vercel에서 **Add New → Project**로 가져옵니다.
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- `vercel.json`에 React Router용 rewrite가 포함되어 있습니다.

## 페이지 구조

- `/`: 자기소개, 프로젝트 미리보기, 기술 스택, 연락처
- `/projects`: 전체 프로젝트 카드
- `/projects/:slug`: 유튜브 시연 영상, 담당 업무, 문제 해결 경험, 기술 스택 등 상세 소개

## 디자인

네이비 × 라임 컬러, PC 및 모바일 반응형 레이아웃입니다. Doro-SEE 로고는 제공된 원본 이미지를 바탕으로 생성된 파일을 포함하였습니다.
