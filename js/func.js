function viewBrides(val){
    console.log(val);
    var x = document.getElementById("thumbnails").style.display='block';
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}