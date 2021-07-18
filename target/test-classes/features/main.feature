@all
Feature:


  @required_files
  Scenario Outline: Required Fields for the Create Bin API
    Given the user is a jsonbind user
    When sets Content type as "<Content-Type>"
    And sets X-Master-Key as "<X-Master-Key>"
    And sets X-Bin-Name as "<X-Bin-Name>"
    And sets X-Collection-Id as "<X-Collection-Id>"
    And  sends Post request for "Hello333"
    Then the user verifies status "<Status Code>" code
    And the user verifies message "<message>"
    Examples:
      | Content-Type     | X-Master-Key | X-Bin-Name | X-Collection-Id | Status Code | message                                               |
      | application/json | valid        | true       | null            | 200         | N/A                                                   |
      | application/json | valid        | false      | null            | 200         | N/A                                                   |
      | application/xml  | valid        | false      | null            | 400         | You need to pass Content-Type set to application/json |
      | application/json | invalid      | 111        | null            | 401         | Invalid X-Master-Key provided                         |
      | application/json | empty        | aaa        | null            | 401         | You need to pass X-Master-Key in the header           |


  @no-contentType
  Scenario: Content type must be provided
    Given the user is a jsonbind user
    When sets Content type as ""
    And sets X-Master-Key as "valid"
    And sets X-Bin-Name as "true"
    And sets X-Collection-Id as "null"
    When sets bin name as "any"
    And  sends Post request for "Hello444"
    Then the user verifies IllegalArgumentException


  @name
  Scenario Outline: Verify body name
    Given the user is a jsonbind user
    When sets Content type as "<Content-Type>"
    And sets X-Master-Key as "<X-Master-Key>"
    And sets X-Bin-Name as "<X-Bin-Name>"
    And sets X-Collection-Id as "<X-Collection-Id>"
    When sets bin name as "<Bin Name>"
    And  sends Post request for "Hello333"
    Then the user verifies status "200" code
    And the user verify the name in the body
    Examples:
      | Content-Type     | X-Master-Key | X-Bin-Name | X-Collection-Id | Bin Name |
      | application/json | valid        | true       | null            | any      |
      | application/json | valid        | false      | null            | any      |
      | application/json | valid        | false      | null            |          |


  @e2e
  Scenario: All CRUD operations
    Given the user is a jsonbind user
    When sets Content type as "application/json"
    And sets X-Master-Key as "valid"
    And sets X-Bin-Name as "true"
    And sets X-Collection-Id as "null"
    When sets bin name as "any"
    And  sends Post request for "World_111"
    Then the user verifies status "200" code
    When the user gets the id of newly created post
    And sends get request
    Then the user verifies status "200" code
    And confirm the id and name
    When the user updates the name as "World_222"
    And sends get request
    Then the user verifies status "200" code
    And confirm the id and name
    When the user deletes the bin
    Then the user verifies status "200" code
    And sends get request
    Then the user verifies status "404" code
    And the user verifies message "Bin not found or it doesn't belong to your account"