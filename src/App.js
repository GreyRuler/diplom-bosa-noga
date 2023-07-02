import './App.css'
import './assets/css/google-icons.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import {Navigate} from "react-router-dom";

function App() {
	return (
		<div className='app'>
			<Header/>
			<Body/>
			<Footer/>
		</div>
	);
}

export default App;
