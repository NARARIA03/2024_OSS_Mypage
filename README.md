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
> Frontend는 `NginX`로 배포  
> Backend는 `Docker`로 배포한 뒤 `NginX`의 리버스 프록시를 사용해 https를 적용함

Frontend: https://chsdev.mooo.com

Backend: https://chsdev.mooo.com/api

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

<br/>

## 여기까지가 오픈소스소프트웨어 수업 범위였고, 아래부터는 개인적으로 공부한 내용입니다.

<br/>

## 1. BackEnd 배포 (개인 Ubuntu server, Docker)

백엔드 배포 이전에 FE의 방명록 시간 관련 로직을 수정해야 합니다.
개인 Ubuntu server는 더이상 버지니아 주에 위치하지 않기 때문에 시간 관련 코드를 아래와 같이 수정합니다.

```js
/**
 * @description timestamp로 담겨온 값을 포매팅 해서 반환하는 함수, 버지니아 북부 시간을 서울 시간으로 보정한다
 * @param {string} dateTime
 */
const formatTimestamp = (dateTime) => {
  const date = new Date(dateTime);
  // 버지니아 북부 시간 + 9시간 -> 서울 시간
  // date.setHours(date.getHours() + 9); <- 이 부분 주석처리

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
};
```

그 다음으로 BE의 `main.py` 소스코드와 `Dockerfile` 내용을 일부 수정했습니다.

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

- **`-d`:**

  - 백그라운드에서 도커 컨테이너를 실행시키는 속성입니다.

- **`-p 9001:80`:**

  - 외부포트 9001로 접속하면, 컨테이너의 80번 포트로 연결하는 속성입니다.
  - uvicorn은 컨테이너에서 80번 포트로 실행되고 있기 때문에 필요합니다.

- **`--restart=always`:**

  - Ubuntu server가 재시작되면, 자동으로 이 컨테이너를 다시 실행하는 속성입니다.

- **`-v /etc/localtime:/etc/localtime:ro -e TZ=Asia/Seoul`:**

  - 컨테이너의 시간대가 서울 시간대와 맞지 않는 문제가 발생해서 추가한 속성입니다.
  - 각 국가의 시간대를 저장하고 있는 `/etc/localtime` 파일을 `ro`라는 태그로 마운트하고
  - `TZ=Asia/Seoul` 이라는 환경변수를 `-e`를 사용해 추가해주면, 서울로 시간대를 설정 가능합니다.

Ubuntu server에서 도커 컨테이너는 실행 중이지만 방화벽 때문에 접속이 되지 않습니다.

따라서 아래 명령어로 **FE:**`9000`, **BE:**`9001` 포트를 개방했습니다.

```shell
sudo iptables -A INPUT -p tcp --dport 9000 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 9001 -j ACCEPT
```

---

## 2. 개인 Ubuntu server에 도메인을 등록하고 https 적용

### 도메인 만들기

https://freedns.afraid.org/zc.php?from=L2R5bmFtaWMv

위 사이트에서 무료 도메인을 만들 수 있습니다. 회원가입을 진행하고 이메일 인증을 마친 뒤 좌측의 Subdomains를 클릭합니다.

그 다음 새 서브 도메인을 생성합니다. `Type`은 A로 두고, `Subdomain`은 chsdev로 설정, `Domain`은 mooo.com을 사용했고, `Destination`은 Ubuntu server의 외부 IP 주소로 설정한 뒤 나머지는 건들지 않고 생성합니다. -> `chsdev.mooo.com` 이라는 새로운 도메인이 생성되었습니다.

이제 브라우저 주소창에 `http://서버_외부_IP_주소:포트번호` 를 입력하는 대신 `http://chsdev.mooo.com:포트번호`를 입력해서 접속할 수 있게 되었습니다.

---

### 포트 번호 대신 도메인을 기반으로 프로젝트를 구분하도록 설정

여기서 좀 더 나아가 현재 배포하고 있는 모든 프로젝트를 각각의 도메인 주소를 사용해 80번 포트로 배포하기 위한 작업을 `NginX`로 수행합니다.

