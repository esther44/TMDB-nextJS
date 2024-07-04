import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../language-selector/LanguageSelector";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<p>
					<Link href="/">Movie App</Link>
				</p>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.navigation__list}>
					<li>
						<Link href="/series">Séries</Link>
					</li>
					<li>
						<Link href="/movies">Films</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.right}>
				<MovieSearch></MovieSearch>
				<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
				<LanguageSelector></LanguageSelector>
			</div>
		</header>
	);
};

export default Header;
