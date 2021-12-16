function testes() {
	return new Promise(function (resolve, reject) {
		// const erro = false;
		// const erro = true;
		setTimeout(function () {
			const erro = true;
			if(erro) {
				reject('erro...');
			} else {
				resolve("A promise foi resolvida com sucesso!");
			}
		}, 5000);
	});
}

testes().then(function (res) {
	alert(res);
}).catch(function (err) {
	alert(err);
});

async function testes2() {
	await testes2().then(function (res) {
		alert(res);
	});
	alert('Olá')
}

testes2();
