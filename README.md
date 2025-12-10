좋아! 그럼 **README를 영어 + 한국어 2개 버전으로 같이 포함한 형태**로 깔끔하게 정리해서 만들어줄게.
VS Code Marketplace나 GitHub에 올리기 좋은 포맷으로 구성했어.

---

# 📘 BOJ Helper

Automatically converts Java class name to `Main` and copies the full code to clipboard for BOJ submissions.

BOJ(Java) 문제 제출 시 반복되는 작업을 자동화해주는 VS Code 확장입니다.

---

## 🇺🇸 English Description

### Features

* Detects `public class Something`
* Replaces it with `public class Main`
* Copies the entire file content to the clipboard
* Optional editor title button for quick access

Perfect for BOJ Java submissions where the main class name **must** be `Main`.

### Command

* **Copy BOJ Code**

You can trigger this command from:

* Command Palette
* Editor Title Button (if enabled)

---

## 🇰🇷 한국어 설명

### 주요 기능

* `public class Something` 패턴을 자동으로 찾아
* `public class Main` 으로 변경하고
* 파일의 전체 내용을 클립보드에 복사합니다
* 에디터 상단 버튼으로 편하게 실행할 수도 있습니다

Java로 BOJ 문제를 풀 때 클래스명을 `Main`으로 바꾸는 반복 작업을 완전히 자동화합니다.

### 명령어

* **Copy BOJ Code**

실행 방법:

* VS Code 명령 팔레트
* 에디터 오른쪽 상단 버튼(설정 시 표시)

---

## 📦 Why BOJ Helper?

BOJ(Java) 제출은 매번:

```
class 이름 변경 → 전체 선택 → 복사 → 제출
```

이라는 귀찮은 반복 작업이 필요합니다.

BOJ Helper는 이 과정을 **한 번 클릭**으로 끝냅니다.

---

## 🔧 Requirements

* Visual Studio Code 1.90+
* Java 파일(.java)

---

## 🚀 Usage

1. Java 파일을 엽니다
2. 명령 팔레트에서 **Copy BOJ Code** 실행
3. 또는 에디터 제목 부분의 버튼 클릭
4. BOJ 제출창에 바로 붙여넣기

---

## 📄 License

MIT License

