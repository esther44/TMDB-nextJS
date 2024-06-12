import Link from "next/link";
import styles from "./Genres.module.scss";
import { getMovieByPath } from "@/utils/movieClient";
export const Genres = async () => {
	const { genres } = await getMovieByPath("/genre/movie/list");
	return (
		<div>
			<h2>Parcourir par genres</h2>
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
