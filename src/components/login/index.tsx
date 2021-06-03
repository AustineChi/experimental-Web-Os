import React, { useState } from "react";
import {
	Container,
	LoginPic,
	EmailInput,
	PasswordInput,
	InputBoxWrapper,
	SubmitButton,
	ErrorMessage,
	Text,
} from "./login.styles";

const LoginContainer = ({ setToken }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loginStep, setLoginStep] = useState<string>(null);
	const [error, setError] = useState<boolean>(false);

	const body = document.querySelector("body");
	const fullscreen = () => {
		body.requestFullscreen();
		setError(false);
	};

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password) {
			if (email === "borgoth@mordos.com" && password === "12bindthem") {
				setToken(true);
			} else {
				setEmail("");
				setPassword("");
				setError(true);
				setLoginStep(null);
			}
		} else {
			setLoginStep("password");
		}
	};

	return (
		<Container>
			<LoginPic />
			<InputBoxWrapper onSubmit={(e) => submit(e)}>
				{!loginStep ? (
					<EmailInput
						onClick={fullscreen}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				) : (
					<InputBoxWrapper direction={"column"}>
						<Text>{email}</Text>
						<PasswordInput
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputBoxWrapper>
				)}

				{email && <SubmitButton type="submit" />}
			</InputBoxWrapper>
			{error && <ErrorMessage>invalid email or password</ErrorMessage>}
		</Container>
	);
};

export default LoginContainer;
