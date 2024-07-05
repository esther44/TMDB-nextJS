import Link from "next/link";
import styles from "./Genres.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
import { getDictionary } from "@/utils/dictionnaries";

export const Genres = async ({ locale }) => {
	const { genres } = await getMovieByPath("/genre/movie/list", [], locale);
	const i18n = await getDictionary(locale);
	return (
		<div>
			<h2>{i18n.genres.title}</h2>
			<ul className={styles.container}>
				{genres.map((genre) => (
					<li key={genre.id} className={styles.genre}>
						<Link href={`/movies/genres/${genre.id}`}>{genre.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Genres;
