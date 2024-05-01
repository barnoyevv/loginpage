function submit() {
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value
	if (username === "admin") {
		if (password === "1234") {
			alert("SUCCESS")
		}else {
			alert("Password is wrong")
		}
	}else if(password === "1234") {
		alert("Username is wrong")
	}else {
		alert("Username and password is wrong")
	}
}

function isShow() {
	let password = document.getElementById("password")
	if (password.type === "text") {
		password.type = "password"
	}else {
		password.type = "text"
	}
}