package com.sbs.uklending.bootcamp;

import java.util.List;
import java.util.*;

public class ElectionCommittee {
    public List<CandidateResult> getTopNWinners(List<CandidateResult> candidates, int n) {
        if (candidates == null || candidates.isEmpty() || n <= 0) {
            return Collections.emptyList();
        }

        return candidates.stream()
                .sorted(Comparator.comparingInt(CandidateResult::getNetVotes)
                        .thenComparingInt(CandidateResult::getPreviousYearsService)
                        .reversed())
                .limit(n)
                .toList();
    }

    public void printWinners(List<CandidateResult> winners) {
        if (winners.isEmpty()) {
            System.out.println("No winner determined.");
            return;
        }

        System.out.println("Top " + winners.size() + " Winner(s):");
        int rank = 1;
        for (CandidateResult winner : winners) {
            System.out.println("Winner #" + rank + ": " + winner.getFullName() + " with Net Votes: " + winner.getNetVotes());
            rank++;
        }
    }
}