위에서 `chsdev.mooo.com` 도메인을 만든것과 동일하게 `genshin.gg.mooo.com` 도메인과 `imagetale.mooo.com` 도메인 등, 배포 중인 다른 프론트엔드를 위한 도메인을 생성합니다.

그리고 Ubuntu server에서 `/etc/nginx/sites-available/default`, `/etc/nginx/sites-enabled/default` 두 파일을 초기 상태로 돌렸습니다. (각 프로젝트마다 하나의 파일로 관리하기 위해)

(참고로 `sites-available` 디렉토리 내에 각각 프로젝트 배포를 위한 설정 파일을 작성하고, 실제 배포를 진행할 프로젝트의 설정 파일만 `sites-enabled` 디렉토리에 심볼릭 링크를 거는 형식으로 사용하는게 일반적이라고 하는 것 같습니다.)

다음으로 아래 명령어를 사용해 `sites-available` 디렉토리 내에 `com.mooo.chsdev.conf` 라는 NginX 설정 파일을 만들고 아래와 같이 작성합니다.

```shell
sudo vim /etc/nginx/sites-available/com.mooo.chsdev.conf
```

```conf
# 추가할 서버 블록의 예시
server {
        listen 80;
        listen [::]:80;

        server_name chsdev.mooo.com;
        root /var/www/mypage/frontend;
        index index.html;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

다른 프로젝트들도 위와 동일하게 각각의 conf 파일을 만들어 관리해줬습니다.

핵심은 server 블록 내의 **server_name에 각각의 도메인을 넣는다**는 점입니다.
이를 통해 NginX가 같은 IP의 80번 포트로 들어온 요청이더라도, 어떤 도메인에서 온 요청인지를 확인해 각각 다른 작업을 수행할 수 있습니다.

마지막으로 sites-enabled 디렉토리로 심볼릭 링크를 걸기 위해 아래 명령어를 사용하고 NginX를 재시작합니다.

```shell
cd /etc/nginx/sites-enabled
sudo ln -s ../sites-available/com.mooo.chsdev.conf
sudo nginx -s reload
```

위 과정이 성공적이었다면, 이제 브라우저에 `http://외부_IP` 을 입력하면, NginX 기본 웹페이지가 나올 것이고, `http://chsdev.mooo.com` 을 입력하면, 이 레포지토리의 FE 웹페이지가 나올 것입니다.

만약 위 과정을 다른 프로젝트에도 적용한 경우, 해당하는 도메인을 브라우저에 입력하면 그 프로젝트의 FE 웹페이지가 나올 것입니다.

> 여기서 멈추면, **CORS** 정책 관련한 문제가 발생할 수 있습니다. 이는 BE에서 allow_origins에 새로운 FE의 주소(`http://chsdev.mooo.com` 등...)를 명시해주면 해결됩니다.

---

### 인증서를 등록해서 https 적용

Ubuntu server에서 `Certbot`을 사용해 간단하게 인증서 발급 및 NginX 설정 파일 수정이 가능합니다.

아래 명령어를 순차적으로 수행해 적용 가능합니다.

```shell
sudo apt update

sudo apt-get install python3-certbot-nginx

sudo certbot --nginx -d chsdev.mooo.com
```

> 참고로 `-d` 속성은 여러번 사용 가능합니다.  
> 즉 `-d chsdev.mooo.com -d genshin.gg.mooo.com -d imagetale.mooo.com` 과 같은 형태로 사용 가능합니다.

이후 시키는대로 절차를 따르고 약관에 동의하면, 인증서 발급과 NginX 설정파일에 적용까지 직접 해줍니다.

한번 아래 명령어로 NginX 설정 파일을 열어보면 확인 가능합니다.

```shell
sudo vim /etc/nginx/sites-enabled/com.mooo.chsdev.conf
```

