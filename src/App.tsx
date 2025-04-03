import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Button, Typography } from "@mui/material";
import Home from "./components/home";
import About from "./components/about";

function App() {
	return (
		<>
			{/* Navigation Bar */}
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" sx={{ flexGrow: 1 }}>
						My Website
					</Typography>
					<Button color="inherit" component={Link} to="/">Home</Button>
					<Button color="inherit" component={Link} to="/about">About</Button>
				</Toolbar>
			</AppBar>

			{/* Main Content */}
			<Container sx={{ mt: 4 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
