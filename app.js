let calculate = document.querySelector("#Calculate");
calculate.addEventListener("click" , ()=>{
    let totalbill = document.querySelector("#totalBill").value;
    let totalpercent = document.querySelector("#tipPercent").value;
    let split = document.querySelector("#split").value;

    if(totalbill === '' || totalpercent ==0 || split == 0){
        alert("Please enter value");
        return;
    }
    let total = (totalbill + totalpercent) /split;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
})