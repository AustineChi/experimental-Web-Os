import React, { useState } from "react";
import { MainContainer } from "./style/main.styles";
import NavHeader from "./components/nav-header";
import Login from "./components/login";
import ToolBar from "./components/toolbar";

const App: () => JSX.Element = () => {
	const [token, setToken] = useState<boolean>(false);

	return (
		<MainContainer>
			<NavHeader />
			{!token ? (
				<Login setToken={setToken} />
			) : (
				<ToolBar setToken={setToken} />
			)}
		</MainContainer>
	);
};

export default App;
