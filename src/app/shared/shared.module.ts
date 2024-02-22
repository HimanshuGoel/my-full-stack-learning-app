import { NgModule } from '@angular/core';

import { ExponentialStrengthPipe } from './pipes/example.pipe';

@NgModule({
  // Put commonly used directives, pipes, and components
  // Shared NgModules should not include providers,
  // nor should any of its imported or re-exported NgModules include providers.
  declarations: [ExponentialStrengthPipe],
  exports: [ExponentialStrengthPipe]
})
export class SharedModule {}
