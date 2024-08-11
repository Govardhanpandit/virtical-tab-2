let tab_link = document.querySelectorAll(".tab_link");
let tab_content = document.querySelectorAll(".tab_content");
tab_content[0].style.display = "block";
// console.log(tab_content);
// tab_content[0].style.display = "block";
// tab_content[1].style.display = "none";
// tab_content[2].style.display = "none";

// for (i = 0; i < tab_link.length; i++) {
//   tab_link[i].addEventListener("click", () => {
//     let index = Array.prototype.indexOf.call(tab_link, this);
//     for (i = 0; i < tab_content.length; i++) {
//       tab_content[i].style.display = "none";
//     }
//     // this.style.display = "none";

//     // tab_content[index].style.display = "block";
//     console.log(index);
//     console.log(this);
//   });
// }

for (i = 0; i < tab_link.length; i++) {
  tab_link[i].addEventListener("click", function (e) {
    let index = Array.prototype.indexOf.call(tab_link, this);
    console.log(this);
    console.log(e);
    console.log(e.currentTarget);
    for (i = 0; i < tab_link.length; i++) {
      tab_link[i].classList.remove("active");
      tab_content[i].style.display = "none";
    }
    this.classList.add("active");
    // line.style.width = this.offsetWidth + "px";
    // line.style.left = this.offsetLeft + "px";
    // tab_content[i].style.display = "block";
    tab_content[index].style.display = "block";
  });
}
