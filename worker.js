onmessage = function (message) {
  console.log("worker start now....");
  let count = 0;
  for (let i = 0; i < 10000000000; i++) {
    count += i;
  }
  console.log("worker is ending....");

  postMessage(count);
};
