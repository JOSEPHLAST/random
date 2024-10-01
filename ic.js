function calc(){

let principal = Number(document.getElementById('principal').value);
let rate = Number(document.getElementById('rate').value / 100);
let time = Number(document.getElementById('time').value);

    let interest = principal * Math.pow((1 + rate), time);
    if(principal < 0 || isNaN(principal)){
        principal = 0;
        document.getElementById('principal').value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        document.getElementById('rate').value = 0;
    }
    if(time < 0 || isNaN(time)){
        time = 0;
        document.getElementById('time').value = 0;
    }
    else {
    document.getElementById('number').textContent = interest.toLocaleString(undefined, {style: 'currency', currency: 'USD'});
    }
}
