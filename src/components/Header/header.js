import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";

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
			<MovieSearch></MovieSearch>
			<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
		</header>
	);
};

export default Header;
