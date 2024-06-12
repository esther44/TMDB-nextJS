import Header from "@/components/Header/header";
import { montserrat, roboto } from "@/font";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/global.scss";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${montserrat.variable}`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
