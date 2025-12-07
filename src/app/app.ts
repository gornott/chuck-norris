import { Component, signal } from '@angular/core';
import { ContactOrchestrator } from './components/contact-orchestrator/contact-orchestrator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactOrchestrator],
  template: `<app-contact-orchestrator></app-contact-orchestrator>`,
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('chuck-norris');
}
