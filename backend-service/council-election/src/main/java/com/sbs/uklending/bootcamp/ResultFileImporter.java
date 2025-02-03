package com.sbs.uklending.bootcamp;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

/**
 * This class can read a file from the classpath and will return each line within a List.
 */
public class ResultFileImporter {
    private final URL fileResource;

    public ResultFileImporter(String filename) throws FileNotFoundException {
        fileResource = ResultFileImporter.class.getClassLoader().getResource(filename);
        if(fileResource == null) {
            throw new FileNotFoundException("%s cannot be found".formatted(filename));
        }
    }

    /**
     *
     * @return the list of lines in the file
     */
    public List<String> getLines() {
        try {
            return Files.readAllLines(Paths.get(fileResource.toURI()), StandardCharsets.UTF_8);
        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException(e);
        }

    }
}
