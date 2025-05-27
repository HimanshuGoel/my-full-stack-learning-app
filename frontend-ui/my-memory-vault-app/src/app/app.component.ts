import { RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-memory-vault-app';
  textMemories = [
    {
      id: 1,
      dateTime: new Date('2023-10-01T12:00:00Z'),
      title: 'My first memory',
      text: 'Today I finally finished the migration to Pulumi, and I feel like I have unlocked a new level…',
    },
    {
      id: 2,
      dateTime: new Date('2023-10-02T12:00:00Z'),
      title: 'My second memory',
      text: 'I am so happy to be able to use Pulumi for my infrastructure as code needs. It is so much better than Terraform.',
      tags: ['pulumi', 'infrastructure'],
    },
  ];
}
