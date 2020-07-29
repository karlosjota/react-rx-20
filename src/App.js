import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    	<h1 class="display-1"	>@karlosjota</h1>
			<nav className="navbar navbar-dark bg-dark">
				<a href="#" className="text-white">
					Tasks
				</a>
			</nav>	
			<ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>	
			
		<img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
