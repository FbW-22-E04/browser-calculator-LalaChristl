// ADD

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
console.log(a3);

a1.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(a1.value);
  const n2 = !a2.value ? 0 : parseFloat(a2.value);

  const sum = n1 + n2;
//   console.log(sum);

  a3.value = sum;
});

a1.addEventListener("keydown", (event) => {
  console.log("key pressed is", event.key);

  if (event.key === "Enter") a2.focus();
});

a2.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(a1.value);
  const n2 = !a2.value ? 0 : parseFloat(a2.value);

  const sum = n1 + n2;
//   console.log(sum);

  a3.value = sum;
});

// SUBTRACT

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
console.log(b3);

b1.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(b1.value);
  const n2 = !b2.value ? 0 : parseFloat(b2.value);

  const sum = n1 - n2;
//   console.log(sum);

  b3.value = sum;
});

b1.addEventListener("keydown", (event) => {
  console.log("key pressed is", event.key);

  if (event.key === "Enter") b2.focus();
});

b2.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(b1.value);
  const n2 = !b2.value ? 0 : parseFloat(b2.value);

  const sum = n1 - n2;
//   console.log(sum);

  b3.value = sum;
});

// MULTIPLY

const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");
console.log(c3);

c1.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(c1.value);
  const n2 = !c2.value ? 0 : parseFloat(c2.value);

  const sum = n1 * n2;
//   console.log(sum);

  c3.value = sum;
});

c1.addEventListener("keydown", (event) => {
  console.log("key pressed is", event.key);

  if (event.key === "Enter") c2.focus();
});

c2.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(c1.value);
  const n2 = !c2.value ? 0 : parseFloat(c2.value);

  const sum = n1 * n2;
//   console.log(sum);

  c3.value = sum;
});

// DIVIDE

const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
console.log(d3);

d1.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(d1.value);
  const n2 = !d2.value ? 0 : parseFloat(d2.value);

  const sum = n1 / n2;
//   console.log(sum);

  d3.value = sum;
});

d1.addEventListener("keydown", (event) => {
  console.log("key pressed is", event.key);

  if (event.key === "Enter") d2.focus();
});

d2.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(d1.value);
  const n2 = !d2.value ? 0 : parseFloat(d2.value);

  const sum = n1 / n2;
//   console.log(sum);

  d3.value = sum;
});

// MODULO

const e1 = document.querySelector("#e1");
const e2 = document.querySelector("#e2");
const e3 = document.querySelector("#e3");
console.log(e3);

e1.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(e1.value);
  const n2 = !e2.value ? 0 : parseFloat(e2.value);

  const sum = n1 % n2;
//   console.log(sum);

  e3.value = sum;
});

e1.addEventListener("keydown", (event) => {
  console.log("key pressed is", event.key);

  if (event.key === "Enter") e2.focus();
});

e2.addEventListener("input", (e) => {
  console.log("input changed");

  const n1 = parseFloat(e1.value);
  const n2 = !e2.value ? 0 : parseFloat(e2.value);

  const sum = n1 % n2;
//   console.log(sum);

  e3.value = sum;
});
