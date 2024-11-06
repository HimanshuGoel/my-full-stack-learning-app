import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-leak-simulation',
  templateUrl: './memory-leak-simulation.component.html',
  styleUrls: ['./memory-leak-simulation.component.scss'],
})
export class MemoryLeakSimulationComponent {
  memoryLeakArray!: string[][];
  leakInterval!: ReturnType<typeof setInterval> | null;

  constructor() {}

  startLeak() {
    if (this.leakInterval) return; // Prevent multiple intervals

    this.leakInterval = setInterval(() => {
      // Creating objects and pushing them to the array to simulate memory leak
      for (let i = 0; i < 1000; i++) {
        this.memoryLeakArray.push(new Array(1000).fill('memory leak'));
      }
      console.log(`Leaked objects count: ${this.memoryLeakArray.length}`);
    }, 1000);
  }

  stopLeak() {
    if (this.leakInterval) {
      clearInterval(this.leakInterval);
      this.leakInterval = null;
      console.log('Memory leak stopped');
    }
  }
}
