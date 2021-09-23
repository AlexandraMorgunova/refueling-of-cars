let span=document.querySelector('.sum');
let gas=document.querySelectorAll('.gas');
gas.forEach(function (item) {
    item.onclick=function () {
        let gallons=document.querySelector('.gallons').value;
    let amount=this.getAttribute('data');
    let sum=Math.floor(amount*gallons);
    span.innerHTML=`${sum}`
    
    }
    
})