import { getMoviesByDirector } from './promise.class';

async function logSearchResults(directorId: number) {
  let foundMovies = await getMoviesByDirector(directorId);
  console.log(foundMovies);
}

logSearchResults(1).catch((reason) => console.log(reason));
