#RUN FLASK BEHAVIOR HERE!!

#Flask Imports.
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from mongoengine import QuerySet
from htmlDoc import createResponse
import json

#Append extra files.
import sys
sys.path.append('../')

#Import routed functions.
from database.testPrompt import *
from database.database import *

app = Flask(__name__)

#Test Routes.
@app.route("/testHello/<string:text>")
def test(text):
    return createResponse(content=jsonify({"message": text}))

@app.route("/testPrompt/<string:text>")
def testImported(text):
    return jsonify(prompt(text))

@app.route("/testParams")
def testParams():
    return jsonify(request.args)

@app.route("/testUserQuery/<string:name>")
def testQuery(name):
    print(get_user_by_first_name(name).to_json())
    return get_user_by_first_name(name).to_json()

#Format for request is "(root)/testMultiRouter/<field>?param=<param>/".
@app.route("/testMultiRouter/<string:field>", methods=['GET'])
def testMultiRouter(field):
    field.replace("/", "").strip()
    testDB = {
        "first": "Pycool!",
        "second": "Pycruel..."
    }

    def allRoutes():
        return testDB

    def specificRoute(param):
        return {param: testDB[param]}

    getReqRouter = {
        "all": allRoutes,
        "specific": specificRoute,
    }

    try:
        if(field == "all"):
            return createResponse(content=jsonify(getReqRouter["all"]()), status=200)
        else:
            return createResponse(content=jsonify(getReqRouter[field](str(request.args.get('param', '')))), status=200)
    except TypeError:
        return createResponse(content=jsonify({"Error": "The requested data could not be fetched due to a type mismatch."}), status=500)
    except KeyError:
        return createResponse(content=jsonify({"Error": "The keys for the requested operation do not match with required keys."}), status=400)
    except:
        return createResponse(content=jsonify({"Error": "Invalid Request! Check headers for more information."}), status=400)

#Get User by field.
#Format for request is "(root)/api/get/user/<field>?param=<param>/".
@app.route("/api/get/user/<string:field>", methods=['GET'])
def getReqUser(field):
    field.replace("/", "").strip()

    getReqRouter = {
        "all": get_all_users,
        "firstName": get_user_by_first_name,
        "lastName": get_user_by_last_name,
        "schoolID": get_user_by_school_id,
        "email": get_user_by_email_no_domain
    }

    try:
        if(field == "all"):
            return createResponse(content=getReqRouter["all"]().to_json(), status=200)
        else:
            return createResponse(content=getReqRouter[field](str(request.args.get('param', ''))).to_json(), status=200)
    except TypeError:
        return createResponse(content=jsonify({"Error": "The requested data could not be fetched due to a type mismatch."}), status=500)
    except KeyError:
        return createResponse(content=jsonify({"Error": "The keys for the requested operation do not match with required keys.", "Keys": request.args.to_dict()}), status=400)
    except:
        return createResponse(content=jsonify({"Error": "Invalid Request! Check headers for more information."}), status=400)
    
#Get Field of Study by ID.
@app.route("/api/get/tag/<string:field>", methods=['GET'])
def getReqFieldOfStudy(field):
    field.replace("/", "").strip()

    getReqRouter = {
        "all": get_all_fields_of_study,
        "id": get_field_of_study, #Added a temporary function in database, may need to be edited.
    }

    try:
        if(field == "all"):
            return createResponse(content=getReqRouter["all"]().to_json(), status=200)
        else:
            return createResponse(content=getReqRouter[field](str(request.args.get('param', ''))).to_json(), status=200)
    except TypeError:
        return createResponse(content=jsonify({"Error": "The requested data could not be fetched due to a type mismatch."}), status=500)
    except KeyError:
        return createResponse(content=jsonify({"Error": "The keys for the requested operation do not match with required keys.", "Keys": request.args.to_dict()}), status=400)
    except:
        return createResponse(content=jsonify({"Error": "Invalid Request! Check headers for more information."}), status=400)
    
#Create/Update    
@app.route("/api/post/user/<string:field>", methods=['POST', 'OPTIONS'])
def postReqUser(field):
    field.replace("/", "").strip()

    postReqRouter = {
        "faculty": create_teacher,
        "student": create_student,
    }

    if(request.method == "OPTIONS"):
        try:
            return createResponse(content=jsonify({"Status": "Preflight Success"}), status=200, corsHeaders="POST,OPTIONS", preflight=True)
        except:
            return createResponse(content=jsonify({"Error": "Preflight request failed!"}), status=400)
    else:
        data = request.get_json()

        try:
            postReqRouter[field](
                str(data['first_name']),
                str(data['last_name']),
                str(data['user_pass']),
                str(data['school_id']),
                str(data['email'])
            )
            return createResponse(content=jsonify({"Status": "Success"}), status=200, corsHeaders="POST,OPTIONS")
        except TypeError:
            return createResponse(content=jsonify({"Error": "The requested data could not be fetched due to a type mismatch."}), status=500)
        except KeyError:
            return createResponse(content=jsonify({"Error": "The keys for the requested operation do not match with required keys.", "Keys": data}), status=400)
        except:
            return createResponse(content=jsonify({"Error": "Invalid Request! Check headers for more information."}), status=400)

@app.route("/api/post/account/<string:field>", methods=['POST', 'OPTIONS'])
def postReqAccount(field):
    field.replace("/", "").strip()

    postReqRouter = {
        "changePassword": change_password,
    }

    if(request.method == "OPTIONS"):
        try:
            return createResponse(content=jsonify({"Status": "Preflight Success"}), status=200, corsHeaders="POST,OPTIONS", preflight=True)
        except:
            return createResponse(content=jsonify({"Error": "Preflight request failed!"}), status=400)
    else:
        data = request.get_json()

        try:
            postReqRouter[field](
                str(data['email']),
                str(data['new_password'])
            )
            return createResponse(content=jsonify({"Status": "Success"}), status=200, corsHeaders="POST,OPTIONS")
        except TypeError:
            return createResponse(content=jsonify({"Error": "The requested data could not be fetched due to a type mismatch."}), status=500)
        except KeyError:
            return createResponse(content=jsonify({"Error": "The keys for the requested operation do not match with required keys.", "Keys": data}), status=400)
        except:
            return createResponse(content=jsonify({"Error": "Invalid Request! Check headers for more information."}), status=400)


