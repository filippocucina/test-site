const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/lambda-png-9.png") {
    myImage.setAttribute("src", "images/turing-machine.png");
  } else {
    myImage.setAttribute("src", "images/lambda-png-9.png");
  }
};

