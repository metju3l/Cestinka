import Head from "next/head";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>Češtinka</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="main">
				{children}
			</main>
		</>
	);
}

export default Layout;
