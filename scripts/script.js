let overlay = CSSRulePlugin.getRule("section.container::before");
let bgImageWrapper = document.querySelector(".main__bg-wrapper");
let bgImage = document.querySelector(".main__bg");
let heroHeader = document.querySelector(".main__content-header-text");
let heroSubHeader = document.querySelector(".main__content-subheader-text");
let ctaBlock = document.querySelector(".second__cta");

let t1 = new TimelineMax();

t1.from(overlay, 2, { delay: 1, width: "0%", ease: Power4.easeOut })
  .from(bgImageWrapper, 2, { width: "0%", ease: Power4.easeOut }, "-=1.5")
  .from(
    bgImage,
    1.5,
    { transform: "scale(1.1)", ease: Power4.easeOut },
    "-=1.5"
  )
  .from(heroHeader, 1.5, { y: "150px", ease: Power4.easeOut }, "-=1.5")
  .from(heroSubHeader, 1.5, { y: "300px", ease: Power4.easeOut }, "-=1.5")
  .from(ctaBlock, 1, { height: 0, ease: Power4.easeOut }, "-=1");
