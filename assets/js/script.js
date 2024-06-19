let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let next_previous = document.querySelector(".next-previous");
let slider = document.querySelector(".classes-list");

let count = 0;

function slideImg(count) {
  if (count >-1252 && count < 0) {
    if (count < 0) {
      previous.style.visibility = "visible";
    }
   if (count > -1252) {
      next.style.visibility = "visible";
    }
  } else {
    if (count >= 0) {
      previous.style.visibility = "hidden";
    } else if (count<=-1252) {
      next.style.visibility = "hidden";
    }
  }
}
previous.addEventListener("click", () => {
  count = count + 78.25;
  slideImg(count);
  slider.style.transform = `translateX(${count}px)`;
  console.log(count);
});

next.addEventListener("click", () => {
  count = count - 78.25;
  slideImg(count);
  slider.style.transform = `translateX(${count}px)`;
  console.log(count);
});

slideImg(count);
