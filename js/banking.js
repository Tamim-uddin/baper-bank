// handle deposite event handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit
    const depositinput = document.getElementById('deposit-input');
    const newdepositamount = depositinput.value;
    // update deposit total
    const deposittotal = document.getElementById('deposit-total');
    const previousdepoamount = deposittotal.innerText;
    const newdepoamount = parseFloat(previousdepoamount) + parseFloat(newdepositamount);
    deposittotal.innerText = newdepoamount;
    // update balance total
    const balancetotal = document.getElementById('balance-total');
    const previousbalance = balancetotal.innerText;
    const newbalance = parseFloat(previousbalance) + parseFloat(newdepositamount);
    balancetotal.innerText = newbalance;
    // clear deposit input
    depositinput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get withdraw
    const withdrawinput = document.getElementById('withdraw-input');
    const newwithdraw = withdrawinput.value;
    // update withdraw total
    const withdrawtotal = document.getElementById('withdraw-total');
    const previouswithdrawamnt = withdrawtotal.innerText;
    const newwithdrawamnt = parseFloat(previouswithdrawamnt) + parseFloat(newwithdraw );
    withdrawtotal.innerText = newwithdrawamnt;
// update balance total
    const balancetotal = document.getElementById('balance-total');
    const previousbalance = balancetotal.innerText;
    const newbalance = parseFloat(previousbalance) - parseFloat(newwithdraw);
    balancetotal.innerText = newbalance;
    // clear withdraw input
    withdrawinput.value = '';   
});