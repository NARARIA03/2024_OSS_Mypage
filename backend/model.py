# 방명록 타입 지정
# name, title, message, 추가로 timestamp, id 존재
# id와 timestamp는 어차피 서버에서 세팅할 값이라서 None도 괜찮도록 설정

from pydantic import BaseModel
from typing import Union


class Guestbook_Item(BaseModel):
    id: Union[int, None] = None
    name: str
    title: str
    message: str
    timestamp: Union[str, None] = None
