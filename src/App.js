import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
