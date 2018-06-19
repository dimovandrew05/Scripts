function out(){
    var p;
    p = document.getElementById("out");
    //p.innerHTML += " <b> Hello! </b>"
    //p.insertAdjacentHTML("beforeBegin","Hi!");
    //p.insertAdjacentHTML("afterBegin","Hi!");
    //p.insertAdjacentHTML("afterEnd","Hi!");
    //p.insertAdjacentHTML("beforeEnd","Hi!");
    p.outerHTML = '<div class="one"><i><h1>Hello!</h1></i></div>';
}
