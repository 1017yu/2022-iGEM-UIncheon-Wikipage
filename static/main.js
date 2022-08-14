const badgeEl = document.getElementById("uibadges");
const menu = document.getElementById("inner");
const hiddenDiv = document.getElementById("gnb-white");
const titleholder = document.querySelector("title-holder");
const column__1 = document.querySelector("column-1");
const column__2 = document.querySelector("column-2");
const container__4 = document.querySelector("container__4");

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
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
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
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
    }
  }, 80)
);

const fadeEl__4 = document.querySelectorAll(".column-2 .col-2");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 1200) {
      fadeEl__4.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: (index + 1) * 0.2,
          y: -100,
          opacity: 1,
        });
      });
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
    }
  }, 80)
);

const fadeEl__5 = document.querySelectorAll(".container-2-txt");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 1600) {
      fadeEl__5.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 4.5,
          x: 0,
          opacity: 1,
        });
      });
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
    }
  }, 80)
);

const fadeEl__6 = document.querySelectorAll(".row-1-1");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 2300) {
      fadeEl__6.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 4.5,
          opacity: 1,
        });
      });
    } else {
    }
  }, 80)
);

const fadeEl__7 = document.querySelectorAll(".row-1-2-img");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 3300) {
      fadeEl__7.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 7.5,
          opacity: 1,
        });
      });
    } else if (2400 < window.scrollY < 2500) {
      fadeEl__7.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: 0,
          opacity: 0,
        });
      });
    }
  }, 80)
);

const fadeEl__8 = document.querySelectorAll(".row-1-3-img");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 3600) {
      fadeEl__8.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 2.5,
          opacity: 1,
        });
      });
      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else if (1000 < window.scrollY < 2600) {
      fadeEl__8.forEach(function (fadeEl, index) {
        gsap.to(fadeEl, 1, {
          delay: index * 1,
          opacity: 0,
        });
      });
    }
  }, 80)
);

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

(function () {
  init();

  let g_containerInViewport;
  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  function setStickyContainersSize() {
    document.querySelectorAll(".stickyContainer").forEach(function (container) {
      const stikyContainerHeight =
        container.querySelector(".container__4").scrollWidth;
      container.setAttribute("style", "height: " + stikyContainerHeight + "px");
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt) {
    const containerInViewPort = Array.from(
      document.querySelectorAll(".stickyContainer")
    ).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    let isPlaceHolderBelowTop =
      containerInViewPort.offsetTop < document.documentElement.scrollTop;
    let isPlaceHolderBelowBottom =
      containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
      document.documentElement.scrollTop;
    let g_canScrollHorizontally =
      isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector(".container__4").scrollLeft +=
        evt.deltaY;
    }
  }
})();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerWidth;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// 카운트를 표시할 요소
const $counter_1 = document.querySelector(".count-1");
const $counter_2 = document.querySelector(".count-2");

// 목표수치
const maxCount_1 = 550;
const maxCount_2 = 16000;

counter__1($counter_1, maxCount_1);
counter__2($counter_2, maxCount_2);

function counter__1($counter_1, maxCount_1) {
  let now = maxCount_1;

  let handle = setInterval(() => {
    $counter_1.innerHTML = Math.ceil(maxCount_1 - now);

    // 목표에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    }

    // 적용될 수치, 점점 줄어듬
    const step = now / 5;

    now -= step;
  }, 50);
}

function counter__2($counter_2, maxCount_2) {
  let now = maxCount_2;

  let handle = setInterval(() => {
    $counter_2.innerHTML = Math.ceil(maxCount_2 - now);

    // 목표에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    }

    // 적용될 수치, 점점 줄어듬
    const step = now / 5;

    now -= step;
  }, 50);
}

const step = now / 10;
