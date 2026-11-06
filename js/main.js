
document.querySelectorAll("button").forEach(function (item) {
  item.onclick = function () {
    var demo = document.querySelector("#demo");
    demo.style.color = item.dataset.color;
    demo.style.textAlign = item.dataset.location;
  };
});

document.querySelector("#myform").addEventListener("submit", function (event) {
  event.preventDefault();

  var input = document.querySelector("#works");
  var works = input.value.trim();
  var result = document.querySelector("#result");

  if (works === "") {
    alert("Enter Data");
    return;
  }

  var myLi = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = works;

  var deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash-can ms-3";
  deleteIcon.style.cursor = "pointer";
  deleteIcon.style.color = "red";
  deleteIcon.onclick = function () {
    myLi.remove();
  };

  myLi.append(span, deleteIcon);
  result.append(myLi);

  input.value = "";
});
