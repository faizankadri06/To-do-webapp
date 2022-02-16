// Get Present day and date
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
document.getElementById("left").innerHTML = d.getDate()+" "+ monthNames[d.getMonth()]+"<br>"+d.getFullYear();
document.getElementById("right").innerHTML = dayNames[d.getDay()];        

// Create a "complete" button and append it to each pending list item
var myNodelist = document.getElementById("pending").getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2713");
    span.className = "complete";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on complete button to shift the item to completed list
var complete = document.getElementsByClassName("complete");
var inputValue = document.getElementById("pending").getElementsByTagName("li");
var i;
for(i = 0; i < complete.length; i++){
    complete[i].onclick=function(){ 
        var x = document.getElementsByClassName("complete");
        inputValue[0].removeChild(inputValue[0].querySelector(".complete"));
        document.getElementById("completed").appendChild(inputValue[0]);                
        var div = this.parentElement.x;
        div.style.display = "none";                    
    }         
} 

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        
    }
}

// Create a new list item when clicking on the "Save" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("title").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("pending").appendChild(li);
    }
    document.getElementById("title").value = "";

    var span1 = document.createElement("SPAN");
    var txt1 = document.createTextNode("\u2713");
    span1.className = "complete";
    span1.appendChild(txt1);
    li.appendChild(span1);

    var complete = document.getElementsByClassName("complete");
    var inputValue = document.getElementById("pending").getElementsByTagName("li");
    var i;
    for(i = 0; i < complete.length; i++){
        complete[i].onclick=function(){ 
            var x = document.getElementsByClassName("complete");
            inputValue[0].removeChild(inputValue[0].querySelector(".complete"));
            document.getElementById("completed").appendChild(inputValue[0]);
            var div = this.parentElement.x;
            div.style.display = "none";
        }          
    }
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}