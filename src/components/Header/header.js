import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../language-selector/LanguageSelector";

const Header = ({ locale }) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<p>
					<Link href={`/${locale}`}>Movie App</Link>
				</p>
			</div>
			<nav className={styles.navigation}>
				<ul className={styles.navigation__list}>
					<li>
						<Link href={`/${locale}/series`}>Séries</Link>
					</li>
					<li>
						<Link href={`/${locale}/movies`}>Films</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.right}>
				<MovieSearch></MovieSearch>
				<Link href={`/${locale}/user/profile`}>
					<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
				</Link>
				<Link href={`/${locale}/signup`}>Inscription</Link>
				<LanguageSelector></LanguageSelector>
			</div>
		</header>
	);
};

export default Header;
