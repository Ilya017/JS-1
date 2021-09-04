function username() {
	let pr = prompt("Введите свое имя:");
	if (pr == 'Илья') {
		alert('Ок');
	} else {
		alert('Неверное имя пользователя');
	}
}

function math() {
	let x = +prompt("Input x");
	let y = +prompt("Input y");
	if (y == 0) {
		alert("Error");
	} else {
		let z = x / y;
		alert(z);
	}
}