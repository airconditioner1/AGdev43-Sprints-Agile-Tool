from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    # return "Hello bruh"

@app.route('/api')
def api():
    return{'hello' : 'world'}

