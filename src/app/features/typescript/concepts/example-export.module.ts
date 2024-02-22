interface first {
  prop1: string;
}

interface two {
  prop2: string;
}

interface three {
  prop3: string;
}

export { first, two as twoAlias, three };
