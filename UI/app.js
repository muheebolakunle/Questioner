document.getElementById("comment").addEventListener("click", function(e) {
    e.preventDefault();
  });



function show(id) {
    let e = document.getElementById(id);
    e.style.display = e.style.display == "none" ? "block" : "block";
  }
  
  function hide(id) {
    let e = document.getElementById(id);
    e.style.display = e.style.display == "block" ? "none" : "none";
  }