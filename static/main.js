const badgeEl = document.getElementById("uibadges");
const menu = document.getElementById("inner");
const hiddenDiv = document.getElementById("gnb-white");
const titleholder = document.querySelector("title-holder");

// const toTopEl = document.querySelector("#to-top");
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘으면.
    if (window.scrollY > 500) {
      // Badge 요소 숨기기!
      gsap.to(badgeEl, 0.3, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      // gsap.to(toTopEl, 0.2, {
      //   x: 0,
      // });

      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
      // Badge 요소 보이기!
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 스크롤 버튼 숨기기!
      // gsap.to(toTopEl, 0.2, {
      //   x: 100,
      // });
    }
  }, 300)
);
// // 상단으로 스크롤 버튼을 클릭하면,
// toTopEl.addEventListener("click", function () {
//   // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
//   gsap.to(window, 0.7, {
//     scrollTo: 0,
//   });
// });

menu.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.height = "776px";
  hiddenDiv.style.transition = "height 0.4s ease";
});

menu.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.height = "0";
});

const fadeEls = document.querySelectorAll(".title-holder .txt-mask");
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3,
    y: 10,
    x: 10,
    opacity: 1,
  });
});
