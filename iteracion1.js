let eventClick = (evento) => console.log(evento);

let btn = document.body
  .querySelector("#btnToClick")
  .addEventListener("click", eventClick);
//
let focusInput = (event) => {
  console.log(event.target.value);
};
let focus = document.body
  .querySelector(".focus")
  .addEventListener("focus", focusInput);
//
let input = document.body
  .querySelector(".value")
  .addEventListener("input", focusInput);
