"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";

export const MovieSearch = () => {
	const [movieResults, setMovieResults] = useState([]);
	const [hasFocus, setHasFocus] = useState(false);

	const updateMovieSearch = async (query) => {
		const response = await fetch(`/api/movies/search?query=${query}`);
		console.log(response);
		const { results } = await response.json();
		setMovieResults(results.filter((movie) => movie.backdrop_path));
	};

	// DebounceInput : Pour ne pas faire d'appels à chaque fois qu'on tape une caractère -->

	return (
		<div className={styles.container}>
			<DebounceInput
				placeholder="Rechercher un titre..."
				minLength={2}
				debounceTimeout={500}
				onChange={(e) => updateMovieSearch(e.target.value)}
				onBlur={() => setHasFocus(false)}
				onFocus={() => setHasFocus(true)}
			></DebounceInput>
			{movieResults.length > 0 && hasFocus && (
				<MovieSearchResults movieResults={movieResults}></MovieSearchResults>
			)}
		</div>
	);
};

export default MovieSearch;
