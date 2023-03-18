from flask import make_response, Request

def createResponse(content = "None", status = 200, corsOrigin = "http://localhost:3000", corsHeaders = "GET", preflight = False):
    resp = make_response(content)
    resp.headers['Access-Control-Allow-Origin'] = corsOrigin
    resp.headers['Access-Control-Allow-Methods'] = corsHeaders
    resp.headers['Content-Type'] = "application/json"
    resp.status = status

    if(preflight):
        resp.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        resp.headers.add('Access-Control-Allow-Credentials', 'true')

    return resp