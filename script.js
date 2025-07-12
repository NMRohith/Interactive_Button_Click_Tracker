let button = document.getElementById("button")
let result = document.getElementById("res")


    function createcounter(){
        let count = 0;
    return function(){
        count++;
        result.innerHTML = count;
    };
}
let cnt = createcounter()
button.addEventListener("click",cnt)


