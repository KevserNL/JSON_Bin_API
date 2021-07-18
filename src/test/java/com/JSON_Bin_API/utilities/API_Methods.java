package com.JSON_Bin_API.utilities;


import static io.restassured.RestAssured.*;
import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;
public class API_Methods {
    public static Response getPostResponse(Map<String, String> headers, String payload) {
        Map<String, String> headersNotNull = new HashMap<>();
        for (String header : headers.keySet()) {
            try {
                if (!headers.get(header).equals("null")) {
                    headersNotNull.put(header, headers.get(header));
                }
            } catch (NullPointerException n) {
                System.out.println("no such headers found");
            }
        }
        System.out.println("headersNotNull.toString() = " + headersNotNull.toString());
        return given().headers(headersNotNull)
                .and().body(payload)
                .when().post();
    }
    public static Response getGetResponse(Map<String, String> headers, String id) {
        Map<String, String> headersNotNull = new HashMap<>();
        for (String header : headers.keySet()) {
            try {
                if (!headers.get(header).equals("null")) {
                    headersNotNull.put(header, headers.get(header));
                }
            } catch (NullPointerException n) {
                System.out.println("no such headers found");
            }
        }
        System.out.println("headersNotNull.toString() = " + headersNotNull.toString());
        return given().headers(headersNotNull)
                .when().get("/" + id);
    }
    public static Response getPutResponse(Map<String, String> headers, String payload, String id) {
        Map<String, String> headersNotNull = new HashMap<>();
        for (String header : headers.keySet()) {
            try {
                if (!headers.get(header).equals("null")) {
                    headersNotNull.put(header, headers.get(header));
                }
            } catch (NullPointerException n) {
                System.out.println("no such headers found");
            }
        }
        System.out.println("headersNotNull.toString() = " + headersNotNull.toString());
        return given().headers(headersNotNull)
                .and().body(payload)
                .when().put("/" + id);
    }
    public static Response getDeleteResponse(Map<String, String> headers, String id) {
        Map<String, String> headersNotNull = new HashMap<>();
        for (String header : headers.keySet()) {
            try {
                if (!headers.get(header).equals("null")) {
                    headersNotNull.put(header, headers.get(header));
                }
            } catch (NullPointerException n) {
                System.out.println("no such headers found");
            }
        }
        System.out.println("headersNotNull.toString() = " + headersNotNull.toString());
        return given().headers(headersNotNull)
                .when().delete("/" + id);
    }
}
