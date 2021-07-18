package com.JSON_Bin_API.step_definitions;

import com.JSON_Bin_API.utilities.ConfigurationReader;
import io.cucumber.java.Before;

import static io.restassured.RestAssured.baseURI;

public class Hooks {
    @Before
    public void setUpApi() {

        baseURI = ConfigurationReader.get("base");

    }

}

