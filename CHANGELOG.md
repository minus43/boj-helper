# Changelog
이 프로젝트는 [Semantic Versioning](https://semver.org/)을 따릅니다.

---

## [0.2.0] - 2025-12-12
### Added
- **Create BOJ Java File 기능 추가**
  - BOJ 문제 URL 입력 → `BojXXXX.java` 자동 생성
  - 생성 경로 입력 가능 (상대경로 지원)
  - 폴더가 존재하지 않으면 자동 생성
  - 기본 템플릿 포함
- 에디터 상단에 “파일 생성” 버튼 추가
- 커스텀 아이콘 지원 (라이트/다크 테마용)
- README 한국어 버전 정식 반영

### Changed
- 전체 코드 구조 정리 및 명령 분리
- 파일 생성 로직 모듈화

### Fixed
- 태그 충돌 문제 해결 과정 문서화
- 일부 환경에서 발생하던 publish 관련 오류 수정

---

## [0.1.0] - 2025-12-11
### Added
- **Copy BOJ Code 기능 추가**
  - Java 파일에서 `public class Something` → `public class Main` 자동 변환
  - 변환된 전체 코드 클립보드에 복사
- 에디터 상단 버튼 추가
- 라이트/다크 SVG 아이콘 추가

### Improved
- 클래스명 탐지 안정성 개선
- 기본 로직 리팩토링

---

## [0.0.1] - 2025-12-10
### Initial Release
- 프로젝트 구조 생성 (TypeScript 기반 VS Code 확장)
- 기본 명령 팔레트 등록
