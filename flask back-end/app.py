from flask import Flask, render_template, request, redirect, url_for, session, make_response
import json, jsonify
import placeholders as dbret
import dbservices.sqlconnect as sqlconn
import traceback
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # enable CORS for all routes
app.secret_key = 'thisisacomplicatedkey'

# Visual element, for noobs only
@app.route("/")
def index():
    return render_template("index.html")

# test api endpoint
@app.route('/api')
def api():
    return{'hello' : 'world'}, 200, { 'Access-Control-Allow-Origin': '*' }

# post query to set variables once
@app.route('/post/variables', methods=['POST'])
def post_variables():
    querystr = request.json
    print(querystr)
    vars = []
    try:
        session['hostname'] = querystr.get('hostname')
        vars.append(session['hostname'])
        session['portnum'] = querystr.get('portnum')
        vars.append(session['portnum'])
        session['query'] = querystr.get('query')
        vars.append(session['query'])
        session['user'] = querystr.get('user')
        vars.append(session['user'])
        session['password'] = querystr.get('password')
        vars.append(session['password'])
        session['database'] = querystr.get('database')
        vars.append(session['database'])
        print(vars)
    except Exception:
        traceback.print_exc()
    
    dbresponse = sqlconn.main(hostname=session["hostname"], portnum=session['portnum'], query=session['query'])
    jsonresponse = json.dumps({"data":"Success", "status":200, "response":"Accepted", "variables": str(vars)})
    # return jsonresponse, 200, { 'Access-Control-Allow-Origin': '*' }
    return dbresponse, 200, { 'Access-Control-Allow-Origin': '*' }


# get endpoint for any queries. Need to validate queries soon.
@app.route('/get/select', methods=['GET'])
def get_select():
    
    dbresponse = sqlconn.main(hostname=session["hostname"], portnum=session['portnum'], query=session['query'])
    return dbresponse, 200, { 'Access-Control-Allow-Origin': '*' }

# test query for dummy data
@app.route('/test/select', methods=['GET', 'POST'])
def test_select():
    if (request.method == 'POST'):
        querystr = request.json
        print(querystr)
        session['hostname'] = querystr.get('hostname')
        session['portnum'] = querystr.get('portnum')
        session['query'] = querystr.get('query')
        print(session['hostname'], session['portnum'], session['query'])
        
        jsonresponse = json.dumps({"data":"Success", "status":200, "response":"Accepted", 
                                   "hostname":session['hostname'], "postnum":session['portnum'], "query":session['query']})
        return jsonresponse
    
    
    return json.loads(dbret.task_json_str), 200, { 'Access-Control-Allow-Origin': '*' }


# test query for dummy data
@app.route('/test/insert', methods=['GET', 'POST'])
def test_insert():
    if (request.method == 'GET'):
        return json.loads(dbret.simple_json)
    return json.loads(dbret.session_json_str), 200, { 'Access-Control-Allow-Origin': '*' }

# postman test, should work with linked postman code.
@app.route('/postmantest', methods=['GET'])
def postman():

    querystr = request.json
    print(querystr)
    host = querystr.get('hostname')
    port = querystr.get('portnum')
    query = querystr.get('query')
    user = querystr.get('user')
    password = querystr.get('password')
    database = querystr.get('database')
    print(host, port, query, user, password)
    dbresponse = sqlconn.main(host, port, query, user, password, database)
    print(type(dbresponse))
    return dbresponse, 200, { 'Access-Control-Allow-Origin': '*' }

if __name__=='__main__':
    app.run(port=5238)