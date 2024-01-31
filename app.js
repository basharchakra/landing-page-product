AOS.init();

const options = {
  suffix: "+",
};

//add a check array to check if the user already saw the stats before, if he did, the counting animation wont
//restart and the numbers stay as they are. If it's the first time he see the stats, then the counting animation is active
var check = [];

const observerOptions = {
  threshold: 1.0,
};
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let div = entry.target;
    if (entry.isIntersecting) {
      //console.log(div);
      if (check.length === 0) {
        startCount();
      } else {
        return;
      }
    }
  });
}, observerOptions);
observer.observe(document.getElementById("number-section"));

function startCount() {
  check.push({ msg: "emitted" });
  const costumers = new CountUp("clients", 0, 14811, 0, 9, options);
  costumers.start();

  const xp = new CountUp("xp", 0, 8, 0, 6);
  xp.start();

  const experts = new CountUp("experts", 0, 94, 0, 8);
  experts.start();

  const vps = new CountUp("vps", 0, 8046, 0, 8, options);
  vps.start();
}
