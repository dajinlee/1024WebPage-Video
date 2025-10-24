# 배포 가이드

이 프로젝트는 여러 플랫폼에 배포할 수 있도록 GitHub Actions 워크플로우가 설정되어 있습니다.

## 🚀 사용 가능한 배포 옵션

### 1. GitHub Pages (무료)
- **장점**: 완전 무료, GitHub과 완벽 통합
- **단점**: 정적 사이트만 지원
- **설정**: 자동으로 활성화됨

#### 설정 방법:
1. GitHub 저장소에서 Settings → Pages 이동
2. Source를 "GitHub Actions"로 설정
3. main 브랜치에 푸시하면 자동 배포

### 2. Vercel (무료)
- **장점**: 빠른 배포, 자동 HTTPS, CDN
- **단점**: 무료 플랜에 제한 있음
- **설정**: 환경 변수 필요

#### 설정 방법:
1. Vercel 계정 생성 및 프로젝트 연결
2. GitHub Secrets에 다음 추가:
   - `VERCEL_TOKEN`: Vercel 계정 토큰
   - `ORG_ID`: Vercel 조직 ID
   - `PROJECT_ID`: Vercel 프로젝트 ID

### 3. Netlify (무료)
- **장점**: 쉬운 설정, 폼 처리 기능
- **단점**: 무료 플랜에 제한 있음
- **설정**: 환경 변수 필요

#### 설정 방법:
1. Netlify 계정 생성
2. GitHub Secrets에 다음 추가:
   - `NETLIFY_AUTH_TOKEN`: Netlify 인증 토큰
   - `NETLIFY_SITE_ID`: Netlify 사이트 ID

### 4. Firebase Hosting (무료)
- **장점**: Google 인프라, 빠른 성능
- **단점**: 설정이 복잡할 수 있음
- **설정**: 환경 변수 필요

#### 설정 방법:
1. Firebase 프로젝트 생성
2. GitHub Secrets에 다음 추가:
   - `FIREBASE_SERVICE_ACCOUNT`: Firebase 서비스 계정 JSON
   - `FIREBASE_PROJECT_ID`: Firebase 프로젝트 ID

## 🔧 환경 변수 설정

GitHub Secrets에 환경 변수를 추가하는 방법:

1. GitHub 저장소 → Settings → Secrets and variables → Actions
2. "New repository secret" 클릭
3. 필요한 환경 변수 추가

## 📝 배포 워크플로우 사용법

### 특정 플랫폼만 사용하려면:
1. `.github/workflows/` 폴더에서 사용하지 않을 워크플로우 파일 삭제
2. 원하는 플랫폼의 워크플로우만 유지

### 모든 플랫폼 동시 배포:
- 모든 워크플로우 파일을 유지하고 환경 변수만 설정하면 됩니다.

## 🎯 권장사항

**초보자**: GitHub Pages 사용 (설정 불필요)
**개발자**: Vercel 사용 (가장 간단하고 빠름)
**기업용**: Firebase Hosting 또는 Netlify 사용

## 🔍 배포 상태 확인

배포 상태는 GitHub Actions 탭에서 확인할 수 있습니다:
- 성공: ✅ 녹색 체크마크
- 실패: ❌ 빨간색 X마크
- 진행 중: 🟡 노란색 원

## 🛠️ 문제 해결

### 빌드 실패 시:
1. `package.json`의 의존성 확인
2. 환경 변수 설정 확인
3. GitHub Actions 로그 확인

### 배포 실패 시:
1. 환경 변수 올바른지 확인
2. 플랫폼별 설정 가이드 확인
3. GitHub Actions 로그에서 오류 메시지 확인
