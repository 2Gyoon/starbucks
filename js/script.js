const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none"
    });
    // 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  }else{
    // 배지 보여주기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block"
    });
    // 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: "100px"
    });
  }
}, 300));   //0.3초 단위로 부하를 주어서 함수가 한꺼번에 실행되는 것을 방지(lodash의 _.throttle)★★★★

//_.throttle(함수, 시간)

toTopEl.addEventListener("click", function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: true
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;  //다른 값으로 할당 될 수 있으므로 let으로 선언

promotionToggleBtn.addEventListener("click", function(){
  isHidePromotion = !isHidePromotion  //!는 반대값으로 만드는 역할 flase -> true
  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add("hide");
  }else{
    // 보여주기
    promotionEl.classList.remove("hide");
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, {옵션});
  gsap.to(selector, random(1.5, 2.5), {
    y: size,    //y축
    repeat: -1,  //무한반복
    yoyo: true,  //한번 진행된 애니메이션에서 다시 돌아갔다가 시작하기
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
};
floatingObject(".floating1", 1, 15);  //css 선택자로 입력 가능
floatingObject(".floating2", 0.5, 15);  //css 선택자로 입력 가능
floatingObject(".floating3", 1.5, 20);  //css 선택자로 입력 가능


const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,  //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,       //viewport 세로 기준으로 0.8지점(0~1)에서 이벤트 발생
  }).setClassToggle(spyEl, "show").addTo(new ScrollMagic.Controller());
});


