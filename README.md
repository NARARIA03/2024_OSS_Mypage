# 24년 1학기 오픈소스소프트웨어 개인프로젝트

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## 프로필

### 광운대학교 정보융합학부 2022204045 최현성

---

## 사용 오픈소스

- axios : https://github.com/axios/axios
- FastAPI: https://github.com/tiangolo/fastapi
- uvicorn: https://github.com/encode/uvicorn
- NginX: https://github.com/nginx/nginx
- Docker: https://github.com/docker

---

## 배포 주소

~~Frontend: http://44.220.221.72:9000~~

~~Backend: http://44.220.221.72:9001~~

> AWS Learner lab 환경 배포 -> 개인 Ubuntu server로 배포  
> Frontend는 NginX로 배포했고, Backend는 도커로 배포했음

Frontend: http://211.215.13.73:9000

Backend: http://211.215.13.73:9001

---

## 참고한 게시물

웹페이지 디자인 참고: https://pensive-kowalevski-fdf325.netlify.app

CSS 기본값 세팅: https://velog.io/@teo/2022-CSS-Reset-%EB%8B%A4%EC%8B%9C-%EC%8D%A8%EB%B3%B4%EA%B8%B0

사용한 이미지 1: https://www.pexels.com/ko-kr/photo/c-574069/

사용한 비디오 1: https://www.pexels.com/ko-kr/video/5495781/

기술 스택 svg 파일 모음: https://blog.naver.com/powersub1101/223193374749

docker buildx 관련 정보: https://blog.taehun.dev/docker-buildx-

---

## 결과물 소개

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

## FrontEnd 배포 (AWS EC2, NginX)

이 레포지토리를 AWS EC2의 `/var/www` 경로에 clone 했습니다.

```shell
cd /var/www
sudo git clone https://github.com/NARARIA03/24-1-OSS-Mypage-Proj
```

`프론트엔드` 페이지는 `9000`번 포트로 배포하려고 결정했으므로 NginX 설정 파일을 수정해줬습니다.

```shell
sudo vi /etc/nginx/sites-enabled/default
```

위 명령어로 에디터를 열고, 새 server 블록을 아래와 같이 추가해줬습니다.

```
...

server {
  listen 9000;
  listen [::]:9000;

  server_name _;
  root /var/www/24-1-OSS-Mypage-Proj/frontend;
  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

그리고 아래 명령어로 NginX를 재시작 해줬습니다.

```shell
sudo nginx -s reload
```

EC2 인스턴스 실행 시, NginX가 실행되도록 아래 명령어를 사용했습니다.
https://phoenixnap.com/kb/nginx-start-stop-restart

```shell
sudo systemctl enable nginx
```

---

## BackEnd 배포 (AWS EC2, Docker)

백엔드 폴더에 `Dockerfile`, `.dockerignore` 두 개의 파일을 생성했습니다.

- `Dockerfile`: `image`를 빌드하기 위해 사용되는 명령어를 적어두는 파일
- `.dockerignore`: `image`를 빌드할 때, 포함될 필요 없는 파일을 적어두는 파일

`FastAPI`를 배포하기 위해 들어가야 하는 `Dockerfile` 내용은 아래와 같습니다.

```dockerfile
FROM python:3.10

WORKDIR /app/

COPY . /app/

RUN pip install -r requirements.txt

EXPOSE 80

