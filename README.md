# Hanyi Seok — Research website

Live: https://hanyiseok.github.io/

2026년 11월 5일 확정한 9차 시안을 반영한 연구 홈페이지입니다. Home, Research, About, 연구 상세 6개, 수업 프로젝트 상세 3개를 각각 독립된 정적 HTML로 제공합니다. JavaScript 없이도 본문·메뉴·자료 링크를 이용할 수 있습니다.

## 수정할 파일

| 목적 | 파일 |
|---|---|
| 연구 제목·기간·방법, 보조 프로젝트 본문 | `src/content/projects.mjs` |
| Home·Research·About·HFMC·ARWW·NEU 본문 | `src/content/templates.html` |
| 공통 헤더·푸터 | `src/content/layout.html` |
| 페이지 주소·자료 파일 대응 | `src/content/routes.mjs` |
| 글자·여백·반응형 디자인 | `src/styles.css` |
| 공개할 PDF | `public/files/` |

반복되는 연구 제목·기간·방법은 `projects.mjs`가 최종 기준입니다. `scripts/refine-page.mjs`가 목록과 상세의 표기를 통일하고, `scripts/generate.mjs`가 실제 링크·아이콘·페이지 메타데이터를 생성합니다. `.generated/`와 `dist/`는 생성물이므로 직접 수정하거나 커밋하지 않습니다.

## 로컬 확인과 게시

Node 22.12 이상(또는 현재 LTS)을 사용합니다.

```sh
npm ci
npm run check
npm run preview
```

미리보기 주소는 터미널에 표시됩니다. 원고나 CSS를 고친 뒤에는 `npm run check`를 다시 실행하고 브라우저를 새로고침합니다. `npm run dev`도 사용할 수 있으며, 원고 변경 후에는 종료하고 다시 실행해 페이지를 재생성합니다.

GitHub Desktop의 기존 `hanyiseok.github.io-clone` 저장소에서 변경 내용을 검토하고 Commit → Push origin을 누르면 됩니다. `main`에 push할 때 GitHub Actions가 설치·빌드·테스트 후 `dist/`만 GitHub Pages에 배포합니다. Actions의 `Deploy static content to Pages`가 성공했는지 확인합니다. 별도의 새 저장소나 업로드용 폴더는 필요 없습니다.

## 문서 관리

`docs/pdf-sources.json`에 게시 PDF의 원본 파일명, SHA256, 페이지 수를 기록했습니다. 10월 31일 CV, HFMC·NTU 보고서, 포트폴리오 8개를 Word에서 PDF로 export하고 총 59페이지를 검수했습니다. Anyang Stream은 상세본, SAF는 Refined를 사용했습니다. Word 원본을 수정하지 않았습니다.

기존 성적표 2개와 FeEDDHA 자료를 공개 폴더에서 제거했습니다. 구형 보고서·발표자료·포스터·사진도 최신 구성에서 사용하지 않아 공개 폴더에서 정리했으며, 기존 소스와 자료는 작성자의 비공개 로컬 작업 폴더에 별도 보관했습니다. Git 과거 이력은 재작성하지 않았습니다. 최신 CV의 전체 발표 이력은 원본대로 유지합니다.

PDF를 교체할 때는 파일명과 링크를 함께 확인합니다. CV 주소는 `/files/Hanyi_Seok_CV.pdf`를 유지하고 보고서는 `*-report.pdf` 또는 `*-project-brief.pdf` 형식을 사용합니다. PDF의 버튼이 아니라 실제 `<a href>`로 연결되어 있습니다.

## 방문 분석

기존 GA4 `G-WJD6VVZCP8`을 유지합니다. 공개 도메인에서만 태그를 실행하므로 localhost 미리보기는 통계에 들어가지 않습니다. 별도 알림이나 세션 녹화는 없습니다.

GA4 확장 측정의 `page_view`와 `file_download`를 이용합니다. GA4 관리 화면에 `research_detail_view`, `cv_click`, `report_click` 파생 이벤트를 설정했으므로 같은 이벤트를 코드에서 추가 전송하지 않습니다. PDF 클릭은 문서의 실제 완독 여부를 의미하지 않습니다. GA4 수집은 브라우저 차단 설정의 영향을 받을 수 있습니다.

새 상세 경로는 `/research/{slug}/` 또는 `/projects/{slug}/`를 사용합니다. 각 경로에 실제 `index.html`, 고유 제목·설명·canonical이 있으며 `sitemap.xml`에도 포함합니다. 없는 페이지는 `404.html`로 안내합니다.

Geist 글꼴은 자체 호스팅하며 라이선스는 `public/fonts/OFL.txt`에 있습니다.
