import React from "react";
import "./App.sass";
import FormInput from "./components/FormInput";

//import InputField from "./components/InputField";

function App() {
	return (
		<div className="App">
			<header>
				<h1>Learn to code by watching others</h1>
				<p>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</header>
			<div className="Form">
				<h2 className="Form-Header">
					<span>Try it free 7 days</span> then $20/mo. thereafter
				</h2>
				<div className="Form-Wrap">
					<FormInput />
					<p className="Form-Disclaimer">
						By clicking the button, you agree that this is{" "}
						<span>complety fake</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
