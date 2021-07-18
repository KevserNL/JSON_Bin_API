package com.JSON_Bin_API.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-html-reports",
                "json:target/cucumber.json",
                "rerun:target/rerun.txt",
                "pretty"},
        features = "src/test/resources/features",
        glue = "com/JSON_Bin_API/step_definitions",
        strict = true,
        dryRun = false,
        tags = "@all"
)
public class ApiRunner {
}