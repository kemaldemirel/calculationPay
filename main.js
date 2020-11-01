const form = document.getElementById('form');
const hour = document.querySelector('#hour');
const count = document.querySelector('#count');
const to = document.querySelector('#to');

function getMonthPay(hour, count, to){
    let resultHour = parseInt(hour.value) * 55;
    let resultTO = parseInt(to.value) * 0.007;
    let resultPay = resultHour + resultTO + parseInt(count.value);

    let sum = document.getElementById('sum');
    sum.innerText = resultPay.toFixed();
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    getMonthPay(hour, count, to);
});