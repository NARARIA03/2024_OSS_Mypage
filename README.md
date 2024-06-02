# 24년 1학기 오픈소스소프트웨어 개인프로젝트

## 프로필

`광운대학교 정보융합학부 2022204045 최현성`

## 사용 오픈소스

- axios : https://github.com/axios/axios
- FastAPI: https://github.com/tiangolo/fastapi
- uvicorn: https://github.com/encode/uvicorn
- NginX: https://github.com/nginx/nginx
- Docker: https://github.com/docker

## 배포 주소

Frontend: http://44.220.221.72:9000

Backend: http://44.220.221.72:9001

## 참고한 게시물

CSS 기본값 세팅: https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0

사용한 이미지 1: https://www.pexels.com/ko-kr/photo/c-574069/

사용한 비디오 1: https://www.pexels.com/ko-kr/video/5495781/

기술 스택 svg 파일 모음: https://blog.naver.com/powersub1101/223193374749

docker buildx 관련 정보: https://blog.taehun.dev/docker-buildx-

---

## 결과물 간단한 소개

![introduction](/readme_image/introduction.png)
처음 웹사이트에 들어오면 나오는 페이지 입니다.

- 상단바의 타이틀(HS Dev)을 누르면 이 위치로 돌아옵니다.
- About, Features, Portfolio, Contact를 누르면 각각의 위치로 스크롤됩니다.
- 상단바의 모든 텍스트(a태그)들은 마우스를 가져다 대면 크기가 살짝 커집니다.
- 배경 동영상이 깔려있고, `print('hello world')`와 `console.log("hello world");`가 반복해서 작성되었다가 지워졌다 합니다. (관련 로직은 `custom.js`에 있습니다.)

---

| ![about1](/readme_image/about1.png) | ![about2](/readme_image/about2.png) |
| ----------------------------------- | ----------------------------------- |

사진과 간단한 자기소개가 작성되어 있습니다.

- github 링크, instargram 링크를 아이콘에 걸어뒀습니다.
- 각 아이콘들에 마우스를 가져다 대면 크기가 살짝 커집니다.

---

| ![features1](/readme_image/features1.png) | ![features2](/readme_image/features2.png) | ![features3](/readme_image/features3.png) |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |

grid 레이아웃을 활용해 기술 스택들을 정리해봤습니다.

- 각 기술스택에 마우스를 가져다 대면 해당하는 색상으로 변경되며 크기가 살짝 커집니다.

---

![fixed_img](/readme_image/fixed_img.png)
스크롤을 내려도, 이미지는 고정되어 있는 영역입니다.
디자인을 위해 넣어봤습니다.

---

| ![portfolio1](/readme_image/portfolio1.png) | ![portfolio2](/readme_image/portfolio2.png) |
| ------------------------------------------- | ------------------------------------------- |

지금까지 개발했던 프로젝트들을 간단하게 정리해서 배치해봤습니다.
`문서`, `github링크`, `앱 다운로드 링크`, `배포 웹 링크` 등을 아이콘으로 함께 걸어뒀습니다.

- 아래 방향 화살표 아이콘을 클릭하면 상세 내용이 펼쳐지고, 다시 클릭하면 접힙니다.
- 각 아이콘들은 마우스를 가져다 대면 살짝 커집니다.
- 각 프로젝트 블록들은 마우스를 가져다 대면 살짝 커집니다.

---

| ![contact1](/readme_image/contact1.png) | ![contact2](/readme_image/contact2.png) |
| --------------------------------------- | --------------------------------------- |

전화번호, 이메일, 학교 등을 좌측에 배치해뒀고 우측에는 방명록 작성 form을 만들었습니다.

form의 각 input 필드에 적절한 값을 입력하고 작성하기 버튼을 눌러 방명록 작성이 가능합니다.

- 이름, 제목, 메시지 중 하나라도 작성되어있지 않다면, `alert`로 안내하며 post를 수행하지 않습니다.
- 적절하게 작성된 상태라면, axios를 통해 FastAPI에 post 요청을 수행합니다.
- 작성하기 버튼에 마우스를 올려두면, 색상이 반전됩니다.

---

| ![guestbook1](/readme_image/guestbook1.png) | ![guestbook2](/readme_image/guestbook2.png) |
| ------------------------------------------- | ------------------------------------------- |

위의 방명록 작성 form을 통해 방명록을 작성하면, form 아래에 방명록이 표시됩니다.

- 방명록 관련 전체 로직은 `guestbook.js`에 있습니다.
- 방명록에 마우스를 올리면 X 버튼이 나옵니다. 이를 클릭하면 FastAPI에 delete 요청을 수행합니다.
- 각 방명록의 id와 timestamp는 FE에서는 신경쓰지 않고 요청해도 BE에서 자동으로 추가해주도록 구현했습니다.
  - `Union type`을 사용
- timestamp는 AWS EC2가 `버지니아 북부`에 위치해 있다보니, BE에서 가져온 timestamp 값에 9시간을 더하는 로직을 FE에서 구현해 사용했습니다.

  ```js
  /**
   * @description timestamp로 담겨온 값을 포매팅 해서 반환하는 함수, 버지니아 북부 시간을 서울 시간으로 보정한다
   * @param {string} dateTime
   */
  const formatTimestamp = (dateTime) => {
    const date = new Date(dateTime);
    // 버지니아 북부 시간 + 9시간 -> 서울 시간
    date.setHours(date.getHours() + 9);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
  };
  ```

- **FastAPI가 종료되면, 모든 방명록은 초기화**됩니다.

---

| ![footer1](/readme_image/footer1.png) | ![footer2](/readme_image/footer2.png) |
| ------------------------------------- | ------------------------------------- |

footer에는 간단하게 소속과 주소 전화번호, 저작권 등을 명시해봤습니다.

- Policy는 아무런 기능이 구현되어있지 않은 a태그입니다. 클릭 시 최상단으로 이동합니다.
- Github는 제 깃허브 프로필로 이동합니다.
- Notion은 PS 기록 페이지로 연결해뒀습니다.

---
