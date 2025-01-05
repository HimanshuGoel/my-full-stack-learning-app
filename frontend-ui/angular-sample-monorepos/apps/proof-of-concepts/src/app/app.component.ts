import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { SubscriptionService } from './subscriptions.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proof-of-concepts';
  subscriptions: any[] = [];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.fetchSubscriptions();
  }

  fetchSubscriptions(): void {
    this.subscriptionService.getSubscriptions().subscribe(
      (data) => {
        this.subscriptions = (data as any).data.subscriptions;
        console.log('Fetched subscriptions:', data);
      },
      (error) => {
        console.error('Error fetching subscriptions:', error);
      }
    );
  }
}
