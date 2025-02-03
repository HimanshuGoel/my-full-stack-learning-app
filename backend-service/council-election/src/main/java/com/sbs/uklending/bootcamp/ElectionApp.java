package com.sbs.uklending.bootcamp;

import java.io.FileNotFoundException;
import java.util.*;

/**
 * This class should work out who won.
 */
public class ElectionApp {

    public static void main(String[] args) throws FileNotFoundException {
        var fileName = "election_results.txt";
        var candidates = CandidateParser.parseCandidates(fileName);

        var committee = new ElectionCommittee();
        var topNumber = 5;
        var topWinners = committee.getTopNWinners(candidates, topNumber);

        committee.printWinners(topWinners);
    }
}
