/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let sym = ["♦", "♥", "♠", "♣"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let cardSuit = sym[Math.floor(Math.random() * sym.length)];
  if (cardSuit == "♦" || cardSuit == "♥") {
    document.querySelector(".container-fluid").style.color = "red";
  }

  let cardNumber = number[Math.floor(Math.random() * number.length)];

  document.querySelector("#before").innerHTML = cardSuit;
  document.querySelector("#number").innerHTML = cardNumber;
  document.querySelector("#after").innerHTML = cardSuit;
};
