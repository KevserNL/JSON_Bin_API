JsonBin_Api Project

Prepared by:Kevser Cetin Karagoz
QA Test Automation Engineer
kevsercetink@gmail.com
https://www.linkedin.com/in/kevsercetinkaragoz/


- Build Tool: Maven

-Test Framework:BDD framework with Rest Assured

API Automation Testing:
https://api.jsonbin.io/v3/b

QA:
Generating test scenarios and automation framework for an End to End test.

System Requirements:
Java 1.8 + SDK Selenium Webdriver Maven Cucumber Gherkin Language Syntax JUnit Test RUN Clone the projects

Reload maven dependencies from POM

Go **src -> test > java > com > JsonBin_Api > runners > CukesRunner

Tags explanation:
@all: runs all the scenarios in the project
@end2end: All CRUD operations @name: Verify body name 
@no-contentType:Content type must be provided 
@required_files: Required Fields for the Create Bin API

Execution instructions After cloning the project please follow the below instructions:

1. Open Terminal and make sure you are in the JsonBin_Api folder by typing:
   cd ~/; cd $(find **/JsonBin_Api -type d -name JsonBin_Api)
2. Input following maven command to verify and generate report (failed build due to bug):
   mvn clean verify
3. If you want to run all the tests:
   mvn clean verify -Dcucumber.filter.tags="@all"
4. If you want to run the tests that you wish please use the tag explanation above:
   mvn clean verify -Dcucumber.filter.tags="@wantedtag"
5. Finally, to open the report directly in default browser please run:
   open target/cucumber-html-reports/overview-features.html Click run button (make sure Cukes Runner is specified as a
   runner source )

2021 July®

