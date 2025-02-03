package com.sbs.uklending.bootcamp;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CandidateResultTest {

  @Test
  void testGetNetVotes() {
    CandidateResult candidate = new CandidateResult("John", "Doe", 5, 200, 50);
    assertEquals(150, candidate.getNetVotes());
  }

  @Test
  void testGetFullName() {
    CandidateResult candidate = new CandidateResult("Alice", "Smith", 3, 100, 30);
    assertEquals("Alice Smith", candidate.getFullName());
  }
}
