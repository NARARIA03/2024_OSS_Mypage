/**
 * @description div 요소에 hide를 붙였다 뗐다 하는 함수
 * @param {Element} portfolioWrapper
 */
const toggleDropdownDetail = (portfolioWrapper) => {
  console.log("toggleDropdownDetail 함수 시작");
  let isVisible = false;
  for (let i = 0; i < portfolioWrapper.classList.length; i++) {
    if (portfolioWrapper.classList[i] === "hide") {
      portfolioWrapper.classList.remove("hide");
      isVisible = true;
    }
  }
  if (!isVisible) {
    portfolioWrapper.classList.add("hide");
  }
};

let portfolioWrapperList = document.querySelectorAll(".portfolio-wrapper");
let navBarAnchorList = document.querySelectorAll("header nav div a");
let homeLogo = document.querySelector("header nav h1");
// console.log(poortfolioWrapperList[0].children[0].children[2]);
console.log(navBarAnchorList);

// portfolio 자세히 보기 기능을 위한 eventListener 등록
for (let portfolioWrapper of portfolioWrapperList) {
  let icon = portfolioWrapper.children[0].children[2];
  icon.addEventListener("click", (e) => {
    let dropdownDetail = portfolioWrapper.children[1];
    // console.log(dropdownDetail);
    // console.log(e);
    toggleDropdownDetail(dropdownDetail);
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
