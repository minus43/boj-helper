# 📘 BOJ Java Helper

BOJ(백준)에서 Java로 문제를 제출할 때 필요한 반복 작업을 자동화해주는 VS Code 확장입니다.  
[vscode 마켓플레이스 주소](https://marketplace.visualstudio.com/items?itemName=minus43.boj-class-to-main)


- `public class Main`으로 자동 변환 + 복사
- BOJ 문제 URL을 입력하면 **자동으로 `BojXXXX.java` 파일 생성**

BOJ 문제 풀이 흐름을 끊지 않고 즉시 작업할 수 있도록 도와줍니다.

---

## ✨ 주요 기능

### 🔹 1. BOJ 제출용 코드 자동 변환 & 복사

- `public class Something` → `public class Main`
- 파일 전체 내용을 자동으로 클립보드에 복사
- 에디터 상단 버튼 또는 명령 팔레트로 바로 실행

### 🔹 2. BOJ 문제 파일 자동 생성

- BOJ 문제 URL 입력 → 자동으로 문제 번호 추출
  예: `https://www.acmicpc.net/problem/29863` → `Boj29863.java`
- 원하는 생성 경로 입력 가능 (예: `src/boj`)
- 폴더가 없으면 자동 생성
- 생성 후 파일 자동 오픈

문제 풀이를 위한 기본 템플릿까지 포함되어 있어
**URL 입력 → 바로 코딩 시작** 흐름을 만들 수 있습니다.

---

## 🚀 사용 방법(상단에 버튼도 있어요!)

### 📄 코드 복사 (Copy BOJ Code)

1. Java 파일을 엽니다
2. 명령 팔레트에서 **Copy BOJ Code** 실행
3. 또는 에디터 오른쪽 상단의 버튼 클릭
4. 변환된 코드가 자동으로 클립보드에 복사됩니다

### ⭐ 파일 생성 (Create BOJ Java File)

1. 명령 팔레트에서 **Create BOJ Java File** 실행
2. BOJ 문제 URL 입력
3. 파일 생성 경로 입력 (`src/boj`처럼 상대경로 가능)
4. `BojXXXX.java`가 자동 생성되고 편집기가 파일을 엽니다

---

## 🧩 명령어

| 명령어                   | 설명                                           |
| ------------------------ | ---------------------------------------------- |
| **Copy BOJ Code**        | 클래스명 `Main`으로 자동 변경 + 전체 코드 복사 |
| **Create BOJ Java File** | URL 기반 Java 파일 자동 생성                   |

에디터 상단 버튼에서도 동일 기능을 사용할 수 있습니다.

---

## 📦 왜 필요한가?

BOJ(Java) 제출은 매우 반복적입니다  
~~그리고 저장할 파일이름 만드는것도 귀찮습니다.~~

```
문제 번호에 맞는 Java 파일 생성 → 템플릿 작성 → 코딩 시작
클래스명 바꾸기 → 전체 선택 → 복사 → 제출
```

이 확장은 이러한 반복을 줄여서 **문제 풀이 자체에 집중**하도록 돕습니다.

---

## 🔧 요구 사항

- Visual Studio Code 1.90+
- Java 파일(.java)
- BOJ 문제 URL (파일 생성 기능 사용 시)

---

## 📄 License

MIT License
