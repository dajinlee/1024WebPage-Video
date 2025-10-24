# Vercel 배포 가이드 (Git LFS 지원)

이 프로젝트를 Vercel에 배포하는 방법을 안내합니다.

## 🚀 Vercel 배포 방법

### 1. Vercel 웹사이트에서 직접 배포 (추천)

1. **Vercel 웹사이트 접속**: https://vercel.com
2. **GitHub 계정으로 로그인**
3. **"New Project" 클릭**
4. **GitHub 저장소 선택**: `dajinlee/1024WebPage-Video`
5. **자동 설정 확인**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 2. Vercel CLI 사용

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리에서 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 3. GitHub Actions 사용

현재 설정된 워크플로우가 자동으로 Vercel에 배포합니다.

## 📋 필요한 환경 변수

GitHub Actions를 사용하는 경우 다음 환경 변수를 설정해야 합니다:

1. **GitHub 저장소 → Settings → Secrets and variables → Actions**
2. **다음 시크릿 추가**:
   - `VERCEL_TOKEN`: Vercel 계정 토큰
   - `VERCEL_ORG_ID`: Vercel 조직 ID
   - `VERCEL_PROJECT_ID`: Vercel 프로젝트 ID

### 환경 변수 얻는 방법:

1. **VERCEL_TOKEN**:
   - Vercel → Settings → Tokens → Create Token

2. **VERCEL_ORG_ID**:
   - Vercel → Settings → General → Organization ID

3. **VERCEL_PROJECT_ID**:
   - Vercel → 프로젝트 → Settings → General → Project ID

## 🎥 Git LFS 동영상 파일

이 프로젝트는 Git LFS로 관리되는 대용량 동영상 파일을 포함합니다:

- **파일**: `public/videos/Oulim_video.mp4` (287MB)
- **관리**: Git LFS로 추적
- **배포**: Vercel에서 자동 처리

## ⚠️ 주의사항

1. **Git LFS 파일**: Vercel은 Git LFS 파일을 지원하지만, 빌드 시에만 다운로드됩니다.
2. **파일 크기**: 대용량 파일은 CDN을 통해 최적화되어 제공됩니다.
3. **빌드 시간**: Git LFS 파일이 있는 경우 빌드 시간이 더 오래 걸릴 수 있습니다.

## 🌐 배포 후 확인

배포가 완료되면 Vercel에서 제공하는 URL에서 웹사이트를 확인할 수 있습니다:

- **예시 URL**: `https://your-project-name.vercel.app`
- **자동 HTTPS**: 모든 배포는 자동으로 HTTPS가 적용됩니다.

## 🔧 문제 해결

### Git LFS 파일이 로드되지 않는 경우:

1. **Vercel 대시보드에서 빌드 로그 확인**
2. **Git LFS 파일이 제대로 다운로드되었는지 확인**
3. **파일 경로가 올바른지 확인**

### 빌드 실패 시:

1. **의존성 설치 문제**: `package.json` 확인
2. **빌드 명령어 문제**: Vite 설정 확인
3. **환경 변수 문제**: 필요한 환경 변수 설정 확인

## 📊 성능 최적화

Vercel은 자동으로 다음 최적화를 제공합니다:

- ✅ **CDN**: 전 세계 어디서나 빠른 로딩
- ✅ **자동 압축**: 정적 파일 자동 압축
- ✅ **이미지 최적화**: 이미지 자동 최적화
- ✅ **캐싱**: 적극적인 캐싱으로 빠른 응답

## 🎯 권장사항

1. **Vercel 웹사이트에서 직접 배포** (가장 간단)
2. **Git LFS 파일 사용** (대용량 파일 관리)
3. **자동 배포 설정** (main 브랜치 푸시 시 자동 배포)
4. **커스텀 도메인 설정** (선택사항)
