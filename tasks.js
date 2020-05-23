var n=0; //for count of items in list
var mylist = document.getElementsByTagName("LI");
var i;
var count=document.getElementById("count");
var close = document.getElementsByClassName("close");

document.addEventListener("keydown", function (event) {
    var keyValue = event.key;
    if(keyValue=="Enter")
        newElement();
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" icon
function newElement() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("Input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') 
  {
    alert("Please write something before adding!");
  }
   else
   {
    document.getElementById("task-items").appendChild(li);
    n++;
    count.textContent="TOTAL: "+n+" tasks";
  }
  document.getElementById("Input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      n--;
      count.textContent="TOTAL: "+n+" tasks";
    }
  }
}
