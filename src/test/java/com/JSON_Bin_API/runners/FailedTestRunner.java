package com.JSON_Bin_API.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html: target/failed-html-report"},
        features = "@target/rerun.txt",
        glue = "com/JSON_Bin_API/step_definitions"
)
public class FailedTestRunner {
}
