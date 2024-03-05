interface Utility {
  title: string;
  yearReleased: number;
  streaming: boolean;
  logReview?: ReviewLogger;
}

interface ExtendedUtility extends Utility {
  volume: number;
}

// Interfaces for function types
interface StringGenerator {
  (chars: string, numbers: number): string;
}

interface ReviewLogger {
  (review: string): void;
}