```
server {
	server_name chsdev.mooo.com;
	root /var/www/mypage/frontend;
	index index.html;

	location / {
	  try_files $uri $uri/ =404;
	}

	listen [::]:443 ssl ipv6only=on; # managed by Certbot
	listen 443 ssl; # managed by Certbot
	ssl_certificate ...; # managed by Certbot
	ssl_certificate_key ...; # managed by Certbot
	include ...; # managed by Certbot
	ssl_dhparam ...; # managed by Certbot
}

server {
  if ($host = chsdev.mooo.com) {
	  return 301 https://$host$request_uri;
  } # managed by Certbot


  listen 80;
  listen [::]:80;

  server_name chsdev.mooo.com;
  return 404; # managed by Certbot
}
```

설정 파일을 읽어보면 알 수 있듯, 80번 포트로 접속했고 host가 도메인과 동일하다면 301 리다이렉션을 수행해 https로 연결되도록 설정 파일이 자동으로 작성되어 있습니다.

또한 `Certbot`을 사용하면, 인증서가 만료되기 전에 자동으로 재발급하는 cron까지 자동으로 설정해줍니다.

아래 명령어로 NginX를 재시작한 뒤, `http://chsdev.mooo.com`, `https://chsdev.mooo.com` 두 주소에 접속해보면, 모두 https 연결로 접속되는 것을 확인할 수 있습니다.

```shell
sudo nginx -s reload
```

(참고로 당연히 네트워크에서 443 포트포워딩 및 Ubuntu server의 방화벽에서 443포트를 허용해야만 접속이 가능합니다.)

그러나, BE와 데이터를 교환하는 과정에서 `CORS` 문제, `Mixed Content` 문제가 발생할 것입니다.

---

### CORS 문제, Mixed Content 문제

먼저 두 문제의 발생 원인부터 정리해보면

- **CORS 문제의 발생 원인:**

  - index.html을 가져온 출처와, 요청에 대한 응답을 보낸 출처가 다른 경우 발생
  - 주로 API를 배포하는 **BE 쪽에서 FE의 출처를 allow_origins에 작성해두지 않아서 발생**
  - 해결 방법: 요청에 대한 응답을 보낸 출처 쪽에서 요청을 보낸 출처를 allow_origins에 작성해두면 됩니다.

- **Mixed Content 문제의 발생 원인:**

  - HTTPS로 보안이 보장된 웹사이트에서 HTTP와 같은 보안이 보장되지 않은 웹사이트로 요청을 보내는 경우
  - 즉, **HTTPS에서 HTTP에게 요청을 보내는 경우** 발생
  - 해결 방법: HTTP를 HTTPS로 바꿔주면 됩니다.

기존에 발생하지 않던 두 문제가 발생하는 이유는 크게 두 가지입니다.

1. 외부 IP 대신 **도메인**을 사용하도록 변경
2. FE 배포를 http에서 **https**로 변경

---

### CORS 해결

먼저 **CORS**를 해결하려면, BE의 `main.py`의 `CORSMiddleware` 부분을 아래와 같이 수정해서 **도메인을 적용한 출처를 명시**해줘야 합니다.

```python
...

origins = [
    "http://127.0.0.1:5500",
    "http://chsdev.mooo.com", # 추가!
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

...
```

그리고 새로 `Docker image`를 빌드하고 `Container`로 실행하면, `CORS` 문제는 해결되지만 `Mixed Content` 문제가 발생할 것입니다.

(만약 계속 CORS가 발생한다면, 개발자 도구의 네트워크 탭의 캐시 사용 중지를 체크하고 페이지를 처음부터 다시 탐색해본 뒤, 캐시 사용 중지를 꺼서 해결할 수 있습니다.)

---

### Mixed Content 해결

여러 방법들이 있지만, 가장 간단한 것은 `NginX`를 사용해서 `Certbot`을 통해 생성된 인증서를 활용해 서버 내부의 `Docker container`로 `proxy_pass` 시키는 것 입니다.

이를 Reverse proxy 라고 합니다.

먼저 위에서 `Docker container`를 실행할 때 9001번 포트를 사용했다고 가정하면 `(-p 9001:80)`

NginX 설정 파일 `com.mooo.chsdev.conf`를 아래와 같이 수정해서 BE 주소를 `https://chsdev.mooo.com/api`로 사용할 수 있습니다.

