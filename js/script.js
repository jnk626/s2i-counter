"use strict";

const createElem = function (tag, classes, content) {
  let elem = document.createElement(tag);

  //exception for the input, which uses a different property
  if (tag === "input") {
    elem.value = content;
    //otherwise the user would modify the value by typing
    elem.setAttribute("readonly", true);
  } else {
    elem.innerHTML = content;
  }

  //so I can create even "empty" elements
  if (!content) elem.innerHTML = "";

  elem.className = classes;
  return elem;
};

const container = createElem("main", "container");
document.body.append(container);

const title = createElem("h1", "my-title", "A tiny<br>counter");
container.append(title);

const counter = createElem("input", "counter", 0);
container.append(counter);

const plusBtn = createElem("button", "plus", "+");
container.append(plusBtn);

const minusBtn = createElem("button", "minus", "-");
container.append(minusBtn);

const author = createElem(
  "p",
  "signature",
  'Crafted by<br> <a href="github.com/jnk626">Gabriele Rigano</a>'
);
container.after(author);

const credits = createElem(
  "p",
  "credits",
  'Photo by <a href="https://unsplash.com/@8moments?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Berger</a> on <a href="https://unsplash.com/photos/hxMdsEaiSyE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
);
author.after(credits);

plusBtn.onclick = function () {
  counter.value = ++counter.value;
};

minusBtn.onclick = function () {
  counter.value = --counter.value;
};
