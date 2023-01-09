function my_read_more() {
    // var dots = document.getElementById("dots");
    // var moreText = document.getElementById("read-more");
    // var btnText = document.getElementById("myBtn");
  
    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more"; 
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less"; 
    //   moreText.style.display = "inline";
    // }

    let showHideInfo = document.querySelector(".show-hide-info");
    showHideInfo.style.display = "inline";

    //remove the dots
    document.querySelector("#dots").style.display = "none";
  }


  let showLessBtn = document.querySelector(".showLessBtn");

  showLessBtn.addEventListener("click", function(){
    let showHideInfo = document.querySelector(".show-hide-info");
    showHideInfo.style.display = "none";

    //restore the dots
    document.querySelector("#dots").style.display = "inline";
  })