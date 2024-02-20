import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sanitization',
  templateUrl: './sanitization.component.html'
})
export class SanitizationComponent {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  dangerousUrl: string;
  trustedUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
}
