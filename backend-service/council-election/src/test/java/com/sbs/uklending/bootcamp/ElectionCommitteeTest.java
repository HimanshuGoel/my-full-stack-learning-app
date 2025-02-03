package com.sbs.uklending.bootcamp;

import org.junit.jupiter.api.Test;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ElectionCommitteeTest {

  @Test
  void testGetTopNWinners() {
    var candidates = List.of(
        new CandidateResult("Alice", "Smith", 3, 200, 50), // Net: 150
        new CandidateResult("Bob", "Brown", 7, 250, 100),  // Net: 150, higher years of service
        new CandidateResult("Charlie", "Davis", 5, 300, 100), // Net: 200
        new CandidateResult("David", "Jones", 2, 100, 50) // Net: 50
    );

    var committee = new ElectionCommittee();
    var topWinners = committee.getTopNWinners(candidates, 2);

    assertEquals(2, topWinners.size());
    assertEquals("Charlie Davis", topWinners.get(0).getFullName());
    assertEquals("Bob Brown", topWinners.get(1).getFullName()); // Bob has more experience than Alice
  }

  @Test
  void testGetTopNWinnersWithZeroN() {
    var committee = new ElectionCommittee();
    var topWinners = committee.getTopNWinners(List.of(), 0);
    assertTrue(topWinners.isEmpty());
  }

  @Test
  void testGetTopNWinnersWithEmptyList() {
    var committee = new ElectionCommittee();
    var topWinners = committee.getTopNWinners(List.of(), 5);
    assertTrue(topWinners.isEmpty());
  }
}
