import Image from "next/image";
import Link from "next/link";
import styles from "./MovieSearchResults.module.scss";

export const MovieSearchResults = ({ movieResults }) => {
	return (
		<div className={styles.searchResults}>
			{movieResults.map((movie) => (
				<div key={movie.id}>
					<Link href={`/movies/${movie.id}`}>
						<Image
							alt={movie.title}
							width={90}
							height={50}
							src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
						></Image>
						<p>{movie.title}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default MovieSearchResults;
