import React, { useState } from "react";
import { MovieCard } from "shared/organisms/MovieCard";
import {fetchMovies} from "services/moviedb";

fetchMovies();
export const HomeScreen = () => {
  return (
    <div>
      <MovieCard />
    </div>
  );
};
