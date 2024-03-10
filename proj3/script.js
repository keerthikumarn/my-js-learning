var courses = [
        {
            name: "Complete Java 1.8",
            price: "3.5"
        }, 
        {

            name: "Complete JS Tutorial",
            price: "3.1"
        }, 
        {
            name: "Complete React Tutorial",
            price: "2.7"
        },
];

function generateCourseList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
  
      const name = document.createTextNode(course.name);
      li.appendChild(name);
  
      const span = document.createElement("span");
      span.classList.add("float-right");
      const price = document.createTextNode("$ " + course.price);
      span.appendChild(price);
  
      li.appendChild(span);
      ul.appendChild(li);
    });
  }

//generateCourseList();

window.addEventListener("load", generateCourseList);

const buttonAsc = document.querySelector(".sort-btn-asc");
const buttonDesc = document.querySelector(".sort-btn-desc");

buttonAsc.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateCourseList();
});

buttonDesc.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    generateCourseList();
});