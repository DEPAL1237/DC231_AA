let observerOption = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.5,
};

let observerCallback = (observingTargets) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      eachObservingTarget.target.classList.add("triggered"); //교차하면 추가하고
    } else {
      eachObservingTarget.target.classList.remove("triggered"); //교차하지 않으면 때버린다~
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOption);

let elems = document.querySelectorAll(".animTrigger");

console.log(elems);

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
