const MYIMAGE = document.querySelector("img");

MYIMAGE.onclick = () => {
	const MYSRC = MYIMAGE.getAttribute("src");
	
	if (MYSRC === "images/lambda-png-9.png") {
		MYIMAGE.setAtrribute("src", "images/turing-machine.png");
	} else {
		MYIMAGE.setAttribute("src", "images/lambda-png-9.png");
	}
};
