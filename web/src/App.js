import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
  	navigator.geolocation.getCurrentPosition(
		(position) => {
		  const { latitude, longitude } = position.coords;

		  setLatitude(latitude);
		  setLongitude(longitude);
		},
		(error) => {
		  console.warn(error);
		},
		{ timeout: 30000 }
	  );
  }, []);

  async function handleAddDev(e) {
	e.preventDefault();
	const response = await api.post('/devs', {
	  github_username,
	  techs,
	  latitude,
	  longitude
	});

	console.log(response.data);
  }

  return (
	<div id="app" >
	  <aside>
		<strong>Cadastrar</strong>
		<form onSubmit={handleAddDev}>
		  <div className="input-block">
		    <label htmlFor="github_username">Usuário do GitHub</label>
		    <input
			  type="text"
			  name="github_username"
			  id="github_username"
			  value={github_username}
			  onChange={e => setGithubUsername(e.target.value)}
			  required
			/>
		  </div>

		  <div className="input-block">
		    <label htmlFor="techs">Tecnologias</label>
		    <input
			  type="text"
			  name="techs"
			  id="techs"
			  value={techs}
			  onChange={e => setTechs(e.target.value)}
			  required
			/>
		  </div>

		  <div className="input-group">
			<div className="input-block">
			  <label htmlFor="latitude">Latitude</label>
			  <input
			    type="number"
				name="latitude"
				id="latitude"
				value={latitude}
				onChange={e => setLatitude(e.target.value)}
				required
			  />
			</div>

			<div className="input-block">
			  <label htmlFor="longitude">Longitude</label>
			  <input
			    type="number"
				name="longitude"
				id="longitude"
				value={longitude}
				onChange={e => setLongitude(e.target.value)}
				required
			  />
			</div>
		  </div>

		  <button type="submit">Salvar</button>
		</form>
	  </aside>
	  <main>
	  	<ul>
		  <li className="dev-item">
		  	<header>
			  <img
			    src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4"
			    alt="Caio Oliveira"
			  />
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
			  <img
			    src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4"
				alt="Caio Oliveira"
			  />
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
			  <img
			    src="https://avatars1.githubusercontent.com/u/49573894?s=460&v=4"
				alt="Caio Oliveira"
			  />
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
