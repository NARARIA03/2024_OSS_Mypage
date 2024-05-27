from fastapi import FastAPI
from guestbook import guestbook_router

app = FastAPI()

# 방명록 라우터 연결
app.include_router(guestbook_router)


@app.get("/")
async def root() -> dict:
    return {"message": "2024 OSS Mypage Project, 2022204045 최현성"}


# 배포 시 터미널 코드
# nohup uvicorn main:app --reload --host 0.0.0.0 --port 8080 &
