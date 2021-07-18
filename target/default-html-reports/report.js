$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/main.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@required_files"
    }
  ]
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.step({
  "name": "sets Content type as \"\u003cContent-Type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "sets X-Master-Key as \"\u003cX-Master-Key\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sets X-Bin-Name as \"\u003cX-Bin-Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sets X-Collection-Id as \"\u003cX-Collection-Id\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user verifies status \"\u003cStatus Code\u003e\" code",
  "keyword": "Then "
});
formatter.step({
  "name": "the user verifies message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "X-Master-Key",
        "X-Bin-Name",
        "X-Collection-Id",
        "Status Code",
        "message"
      ]
    },
    {
      "cells": [
        "application/json",
        "valid",
        "true",
        "null",
        "200",
        "N/A"
      ]
    },
    {
      "cells": [
        "application/json",
        "valid",
        "false",
        "null",
        "200",
        "N/A"
      ]
    },
    {
      "cells": [
        "application/xml",
        "valid",
        "false",
        "null",
        "400",
        "You need to pass Content-Type set to application/json"
      ]
    },
    {
      "cells": [
        "application/json",
        "invalid",
        "111",
        "null",
        "401",
        "Invalid X-Master-Key provided"
      ]
    },
    {
      "cells": [
        "application/json",
        "empty",
        "aaa",
        "null",
        "401",
        "You need to pass X-Master-Key in the header"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@required_files"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"N/A\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@required_files"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"N/A\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@required_files"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/xml\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"400\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"You need to pass Content-Type set to application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@required_files"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"111\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"401\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"Invalid X-Master-Key provided\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Required Fields for the Create Bin API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@required_files"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"empty\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"aaa\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"401\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"You need to pass X-Master-Key in the header\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Content type must be provided",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@no-contentType"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets bin name as \"any\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello444\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies IllegalArgumentException",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesIllegalArgumentException()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify body name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@name"
    }
  ]
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.step({
  "name": "sets Content type as \"\u003cContent-Type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "sets X-Master-Key as \"\u003cX-Master-Key\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sets X-Bin-Name as \"\u003cX-Bin-Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sets X-Collection-Id as \"\u003cX-Collection-Id\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "sets bin name as \"\u003cBin Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.step({
  "name": "the user verify the name in the body",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "X-Master-Key",
        "X-Bin-Name",
        "X-Collection-Id",
        "Bin Name"
      ]
    },
    {
      "cells": [
        "application/json",
        "valid",
        "true",
        "null",
        "any"
      ]
    },
    {
      "cells": [
        "application/json",
        "valid",
        "false",
        "null",
        "any"
      ]
    },
    {
      "cells": [
        "application/json",
        "valid",
        "false",
        "null",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify body name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@name"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets bin name as \"any\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verify the name in the body",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifyTheNameInTheBody()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify body name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@name"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets bin name as \"any\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verify the name in the body",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifyTheNameInTheBody()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify body name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@name"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets bin name as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"Hello333\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verify the name in the body",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifyTheNameInTheBody()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "All CRUD operations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@e2e"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is a jsonbind user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserIsAJsonbindUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets Content type as \"application/json\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sets_Content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Master-Key as \"valid\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXMasterKeyAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Bin-Name as \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets X-Collection-Id as \"null\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsXCollectionIdAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sets bin name as \"any\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.setsBinNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends Post request for \"World_111\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsPostRequestFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user gets the id of newly created post",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserGetsTheIdOfNewlyCreatedPost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends get request",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsGetRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm the id and name",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.confirm_the_id_and_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user updates the name as \"World_222\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserUpdatesTheNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends get request",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsGetRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confirm the id and name",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.confirm_the_id_and_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user deletes the bin",
  "keyword": "When "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserDeletesTheBin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"200\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sends get request",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.sendsGetRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies status \"404\" code",
  "keyword": "Then "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.the_user_verifies_status_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies message \"Bin not found or it doesn\u0027t belong to your account\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.JSON_Bin_API.step_definitions.MainStepDefs.theUserVerifiesMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});