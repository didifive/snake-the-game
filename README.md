# Recriando o jogo da cobrinha com JavaScript

## Bootcamp "HTML Web Developer" - Digital Innovation One

Projeto desenvolvido com instruções de [Gabriela Pinheiro] na trilha de estudo do Bootcamp "HTML Web Developer" da [dio.me].

<p align="center">
	<img alt="Repository language count" src="https://img.shields.io/github/languages/count/didifive/snake-the-game">
	<a href="https://www.linkedin.com/in/gabrielapinheiro129/">
		<img alt="Made by Gabriela" src="https://img.shields.io/badge/made%20by-Gabriela-blue">
	</a>
	<a href="https://www.linkedin.com/in/luis-carlos-zancanela/">
		<img alt="Update by Didi" src="https://img.shields.io/badge/update%20by-Didi-green">
	</a>
	<a href="https://github.com/didifive/snake-the-game/commits/master">
		<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/didifive/snake-the-game?color=blue">
	</a>
	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

<p align="center">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=yellow&label=Dev&message=JavaScript&style=for-the-badge&logo=Javascript">
	</a>
  <a href="https://www.w3schools.com/html/">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=red&label=Dev&message=HTML5&style=for-the-badge&logo=HTML5">
	</a>
  <a href="https://www.w3schools.com/css/">
	  <img alt="Java" src="https://img.shields.io/static/v1?color=blue&label=Dev&message=CSS&style=for-the-badge&logo=CSS3">
	</a>
</p>

Link da base utilizada neste projeto: [SpruceGabriela/snake-the-game].

---

Abaixo seguem modificações feitas em relação ao projeto base:

* Aumento progressivo da velocidade conforme aumenta o tamanho, variável `jogo`;

* Correção de um bug que ocorre nos limites da tela do jogo: se a cobrinha chegou no quadro 16 indo para direita ou baixo, ou então quadro 0 indo para esquerda ou para cima, e mudar a direção, ela acabava sumindo, ficando fora da borda, com a correção isso não corre mais;

* Criação da variável `colors` para guardar as cores e facilitar a troca ou criação de paleta de cores;

* Adicionado responsividade para adaptar o tamanho conforme o tamanho da tela;

* Adicionada a opção das teclas `WASD` para movimentar também;

* Adicionado `<header>` e `<footer>` e botão de reiniciar para recarregar a página.

---

Projeto online em: [snake-game-didi.netlify.app](https://snake-game-didi.netlify.app)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/996d487a-3ed9-4c63-80f3-42667854192e/deploy-status)](https://app.netlify.com/sites/snake-game-didi/deploys)

---

Links Interessantes:

* [HTML5]
* [CSS]
* [JavaScript]
* [Netlify]
* [keycode]

[dio.me]: https://dio.me/
[Gabriela Pinheiro]: https://www.linkedin.com/in/gabrielapinheiro129/
[SpruceGabriela/snake-the-game]: https://github.com/SpruceGabriela/snake-the-game
[didifive/snake-the-game]: https://github.com/didifive/snake-the-game
[HTML5]: https://www.w3schools.com/html/
[CSS]: https://www.w3schools.com/css/
[JavaScript]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
[Netlify]: https://www.netlify.com/
[keycode]: https://keycode.info/