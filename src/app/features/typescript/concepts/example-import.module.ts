import { first, twoAlias, three as threeAlias } from './example-export.module';

import * as functionsImports from './example-export2.module';

const response = functionsImports.one();
console.log(response);
