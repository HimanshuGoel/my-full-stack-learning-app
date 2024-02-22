export function getMoviesByDirector(directorId: number): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = directorId > 0;
      if (condition) {
        resolve(['a', 'b']);
      } else {
        reject('Error occurred');
      }
    }, 2000);
  });
  return p;
}

function main() {
  getMoviesByDirector(1)
    .then(
      (movies) => {
        console.log(movies);
        return movies.length;
      },
      (reason) => {
        console.log(reason);
        return 0;
      }
    )
    .then((numOfMovies) => console.log(numOfMovies))
    .catch((error) => {
      console.log(error);
    });
}
