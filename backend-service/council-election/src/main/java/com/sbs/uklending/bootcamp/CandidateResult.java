package com.sbs.uklending.bootcamp;

public class CandidateResult {
    private final String firstName;
    private final String lastName;
    private final int previousYearsService;
    private final int votesFor;
    private final int votesAgainst;

    public CandidateResult(String firstName, String lastName, int previousYearsService, int votesFor, int votesAgainst) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.previousYearsService = previousYearsService;
        this.votesFor = votesFor;
        this.votesAgainst = votesAgainst;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }

    public int getNetVotes() {
        return votesFor - votesAgainst;
    }

    public int getPreviousYearsService() {
        return previousYearsService;
    }

    @Override
    public String toString() {
        return "CandidateResult{" +
                "fullName='" + getFullName() + '\'' +
                ", previousYearsService=" + previousYearsService +
                ", votesFor=" + votesFor +
                ", votesAgainst=" + votesAgainst +
                ", netVotes=" + getNetVotes() +
                '}';
    }
}
