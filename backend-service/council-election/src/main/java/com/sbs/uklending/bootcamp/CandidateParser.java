package com.sbs.uklending.bootcamp;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CandidateParser {
    private static final Pattern PATTERN = Pattern.compile("(.+?)\\s+(\\d+)\\s+(\\d+)\\s+(\\d+)$");

    public static List<CandidateResult> parseCandidates(String fileName) throws FileNotFoundException {

        var importer = new ResultFileImporter(fileName);
        var lines = importer.getLines();
        return lines.stream().skip(1)
                .map(String::trim)
                .map(PATTERN::matcher)
                .filter(Matcher::matches)
                .map(matcher -> {
                    var fullName = matcher.group(1);
                    var nameParts = fullName.split(" ", 2);
                    var firstName = nameParts[0];
                    var lastName = (nameParts.length > 1) ? nameParts[1] : "";

                    var previousYearsService = Integer.parseInt(matcher.group(2));
                    var votesFor = Integer.parseInt(matcher.group(3));
                    var votesAgainst = Integer.parseInt(matcher.group(4));

                    return new CandidateResult(firstName, lastName, previousYearsService, votesFor, votesAgainst);
                }).toList();
    }
}
