# Hanyi Seok · Research Portfolio

개인 연구·프로젝트·학력과 CV를 소개하는 홈페이지입니다.

- **홈페이지:** https://hanyiseok.github.io/
- **원본 저장소:** https://github.com/hanyiseok/hanyiseok.github.io
- **구성:** React, TypeScript, Vite, Tailwind CSS
- **공개 방식:** `main`에 Push하면 GitHub Actions가 사이트를 빌드하고 GitHub Pages에 배포합니다.

이 문서는 홈페이지를 수정하는 본인을 위한 메모입니다. 공개 GitHub 저장소에서는 읽을 수 있지만, 현재 설정에서는 홈페이지의 메뉴나 별도 안내 페이지로 게시되지 않습니다.

## 어디를 수정하나요?

| 바꾸려는 내용 | 파일 또는 위치 |
| --- | --- |
| 소개 글, 연구 경험, 프로젝트, 학력, 기술 | `src/App.tsx` |
| CV·성적표·연구 자료 | `public/files/` |
| 프로필 사진·연구 이미지 | `public/images/` |
| 홈페이지 전체 스타일·폰트 | `src/index.css` |
| 브라우저 탭 아이콘 | `public/favicon.svg` |
| 브라우저 탭 제목·Google Analytics 설정 | `index.html` |
| 자동 빌드·배포 절차 | `.github/workflows/deploy.yml` |

`src/App.tsx` 안에서 `researchItems`, `projects`, `presentations`, `honors`, `technicalSkills`를 검색하면 관련 목록을 찾을 수 있습니다. 파일 주소는 `assetPaths`에 모여 있고, 소개 문구 일부는 아래쪽 화면 구성 코드에 있습니다.

### CV와 첨부 자료 교체

같은 이름으로 파일을 교체하면 기존 링크를 유지할 수 있습니다. 예를 들어 CV는 `public/files/Hanyi_Seok_CV.pdf`, 프로필 사진은 `public/images/profile-square.jpg`입니다.

파일 이름을 바꿀 때는 `src/App.tsx`의 해당 `assetPaths` 값도 함께 바꿉니다. `public/files/example.pdf`의 홈페이지 주소는 `/files/example.pdf`이며, 주소에 `public`을 넣지 않습니다.

## PC에서 수정하고 확인하기

GitHub Desktop에서 `hanyiseok.github.io` 저장소를 선택한 뒤 **Repository → Show in Explorer**로 작업 폴더를 엽니다. 터미널 명령은 `package.json`이 있는 이 폴더에서 실행합니다. Node.js는 22.12 이상인 LTS 버전을 사용합니다.

처음 내려받았거나 의존성 파일이 바뀌었을 때 설치합니다.

```sh
npm ci
```

수정 중에는 아래 명령을 실행하고, 터미널에 표시되는 로컬 주소를 브라우저에서 엽니다. 종료는 터미널에서 `Ctrl+C`입니다.

```sh
npm run dev
```

공개하기 전에는 코드 검사와 배포용 빌드를 확인합니다.

```sh
npm run lint
npm run build
```

만들어진 배포용 결과를 PC에서 보고 싶으면 `npm run preview`를 실행합니다.

## 홈페이지에 반영하기

1. GitHub Desktop에서 **Fetch origin**을 눌러 원격 변경을 확인합니다. **Pull origin**이 나타나면 작업 시작 전에 받아옵니다.
2. 파일을 수정하고 로컬 미리보기와 위의 검사를 확인합니다.
3. **Changes**에서 이번에 반영할 파일을 확인합니다.
4. 변경 내용을 설명하는 Summary를 적고 **Commit to main**을 누릅니다. 예: `Update CV and research experience`.
5. **Push origin**을 눌러 GitHub로 보냅니다.
6. [Actions](https://github.com/hanyiseok/hanyiseok.github.io/actions)에서 **Deploy static content to Pages**의 최신 실행이 성공했는지 확인한 뒤 홈페이지를 새로고침합니다.

**저장**은 PC 파일을 바꾸고, **Commit**은 변경 이력을 기록하며, **Push**는 그 기록을 GitHub로 보냅니다. 홈페이지 갱신은 Push 이후 배포가 성공해야 완료됩니다.

### 반영되지 않거나 배포가 실패할 때

- Desktop에 **Push origin**이 남아 있는지 확인합니다.
- Actions에서 최신 실행을 열어 실패한 단계의 오류를 확인합니다. PC에서 `npm run build`를 실행하면 빌드 오류를 먼저 확인할 수 있습니다.
- 배포가 성공했는데 이전 화면이나 아이콘이 보이면 강력 새로고침(`Ctrl+Shift+R`) 또는 새 비공개 창에서 확인합니다. 탭 아이콘은 브라우저에 더 오래 캐시될 수 있습니다.
- 파일 이름·대소문자와 링크가 일치하는지 확인합니다.

## 방문 통계와 이전 버전

Google Analytics 코드는 `index.html`에 있습니다. 방문 통계는 해당 홈페이지를 연결해둔 Google Analytics 계정에서 확인합니다.

이전 버전은 GitHub Desktop의 **History** 또는 [GitHub 커밋 기록](https://github.com/hanyiseok/hanyiseok.github.io/commits/main/)에서 확인합니다. `src` 안에 `App_old.tsx` 같은 백업을 추가하면 사용하지 않아도 TypeScript 검사에 포함됩니다. 변경 이력을 활용하고, 아직 기록하지 않은 별도 백업이 필요하면 작업 소스 밖에 보관합니다.

`node_modules/`는 설치된 라이브러리, `dist/`는 자동으로 만들어지는 배포 결과입니다. 직접 편집하거나 GitHub에 올릴 필요가 없으며, 둘 다 `.gitignore`로 제외되어 있습니다. 라이브러리를 추가하거나 제거할 때는 `package.json`과 `package-lock.json`을 함께 커밋합니다.
