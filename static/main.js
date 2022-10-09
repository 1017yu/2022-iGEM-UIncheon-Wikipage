const badgeEl = document.getElementById("uibadges");
const menu = document.getElementById("inner");
const hiddenDiv = document.getElementById("gnb-white");
const titleholder = document.querySelector("title-holder");
const column__1 = document.querySelector("column-1");
const column__2 = document.querySelector("column-2");
const container__4 = document.querySelector("container-4");
const sec__5 = document.querySelector("sec-5");

gsap.config({
  nullTargetWarn: false,
});
// const toTopEl = document.querySelector("#to-top");
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘으면.
    if (window.scrollY > 600) {
      // Badge 요소 숨기기!
      gsap.to(badgeEl, 0.3, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      // gsap.to(toTopEl, 0.2, {
      //   x: 0,
      // });
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

menu.addEventListener("mouseover", function onMouseOver() {
  hiddenDiv.style.height = "516px";
  hiddenDiv.style.transition = "height 0.4s ease";
});

menu.addEventListener("mouseout", function onMouseOut() {
  hiddenDiv.style.height = "0";
});

const fadeEl__1 = document.querySelectorAll(".title-holder .txt-mask");
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEl__1.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.3,
    y: 10,
    x: 10,
    opacity: 1,
  });
});

const fadeEl__2 = document.querySelectorAll(".column-1 .col-1");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 450) {
      fadeEl__2.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.2,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__3 = document.querySelectorAll(".sec1-bg");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 350) {
      fadeEl__3.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 2.5,
          x: -250,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__4 = document.querySelectorAll(".col-2");
const rect_4 = document.getElementById("col-2");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_4.getBoundingClientRect().y < 850 || null) {
      fadeEl__4.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.4,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__5 = document.querySelectorAll(".sec-2-column2-img");
const rect_5 = document.getElementById("sec-2-img");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_5.getBoundingClientRect().y < 750 || null) {
      fadeEl__5.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 1.5,
          x: 70,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__6 = document.querySelectorAll(".row-1-sub .text-mask-sub");
const rect_6 = document.getElementById("row-1-sub");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_6.getBoundingClientRect().y < 850 || null) {
      fadeEl__6.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.3,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__9 = document.querySelectorAll(".count");
window.addEventListener(
  "scroll",
  _.debounce(function () {
    if (rect_10.getBoundingClientRect().y < 1200 || null) {
      fadeEl__9.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          x: -100,
          opacity: 1,
          repeat: 0,
        });
      });
      return;
    }
  }, 30)
);

const fadeEl__10 = document.querySelectorAll(".column-3 .text-mask");
const rect_10 = document.getElementById("col-3-txt");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_10.getBoundingClientRect().y < 850) {
      fadeEl__10.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.3,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__11 = document.querySelectorAll(".column-3-sub .text-mask-sub");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_10.getBoundingClientRect().y < 850 || null) {
      fadeEl__11.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.3,
          x: -130,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__12 = document.querySelectorAll(".container-7-img");
const rect_12 = document.getElementById("container-7");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_12.getBoundingClientRect().y < 850 || null) {
      fadeEl__12.forEach((fadeEl, index) => {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 1.2,
          opacity: 1,
          x: -200,
          scale: 1,
          ease: "back.out(1.9)",
          duration: 4.5,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__13 = document.querySelectorAll(".container-8-img");
const rect_13 = document.getElementById("container-8");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_13.getBoundingClientRect().y < 800 || null) {
      fadeEl__13.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.8,
          opacity: 1,
          x: 130,
          scale: 1,
          ease: "back.out(2.7)",
          duration: 2.5,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__14 = document.querySelectorAll(".row-1 .text-mask");
const rect_14 = document.getElementById("row-1");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_14.getBoundingClientRect().y < 850 || null) {
      fadeEl__14.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.3,
          x: -100,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__15 = document.querySelectorAll(".mini-container .text-mask-sub");
const rect_15 = document.getElementById("mini_container");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (rect_15.getBoundingClientRect().y < 850 || null) {
      fadeEl__15.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.3,
          y: -100,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

// const fadeEl__12 = document.querySelectorAll(".sec-5");
// window.addEventListener(
//   "scroll",
//   _.throttle(function () {
//     if (window.visualViewport === 0) {
//       fadeEl__12.forEach(function (fadeEl, index) {
//         gsap.to(fadeEl, 1, {
//           delay: (index + 1) * 0.3,
//           x: -140,
//           opacity: 1,
//         });
//       });
// //     } else {
//     }
//   }, 80)
// );

gsap.registerPlugin(ScrollTrigger);

var startCount1 = { var: 300 };

gsap.to(startCount1, {
  var: 550,
  duration: 2,
  ease: "none",
  onUpdate: changeNumber1,
  scrollTrigger: {
    trigger: "#countNum1",
  },
});

function changeNumber1() {
  countNum1.innerHTML = startCount1.var.toFixed();
}

var startCount2 = { var: 10000 };

gsap.to(startCount2, {
  var: 16000,
  duration: 2,
  ease: "none",
  onUpdate: changeNumber2,
  scrollTrigger: {
    trigger: "#countNum2",
  },
});

function changeNumber2() {
  countNum2.innerHTML = startCount2.var.toFixed();
}

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 x설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power2.easeInOut, // Easing 함수 적용.
    }
  );
}
floatingObject(".sec1-bg", 1, 17);
floatingObject(".sec-2-column2-img", 1, 17);

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Get the element, 요소 가져오기
let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
// 클릭 시 페이지의 상단으로 스크롤. 부드럽게 이동하는 것을 원치 않을 경우 'smooth'를 'instant'로 바꾸도록 합니다.
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
// 스크롤 시 애니메이션과 함께 버튼 표시/숨기기
window.onscroll = () =>
  window.scrollY > 500
    ? (topBtn.style.opacity = 1)
    : (topBtn.style.opacity = 0);

// (function () {
//   init();

//   let g_containerInViewport;
//   function init() {
//     setStickyContainersSize();
//     bindEvents();
//   }

//   function bindEvents() {
//     window.addEventListener("wheel", wheelHandler);
//   }

//   function setStickyContainersSize() {
//     document.querySelectorAll(".stickyContainer").forEach(function (container) {
//       const stikyContainerHeight =
//         container.querySelector(".container__4").scrollWidth;
//       container.setAttribute("style", "height: " + stikyContainerHeight + "px");
//     });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt) {
//     const containerInViewPort = Array.from(
//       document.querySelectorAll(".stickyContainer")
//     ).filter(function (container) {
//       return isElementInViewport(container);
//     })[0];

//     if (!containerInViewPort) {
//       return;
//     }

//     let isPlaceHolderBelowTop =
//       containerInViewPort.offsetTop < document.documentElement.scrollTop;
//     let isPlaceHolderBelowBottom =
//       containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
//       document.documentElement.scrollTop;
//     let g_canScrollHorizontally =
//       isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//     if (g_canScrollHorizontally) {
//       containerInViewPort.querySelector(".container__4").scrollLeft +=
//         evt.deltaY;
//     }
//   }
// })();

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerWidth;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// let scrollValue = 0;

// function changeBgColor(e) {
//   scrollValue += e.deltaY * 0.01;
//   console.log(scrollValue);

//   if (scrollValue > 10) {
//     sec__5.style.opacity = 0.5;
//     scrollValue = 0;
//   }
//   if (scrollValue < -10) {
//     sec__5.style.opacity = 1;
//     scrollValue = 0;
//   }
//   e.preventDefault();
// }

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
});

new Swiper(".sec-5 .swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
