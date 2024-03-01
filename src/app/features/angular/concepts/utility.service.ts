export class UtilityService {
  main() {
    this.printMovieInfo('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison');
  }

  isString(value: any) {
    return typeof value === 'string' || String.prototype.isPrototypeOf(value);
  }

  isAbsent(value: any) {
    // Equivalent to value === undefined || value === null
    return value == null;
  }

  areEqualIgnoreCase(str1: string, str2: string) {
    return str1.toUpperCase() === str2.toUpperCase();
  }

  truncate(value: string) {
    const maxLength = 40;
    if (value.length <= maxLength) {
      return value;
    }
    return value.slice(0, maxLength) + '...';
  }

  valueAt(str: string, index: number) {
    return str.at(index);
  }

  // Using rest parameter, for-of loop
  printMovieInfo(title: string, yearReleased: number, ...cast: string[]) {
    console.log(title);
    console.log(yearReleased);

    for (const name of cast) {
      console.log(name);
    }
  }
}
