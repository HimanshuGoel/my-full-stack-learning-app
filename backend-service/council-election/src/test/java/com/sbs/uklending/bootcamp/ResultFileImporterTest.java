package com.sbs.uklending.bootcamp;

import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;

import static org.junit.jupiter.api.Assertions.*;

public class ResultFileImporterTest {

    @Test
    public void fileWithTwoLines_successfullyImported() throws FileNotFoundException {

        var importerUnderTest = new ResultFileImporter("test_file.txt");

        var linesImported = importerUnderTest.getLines();

        assertEquals(2, linesImported.size());
        assertEquals("first line", linesImported.get(0));
        assertEquals("second line", linesImported.get(1));
    }

    @Test
    public void nonExistentFile_throwsFileNotFoundExceptionDuringConstruction() {

        assertThrows(FileNotFoundException.class,
                () -> new ResultFileImporter("non_existent_file.txt"));
    }
}