CMD python main.py
```

단, `EXPOSE`의 경우는 **반드시 `uvicorn` 실행 시 사용하는 port**와 동일하게 맞춰야 합니다.\*\*

`CMD`의 경우는 `uvicorn main:app --reload --host 0.0.0.0 --port 80`이 들어갈수도 있으나, 저같은 경우는 `main.py`의 하단부에 해당 코드를 명시해뒀기 때문에 `main.py`를 실행하도록 했습니다.

```python
...

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=80, reload=True)
```

`.dockerignore`의 경우, `FastAPI`가 생성하는 `__pycache__`, `Dockerfile`과 `.dockerignore`, 가상환경 폴더인 `.venv` 정도를 제외시키면 됩니다.

```
/.dockerignore
/Dockerfile
/.venv
/__pycache__
```

`arm` 운영체제에서 `Docker image`를 빌드하는 경우, 반드시 `buildx`를 사용해 멀티 아키텍쳐에 대응하는 이미지를 빌드해야만 합니다. (아키텍쳐가 서로 다른 경우, 이미지를 컨테이너로 띄우지 못하고 아래와 같은 에러가 발생합니다)

```shell
WARNING: The requested image's platform (linux/arm64/v8) does not match the detected host platform (linux/amd64/v3) and no specific platform was requested exec /bin/sh: exec format error
```

`Docker Hub`에 새로운 레포지토리 `guestbookfastapi`를 생성하고, `Dockerfile`과 `buildx`를 사용해 arm과 amd64 모두 지원하는 이미지를 빌드 및 푸쉬합니다. (`Dockerfile`이 있는 폴더에서 아래 명령어 실행)

```shell
docker buildx build --platform linux/amd64,linux/arm64 -t hyunseong03/guestbookfastapi --push .
```

![dockerhub](/readme_image/dockerhub.png)

이제 이 `docker image`를 AWS EC2에서 pull 해온 뒤 Container로 실행하면 백엔드 배포가 끝납니다.

```shell
sudo docker pull hyunseong03/guestbookfastapi
sudo docker run -p 9001:80 --restart=always hyunseong03/guestbookfastapi
```

먼저 첫 번째 줄은 github에서 코드를 pull 해오는 것과 유사하게, docker hub에서 image를 pull 해오는 과정입니다. pull 해온 뒤 아래 명령어를 입력해서 잘 받아왔는지 확인이 가능합니다.

```shell
sudo docker images
```

두 번째 줄은 pull 해온 이미지를 Container로 띄우는 명령어입니다. 두 가지 옵션이 사용되었습니다.

- `-p 9001:80`: 컨테이너 외부(EC2 컴퓨터)와 컨테이너 내부(uvicorn)의 포트를 연결하기 위한 옵션입니다. 따라서 `:` 기준 왼쪽 포트는 **접속 시 실제로 사용할 포트**를 입력해야 하고, `:` 기준 오른쪽 포트는 **uvicorn을 실행할 때 사용한 포트**를 입력해야 합니다.
- `--restart=always`: EC2 인스턴스 실행 시, 자동으로 해당 이미지가 컨테이너로 실행되도록 하는 옵션입니다.

---

## BackEnd 배포 (개인 Ubuntu server, Docker)

`main.py`의 소스코드와 `Dockerfile` 내용을 일부 수정했습니다.

```python
# 아래 코드 삭제
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=80, reload=True)
```

```dockerfile
FROM python:3.10

WORKDIR /app/

COPY . /app/

RUN pip install --no-cache-dir --upgrade -r requirements.txt

EXPOSE 80

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

```

도커파일의 수정 내역은 FastAPI 공식 문서의 Docker 항목을 참고해서 만들었습니다.

https://www.joonas.io/fastapi/ko/deployment/docker/

그리고 AWS에 배포할때와 동일하게 이미지로 빌드 및 Dockerhub에 푸쉬했습니다.

```shell
docker buildx build --platform linux/amd64,linux/arm64 -t hyunseong03/guestbookfastapi --push .
```

이후 개인 Ubuntu server에서 이미지를 pull 해왔습니다.

```shell
sudo docker pull hyunseong03/guestbookfastapi:latest
```

그리고 이 이미지를 컨테이너로 띄웠습니다. (몇몇 속성 추가)

```shell
sudo docker run -d -p 9001:80 --restart=always -v /etc/localtime:/etc/localtime:ro -e TZ=Asia/Seoul hyunseong03/guestbookfastapi
```

**`-d`:**

- 백그라운드에서 도커 컨테이너를 실행시키는 속성입니다.

**`-p 9001:80`:**

- 외부포트 9001로 접속하면, 컨테이너의 80번 포트로 연결하는 속성입니다.
- uvicorn은 컨테이너에서 80번 포트로 실행되고 있기 때문에 필요합니다.

**`--restart=always`:**

- Ubuntu server가 재시작되면, 자동으로 이 컨테이너를 다시 실행하는 속성입니다.

**`-v /etc/localtime:/etc/localtime:ro -e TZ=Asia/Seoul`:**

- 컨테이너의 시간대가 서울 시간대와 맞지 않는 문제가 발생해서 추가한 속성입니다.
- 각 국가의 시간대를 저장하고 있는 `/etc/localtime` 파일을 `ro`라는 태그로 마운트하고
- `TZ=Asia/Seoul` 이라는 환경변수를 `-e`를 사용해 추가해주면, 서울로 시간대를 설정 가능합니다.

---
