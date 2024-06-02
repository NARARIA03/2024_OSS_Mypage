const API_URL = "http://44.220.221.72:9001";

/**
 * @description 방명록 컴포넌트가 위치해야 할 부모 컨테이너 선택
 * @type {HTMLElement}
 */
const guestbookComponent = document.querySelector(".guestbook-wrapper");

/**
 * @description 방명록 이름 입력 컴포넌트 선택
 * @type {HTMLInputElement}
 */
const nameInput = document.querySelector(".form-wrapper input[name='name']");

/**
 * @description 방명록 제목 입력 컴포넌트 선택
 * @type {HTMLInputElement}
 */
const titleInput = document.querySelector(".form-wrapper input[name='title']");

/**
 * @description 방명록 메시지 입력 컴포넌트 선택
 * @type {HTMLInputElement}
 */
const messageInput = document.querySelector(
  ".form-wrapper textarea[name='msg']"
);

/**
 * @description 방명록 작성하기 submit 컴포넌트 선택
 * @type {HTMLInputElement}
 */
const submitInput = document.querySelector(
  ".form-wrapper input[type='submit']"
);

/**
 * @description get 방식으로 FastAPI의 방명록 리스트를 받아오는 함수
 */
const getGuestbookData = () => {
  axios
    .get(`${API_URL}/guestbook`)
    .then((res) => {
      console.log(`result: ${JSON.stringify(res.data.msg)}`);
      updateGuestbookComponent(res.data.msg);
    })
    .catch((e) => {
      console.error(`get errror: ${e}`);
    });
};

/**
 * @description post 방식으로 guestbookItem을 FastAPI의 방명록 리스트에 추가하는 함수
 * @param {object} newGuestbookItem
 */
const postGuestbookData = (newGuestbookItem) => {
  axios
    .post(`${API_URL}/guestbook`, newGuestbookItem)
    .then((res) => {
      console.log(`result: ${res.data.msg}`);
      getGuestbookData();
    })
    .catch((e) => {
      console.error(`post error: ${e}`);
    });
};

/**
 * @description delete 방식으로 특정 id에 해당하는 방명록을 삭제하는 함수
 * @param {number} id
 */
const deleteGuestbookData = (id) => {
  axios
    .delete(`${API_URL}/guestbook/${id}`)
    .then((res) => {
      console.log(`reslut: ${res.data.msg}`);
      getGuestbookData();
    })
    .catch((e) => {
      console.error(`delete error: ${e}`);
    });
};

/**
 * @description 방명록 리스트를 매개변수로 받아 HTML에 적용하는 함수
 * @param {object[]} guestbookList
 */
const updateGuestbookComponent = (guestbookList) => {
  // guestbookComponent 안에 있던 기존 내용 초기화
  guestbookComponent.innerHTML = "";
  guestbookList.forEach((guestbookItem) => {
    // div 생성하고 guestbook-item 클래스 추가
    let guestbookItemDiv = document.createElement("div");
    guestbookItemDiv.classList.add("guestbook-item");

    // x버튼 만들고, 이벤트 리스너 등록하고, guestbook-item div의 자식으로 추가
    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", (e) => {
      console.log(e);
      deleteGuestbookData(guestbookItem.id);
    });
    guestbookItemDiv.appendChild(btn);

    // title 역할을 하는 p 만들고 내용 넣고 guestbook-item div의 자식으로 추가
    let title = document.createElement("p");
    title.classList.add("guestbook-title");
    title.innerText = `제목: ${guestbookItem.title}`;
    guestbookItemDiv.appendChild(title);

    // name 역할을 하는 p 만들고 내용 넣고 guestbook-item div의 자식으로 추가
    let name = document.createElement("p");
    name.innerText = `이름: ${guestbookItem.name}`;
    guestbookItemDiv.appendChild(name);

    // message 역할을 하는 p 만들고 내용 넣고 guestbook-item div의 자식으로 추가
    let message = document.createElement("p");
    message.innerText = `내용: ${guestbookItem.message}`;
    guestbookItemDiv.appendChild(message);

    // timestamp 역할을 하는 p 만들고 내용 넣고 guestbook-item div의 자식으로 추가
    let timestamp = document.createElement("p");
    timestamp.innerText = `작성 시간: ${guestbookItem.timestamp}`;
    guestbookItemDiv.appendChild(timestamp);

    // 완성된 컴포넌트를 guestbookComponent의 자식으로 추가해서 완성
    guestbookComponent.appendChild(guestbookItemDiv);
  });
};

/**
 * @description form의 작성하기 버튼을 누르면 실행되는 함수,
 * 공백이 하나라도 있으면 알림만 반환하고
 * 공백이 없으면 postGuestbookData 함수를 실행해 FastAPI로 post 요청을 보냄
 * @param {Event} event
 */
const uploadGuestbookData = (event) => {
  if (messageInput.value.trim() === "") {
    alert("방명록 내용을 입력해주세요.");
    event.preventDefault();
    return;
  } else if (titleInput.value.trim() === "") {
    alert("방명록 제목을 입력해주세요.");
    event.preventDefault();
    return;
  } else if (nameInput.value.trim() === "") {
    alert("방명록에 남길 이름을 입력해주세요.");
    event.preventDefault();
    return;
  } else {
    // id는 FastAPI에서 처리하도록 했기 때문에 입력 안 해도 OK
    let newGuestbookItem = {
      name: nameInput.value,
      title: titleInput.value,
      message: messageInput.value,
    };
    postGuestbookData(newGuestbookItem);
    // post 완료하면 input 컴포넌트 내에 작성되어져 있던 값 초기화
    titleInput.value = "";
    nameInput.value = "";
    messageInput.value = "";
    // form 액션 수행하지 않도록 입력
    event.preventDefault();
  }
};

// DOM 구성 완료되면 실행되는 이벤트
window.addEventListener("DOMContentLoaded", (e) => {
  getGuestbookData();
});

// 작성하기 버튼 누르면 실행되는 이벤트
submitInput.addEventListener("click", (e) => {
  uploadGuestbookData(e);
});
