const watch = document.querySelector(".box");

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  session = "AM";

  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  watch.innerHTML = hour + " : " + min + " : " + sec + " " + session;
}
setInterval(showTime, 1000);

// var time = new Date();
// console.log(time.toLocaleString("en-US", { hour: "numeric", hour12: true }));

// var now = new Date();
// var hours = now.getHours() % 12 || 12;  // 12h instead of 24h, with 12 instead of 0.

// setTimeout()

// var time = new Date();
// console.log(
//   time.toLocaleString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: true,
//   })
// )
