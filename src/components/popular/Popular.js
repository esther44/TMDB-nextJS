import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/mediaCard";
import styles from "./Popular.module.scss";
const Popular = async () => {
	const { results } = await getMovieByPath("/movie/popular");
	const popularMovies = results.slice(0, 6);
	return (
		<div>
			<h2>Les plus populaires</h2>
			<ul className={styles.container}>
				{popularMovies.map((movie) => (
					<li key={movie.id}>
						<MediaCard media={movie}></MediaCard>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Popular;
