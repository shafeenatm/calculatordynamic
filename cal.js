function displaydata(data){
    r1.value+=data

}
function allclear(){
    r1.value=""
}

function evaluateexp(){
    r1.value=eval(r1.value)
}

function backspc(){
    data=r1.value
    r1.value=data.slice(0,-1)
}
