import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../media-card/mediaCard";
import styles from "./Popular.module.scss";
import { getDictionary } from "@/utils/dictionnaries";
const Popular = async ({ locale }) => {
	const { results } = await getMovieByPath("/movie/popular", [], locale);
	const i18n = await getDictionary(locale);
	const { genres } = await getMovieByPath("/genre/movie/list");
	const popularMovies = results.slice(0, 6);
	return (
		<div>
			<h2>{i18n.popular.title}</h2>
			<ul className={styles.container}>
				{popularMovies.map((movie) => (
					<li key={movie.id}>
						<MediaCard
							media={movie}
							genres={genres}
							locale={locale}
						></MediaCard>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Popular;
