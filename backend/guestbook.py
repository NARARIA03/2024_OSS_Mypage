from fastapi import APIRouter
from model import Guestbook_Item
from datetime import datetime
import locale


guestbook_router = APIRouter()
# 한국으로 지역 설정, datetime에 사용
locale.setlocale(locale.LC_TIME, "ko_KR.UTF-8")

guestbook_list = []
id = 0


# 전체 방명록 가져오는 엔드포인트
@guestbook_router.get("/guestbook")
async def get_guestbook() -> dict:
    return {"msg": guestbook_list}


# 방명록을 추가하는 엔드포인트
@guestbook_router.post("/guestbook")
async def add_guestbook(item: Guestbook_Item) -> dict:
    global id
    # id를 서버에서 업데이트
    item.id = id
    # 해당 item의 타임스탬프 값 서버에서 업데이트
    now = datetime.now()
    timestamp = now.strftime("%Y-%m-%d(%a) %H:%M:%S")
    item.timestamp = timestamp
    guestbook_list.append(item)
    id += 1
    return {"msg": "success"}


# 특정 id 방명록을 제거하는 엔드포인트
@guestbook_router.delete("/guestbook/{id}")
async def delete_guestbook(id: int) -> dict:
    for i in range(len(guestbook_list)):
        if guestbook_list[i].id == id:
            del guestbook_list[i]
            return {"msg": "success"}
    return {"msg": f"fail delete {id}, Not found"}
