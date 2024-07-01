import MovieDetails from "@/components/Movie-details/MovieDetails";
import SimilarMovies from "@/components/similar-movies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

export const MovieIdPage = async ({ params }) => {
	const movie = await getMovieByPath(`/movie/${params.id}`);

	if (!movie.original_title) {
		return notFound();
	}

	return (
		<div>
			<MovieDetails movie={movie}></MovieDetails>
			<Suspense fallback={<p>Chargement ...</p>}>
				<SimilarMovies movieId={movie.id} />
			</Suspense>
		</div>
	);
};

export default MovieIdPage;
