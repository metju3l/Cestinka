import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
	const { data: session } = useSession({
		required: false,
	});

	if (!session) return (
		<div>
			Musíte se přihlásit.<br />
			<button onClick={() => signIn()}>Přihlásit se</button>
		</div>
	)

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	);
}

export default Layout;
