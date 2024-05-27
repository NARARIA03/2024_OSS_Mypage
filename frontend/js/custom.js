/**
 * @description div 요소에 hide를 붙였다 뗐다 하는 함수
 * @param {Element} portfolioWrapper
 * @param {Element} icon
 */
const toggleDropdownDetail = (portfolioWrapper, icon) => {
  console.log("toggleDropdownDetail 함수 시작");
  let isVisible = false;
  for (let i = 0; i < portfolioWrapper.classList.length; i++) {
    if (portfolioWrapper.classList[i] === "hide") {
      portfolioWrapper.classList.remove("hide");
      icon.classList.remove("fa-arrow-alt-circle-down");
      icon.classList.add("fa-arrow-alt-circle-up");
      isVisible = true;
    }
  }
  if (!isVisible) {
    portfolioWrapper.classList.add("hide");
    icon.classList.remove("fa-arrow-alt-circle-up");
    icon.classList.add("fa-arrow-alt-circle-down");
  }
};

let portfolioWrapperList = document.querySelectorAll(".portfolio-wrapper");
let navBarAnchorList = document.querySelectorAll("header nav div a");
let homeLogo = document.querySelector("header nav h1");

// portfolio 자세히 보기 기능을 위한 eventListener 등록
for (let portfolioWrapper of portfolioWrapperList) {
  let icon = portfolioWrapper.children[0].children[2];
  icon.addEventListener("click", (e) => {
    let dropdownDetail = portfolioWrapper.children[1];
    // console.log(dropdownDetail);
    // console.log(e);
    toggleDropdownDetail(dropdownDetail, icon);
  });
}

// 상단바 좌측의 로고를 누르면 맨 위까지 스크롤하는 eventListener 등록
homeLogo.addEventListener("click", () => {
  let dest = document.querySelector(".introduction");
  dest.scrollIntoView({ behavior: "smooth", block: "start" });
});

// 상단바 우측의 About, Features, Portfolio, Contact를 누르면 해당 위치까지 스크롤하는
// eventListener 등록
for (let anchor of navBarAnchorList) {
  anchor.addEventListener("click", () => {
    let className = anchor.innerHTML.toLowerCase();
    // console.log(className);
    let dest = document.querySelector("section." + className).children[0];
    dest.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// 시작 컴포넌트의 텍스트에 타이핑 및 삭제 효과 적용
document.addEventListener("DOMContentLoaded", () => {
  const textList = ['console.log("hello world");', "print('hello world')"];
  const typingElement = document.getElementById("typing-text");
  // 하나의 텍스트에 대한 인덱스
  let textIdx = 0;
  // textList에 대한 인덱스
  let listIdx = 0;
  // 삭제 phase인지, 타이핑 phase인지 구분하기 위한 flag
  let isDeleting = false;

  // 타이핑 관련 무한 재귀 함수
  const typing = () => {
    if (!isDeleting) {
      if (textIdx < textList[listIdx].length) {
        typingElement.textContent += textList[listIdx].charAt(textIdx);
        textIdx += 1;
        setTimeout(typing, 40);
      } else {
        isDeleting = true;
        setTimeout(typing, 2000);
      }
    } else {
      if (textIdx > 0) {
        typingElement.textContent = textList[listIdx].substring(0, textIdx - 1);
        textIdx -= 1;
        setTimeout(typing, 40);
      } else {
        isDeleting = false;
        if (listIdx === 0) {
          listIdx += 1;
        } else {
          listIdx -= 1;
        }
        setTimeout(typing, 2000);
      }
    }
  };
  typing();
});
