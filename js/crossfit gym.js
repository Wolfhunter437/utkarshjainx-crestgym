const counters = document.querySelectorAll('.counter');
let interval = 1000;

const startCounterOnIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      let startValue = 0;
      let endValue = parseInt(counterElement.getAttribute('data-target'));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 5;
        counterElement.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
      observer.unobserve(counterElement);
    }
  });
};

const observer = new IntersectionObserver(startCounterOnIntersection, { threshold: 0.2 });

counters.forEach((counterElement) => {
  observer.observe(counterElement);
});