```conf
server {
	server_name chsdev.mooo.com;
	root /var/www/mypage/frontend;
	index index.html;

	location / {
	  try_files $uri $uri/ =404;
	}

	## 추가되는 부분, https로 받은 요청을 http 백엔드로 프록시 수행 ##
	location /api/ {
	  rewrite ^/api(.*) $1 break; # proxy_pass로 보낼 때 /api 부분을 없애줌
	  proxy_pass http://127.0.0.1:9001; # 포트는 백엔드 배포한 포트로
	  proxy_set_header X-Real-IP $remote_addr;
	  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	  proxy_set_header X-Forwarded-Proto $scheme;
	}
	## 여기까지 추가해주면 된다 ##

	listen [::]:443 ssl ipv6only=on; # managed by Certbot
	listen 443 ssl; # managed by Certbot
	ssl_certificate ...; # managed by Certbot
	ssl_certificate_key ...; # managed by Certbot
	include ...; # managed by Certbot
	ssl_dhparam ...; # managed by Certbot
}

server {
	if ($host = chsdev.mooo.com) {
	  return 301 https://$host$request_uri;
  } # managed by Certbot


  listen 80;
  listen [::]:80;

  server_name chsdev.mooo.com;
  return 404; # managed by Certbot
}
```

설정파일에서 추가된 부분만 뜯어서 살펴봅시다.

```conf
location /api/ {
  rewrite ^/api(.*) $1 break; # proxy_pass로 보낼 때 /api 부분을 없애줌
  proxy_pass http://127.0.0.1:9001; # 포트는 백엔드 배포한 포트로
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

- `location / {}` 블록은 이미 FE를 배포하는데 사용되는 중이므로, `location /api/ {}` 블록을 만들어서 이 주소를 `Docker container`와 연결했습니다.

- `rewrite ^/api(.*) $1 break;` 은 주석에도 적혀있지만, 실제 FastAPI가 기대하는 엔드포인트에는 `/api`가 포함되면 안 됩니다. 따라서 이를 없애고, 뒷부분만을 사용하기 위한 설정입니다.

- `proxy_pass http://127.0.0.1:9001;` 을 통해 `https://chsdev.mooo.com/api`로 들어오는 요청을 `http://127.0.0.1:9001`로 전달합니다. 127.0.0.1은 루프백 IP이므로, `Ubuntu server` 내의 `NginX`가 전달한 요청은 `Ubuntu server` 내의 `Docker container`가 받아서 처리하게 됩니다.

  - https에서 인증서의 역할은 인터넷을 돌아다니는 데이터를 암호화하기 위한 목적이므로, `NginX`가 `Docker container`로 보내는 주소가 http인 것은 괜찮습니다.

  - 왜냐하면 어차피 `Docker container`가 반환한 값을 `NginX`가 받아서 인증서를 사용해 데이터를 암호화해서 인터넷 상으로 전송하기 때문입니다.

  - 즉 이전에는 `Uvicorn`이 데이터를 암호화하지 않고 바로 전송하는 구조였다면, 지금은 `Uvicorn` 앞에 `NginX`를 배치해서 `NginX`가 인터넷과 내부망 사이 문 역할을 **https**로 수행하는 것입니다.

최종적으로 예시를 들어보면, FE에서 `https://chsdev.mooo.com/api/some/path` 로 요청을 보내면, `NginX`가 수신한 뒤, `http://127.0.0.1:9001/some/path` 로 요청을 보내게 되고, 이를 `Docker container`가 받아서 요청을 처리하고, 결과를 `NginX`가 받아서 FE로 보내주는 구조로 설명이 됩니다.

이렇게 Reverse proxy를 적용하고 NginX를 재시작 한 뒤, `https://chsdev.mooo.com/api/some/path`와 같은 BE 주소에 접속해보면 데이터를 잘 받아오는 것을 알 수 있습니다.

그러면 마지막으로 FE에서 요청을 보낼 BE 주소만 수정해주면 Mixed Content 문제가 해결됩니다.

```js
// guestbook.js
const API_URL = "https://chsdev.mooo.com/api";

...
```

여기까지가 도메인을 적용하고, https로 암호화된 웹페이지를 완성하는 과정이었습니다.

---
