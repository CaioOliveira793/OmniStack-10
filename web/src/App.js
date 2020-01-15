import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
	<div id="app" >
	  <aside>
		<strong>Cadastrar</strong>
		<form action="">
		  <div className="input-block">
		    <label htmlFor="github_username">Usuário do GitHub</label>
		    <input type="text" name="github_username" id="github_username" required />
		  </div>

		  <div className="input-block">
		    <label htmlFor="techs">Tecnologias</label>
		    <input type="text" name="techs" id="techs" required />
		  </div>

		  <div className="input-group">
			<div className="input-block">
			  <label htmlFor="latitude">Latitude</label>
			  <input type="text" name="latitude" id="latitude" required />
			</div>

			<div className="input-block">
			  <label htmlFor="longitude">Longitude</label>
			  <input type="text" name="longitude" id="longitude" required />
			</div>
		  </div>

		  <button type="submit">Salvar</button>
		</form>
	  </aside>
	  <main>
	  	<ul>
		  <li className="dev-item">
		  	<header>
			  <img src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4" alt="Caio Oliveira" />
			  <div className="user-info">
			  	<strong>Caio Oliveira</strong>
				<span>ReactJS, Node.js</span>
			  </div>
			</header>
			<p>user bio</p>
			<a href="https://github.com/CaioOliveira793">Acessar perfil no GitHub</a>
		  </li>
		  <li className="dev-item">
		  	<header>
			  <img src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4" alt="Caio Oliveira" />
			  <div className="user-info">
			  	<strong>Caio Oliveira</strong>
				<span>ReactJS, Node.js</span>
			  </div>
			</header>
			<p>user bio</p>
			<a href="https://github.com/CaioOliveira793">Acessar perfil no GitHub</a>
		  </li>
		  <li className="dev-item">
		  	<header>
			  <img src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4" alt="Caio Oliveira" />
			  <div className="user-info">
			  	<strong>Caio Oliveira</strong>
				<span>ReactJS, Node.js</span>
			  </div>
			</header>
			<p>user bio</p>
			<a href="https://github.com/CaioOliveira793">Acessar perfil no GitHub</a>
		  </li>
		</ul>
	  </main>
	</div>
  );
}

export default App;
