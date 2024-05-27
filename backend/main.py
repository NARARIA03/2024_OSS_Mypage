from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from guestbook import guestbook_router


app = FastAPI()

origins = ["http://127.0.0.1:5500"]


# 방명록 라우터 연결
app.include_router(guestbook_router)

# 교차 출처 리소스 공유 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root() -> dict:
    return {"message": "2024 OSS Mypage Project, 2022204045 최현성"}


# 배포 시 터미널 코드
# nohup uvicorn main:app --reload --host 0.0.0.0 --port 8080 &
