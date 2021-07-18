package com.JSON_Bin_API.step_definitions;

import com.JSON_Bin_API.utilities.API_Methods;
import com.JSON_Bin_API.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.HashMap;
import java.util.Map;

public class MainStepDefs {
    private String contentType;
    private String xBinName;
    private String xCollectionId;
    private String binName;
    private Response response;
    private String xMasterKey;
    private String id;
    private boolean isIllegal;
    private String sampleName;

    @Given("the user is a jsonbind user")
    public void theUserIsAJsonbindUser() {
        System.out.println("RestAssured.baseURI = " + RestAssured.baseURI);
    }

    @When("sets Content type as {string}")
    public void sets_Content_type_as(String contentType) {
        this.contentType = contentType;
    }

    @And("sets X-Master-Key as {string}")
    public void setsXMasterKeyAs(String status) {
        if (status.equalsIgnoreCase("valid")) {
            this.xMasterKey = ConfigurationReader.get("X-Master-Key");
        } else if (status.equalsIgnoreCase("invalid")) {
            this.xMasterKey = ConfigurationReader.get("X-Master-Key_invalid");
        } else if (status.equalsIgnoreCase("empty")) {
            this.xMasterKey = "";
        } else {
            this.xMasterKey = null;
        }
    }

    @And("sets X-Bin-Name as {string}")
    public void setsXBinNameAs(String xBinName) {
        this.xBinName = xBinName;
    }

    @And("sets X-Collection-Id as {string}")
    public void setsXCollectionIdAs(String xCollection) {
        this.xCollectionId = xCollection;
    }

    @When("sets bin name as {string}")
    public void setsBinNameAs(String binName) {
        this.binName = binName;
    }

    @And("sends Post request for {string}")
    public void sendsPostRequestFor(String payloadData) throws Exception {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", this.contentType);
        headers.put("X-Master-Key", this.xMasterKey);
        headers.put("X-Bin-Name", this.xBinName);
        headers.put("X-Collection-Id", this.xCollectionId);
        String payload = "{\"sample\": \"" + payloadData + "\"}";
        this.sampleName = payloadData;
        try {
            this.response = API_Methods.getPostResponse(headers, payload);
            response.prettyPrint();
        } catch (IllegalArgumentException e) {
            if (contentType.equals("")) {
                System.out.println("Illegal argument was expected, because content type is not been provided");
                this.isIllegal = true;
            } else {
                throw new Exception("Illegal Argument exception.. Check content type.. It must be application/json");
            }
        }

        System.out.println("post request");
    }

    @Then("the user verifies status {string} code")
    public void the_user_verifies_status_code(String expectedStatusCode) {
        Integer actualStatusCode = this.response.statusCode();
        Assert.assertEquals("BUG FOUND! Unexpected status code: " + actualStatusCode, expectedStatusCode.toString(), actualStatusCode.toString());
    }

    @And("the user verifies message {string}")
    public void theUserVerifiesMessage(String message) {
        JsonPath jsonPath = response.jsonPath();
        String actual = jsonPath.getString("message");
        if (!message.equals("N/A"))
            Assert.assertEquals("BUG FOUND! Unexpected message: -- " + actual, message, actual);
    }

    @Then("the user verifies IllegalArgumentException")
    public void theUserVerifiesIllegalArgumentException() {
        Assert.assertTrue(isIllegal);
    }

    @And("the user verify the name in the body")
    public void theUserVerifyTheNameInTheBody() {
        JsonPath jsonPath = response.jsonPath();
        String actual = jsonPath.getString("metadata.name");
        String expected = xBinName;
        Assert.assertEquals("!! BUG Found:  name is not matching", expected, actual);
    }

    @When("the user gets the id of newly created post")
    public void theUserGetsTheIdOfNewlyCreatedPost() {
        JsonPath jsonPath = response.jsonPath();
        id = jsonPath.getString("metadata.id");
        System.out.println("id = " + id);
    }

    @And("sends get request")
    public void sendsGetRequest() {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", this.contentType);
        headers.put("X-Master-Key", this.xMasterKey);
        headers.put("X-Collection-Id", this.xCollectionId);
        this.response = API_Methods.getGetResponse(headers, id);
        System.out.println("get request");
        this.response.prettyPrint();
        System.out.println("name = " + sampleName);
    }

    @Then("confirm the id and name")
    public void confirm_the_id_and_name() {
        String actualID = response.jsonPath().getString("metadata.id");
        String actualName = response.jsonPath().getString("record.sample");
        Assert.assertEquals(this.id, actualID);
        Assert.assertEquals(this.sampleName, actualName);
    }

    @When("the user updates the name as {string}")
    public void theUserUpdatesTheNameAs(String name) {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", this.contentType);
        headers.put("X-Master-Key", this.xMasterKey);
        headers.put("X-Collection-Id", this.xCollectionId);
        String payload = "{\"sample\": \"" + name + "\"}";
        this.sampleName = name;
        this.response = API_Methods.getPutResponse(headers, payload, this.id);
        this.id = this.response.jsonPath().getString("metadata.parentId");
        System.out.println("put request");
        response.prettyPrint();
    }

    @When("the user deletes the bin")
    public void theUserDeletesTheBin() {
        Map<String, String> headers = new HashMap<>();
        headers.put("Content-Type", this.contentType);
        headers.put("X-Master-Key", this.xMasterKey);
        headers.put("X-Collection-Id", this.xCollectionId);
        this.response = API_Methods.getDeleteResponse(headers, this.id);
        System.out.println("delete request");
        response.prettyPrint();
    }
}
