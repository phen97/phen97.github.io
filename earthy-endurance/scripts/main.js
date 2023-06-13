const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo-1.png") {
    myImage.setAttribute("src", "images/logo-2.png");
  } else {
    myImage.setAttribute("src", "images/logo-1.png");
  }
};