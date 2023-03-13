from flask import make_response, Request

def createResponse(content = "None", status = 200, corsOrigin = "http://localhost:3000", corsHeaders = "GET"):
    resp = make_response(content)
    resp.headers['Access-Control-Allow-Origin'] = corsOrigin
    resp.headers['Access-Control-Allow-Methods'] = corsHeaders
    resp.status = status
    return resp