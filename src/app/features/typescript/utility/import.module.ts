import { first, twoAlias, three as threeAlias } from './export.module';

import * as functionsImports from './export2.module';

const response = functionsImports.one();
console.log(response);
