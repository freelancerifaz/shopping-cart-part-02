/* ------------------- Handle phone,case increase and decrease by one function -------------- */

function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product + 'Input');
    const productCount = parseFloat(productInput.value);
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productPrice = 0;
    if(product == 'phone'){
        productPrice = productNewCount * 1219;
    }
    if(product == 'case'){
        productPrice = productNewCount * 59;
    }
    document.getElementById(product + 'Price').innerText = productPrice;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputvalue('phone');
    const caseCount = getInputvalue('case');

    const subTotalPrice = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('subTotal').innerText = subTotalPrice;

    const tax = Math.round(subTotalPrice * 0.05);
    document.getElementById('tax').innerText = tax;

    const total = subTotalPrice + tax;
    document.getElementById('total').innerText = total;
}
function getInputvalue(product){
    const productInput = document.getElementById(product + 'Input');
    const productCount = parseFloat(productInput.value);
    return productCount;
}

// document.getElementById('phonePlus').addEventListener('click',function(){
//     handleProductChange(true);
// })

// document.getElementById('phoneMinus').addEventListener('click', function(){
//     handleProductChange(false);
// })

/* ---------------------- increase And Decrease Of iPhone ------------------------*/

// function handleProductChange(isIncrease){
//     const phoneInput = document.getElementById('phoneInput');
//     const phoneCount = parseFloat(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phonePrice').innerText = phonePrice;
// }

// document.getElementById('phonePlus').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phoneInput');
//     const phoneCount = parseFloat(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phonePrice').innerText = phonePrice;
// })

// document.getElementById('phoneMinus').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phoneInput');
//     const phoneCount = parseFloat(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phonePrice = phoneNewCount * 1219;
//     document.getElementById('phonePrice').innerText = phonePrice;
// })

/* ------------------------ Increase And Decrease Of Case part ------------------------------ */

// document.getElementById('casePlus').addEventListener('click',function(){
//     handleCaseChange(true);
// })
// document.getElementById('caseMinus').addEventListener('click', function(){
//     handleCaseChange(false);
// })

// function handleCaseChange(increase){
//     const caseInput = document.getElementById('caseInput');
//     const caseCount = parseFloat(caseInput.value);
//     let caseNewCount = caseCount;
//     if(increase == true){
//         caseNewCount = caseCount + 1
//     }
//     if(increase == false && caseCount > 0){
//         caseNewCount = caseCount - 1
//     }
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('casePrice').innerText = casePrice;
// }


// document.getElementById('caseMinus').addEventListener('click', function(){
//     const caseInput = document.getElementById('caseInput');
//     const caseCount = parseFloat(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('casePrice').innerText = casePrice;
// })
// document.getElementById('caseMinus').addEventListener('click', function(){
//     const caseInput = document.getElementById('caseInput');
//     const caseCount = parseFloat(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const casePrice = caseNewCount * 59;
//     document.getElementById('casePrice').innerText = casePrice;
// })