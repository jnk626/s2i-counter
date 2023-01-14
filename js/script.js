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

const title = createElem("h1", "my-title", "A tiny counter");
container.before(title);

const counter = createElem("input", "counter", 0);
container.append(counter);

const plusBtn = createElem("button", "plus", "+");
container.append(plusBtn);

const minusBtn = createElem("button", "minus", "-");
container.append(minusBtn);

plusBtn.onclick = () => (counter.value = ++counter.value);
minusBtn.onclick = () => (counter.value = --counter.value);
