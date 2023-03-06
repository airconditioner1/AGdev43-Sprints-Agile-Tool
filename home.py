from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route('/index.html')
def Login():
    with open("index.html") as f:
        html = f.read()
    return html

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
