let add = document.querySelector("#Add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click",function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1; 

    if (result >10) {
        alert("Only 10 can be selected")
        result=0;
    }

    output.innerText = result ;

});

subtract.addEventListener("click",function() {
    let solution = document.querySelector("#output");
    let result = Number(solution.innerText) - 1;
    
    if (result<0) {
        result=0;
    }
     solution.innerText = result;

})
