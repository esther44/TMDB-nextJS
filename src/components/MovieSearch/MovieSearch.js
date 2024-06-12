"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

export const MovieSearch = () => {
	const [movieResults, setMovieResults] = useState([]);
	const updateMovieSearch = async (query) => {
		const response = await fetch(`/api/movies/search?query=${query}`);
		const { results } = await response.json();
		console.log(results);
		setMovieResults(results.filter((movie) => movie.backdrop_path));
	};

	// DebounceInput : Pour ne pas faire d'appels à chaque fois qu'on tape une caractère -->

	return (
		<div>
			<DebounceInput
				placeholder="Rechercher un titre..."
				minLength={2}
				debounceTimeout={500}
				onChange={(e) => updateMovieSearch(e.target.value)}
			></DebounceInput>
			{movieResults.length > 0 && <div></div>}
		</div>
	);
};

export default MovieSearch;
