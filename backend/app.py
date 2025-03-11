from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    print(f"Received name: {name}, email: {email}")
    return jsonify(message=f"Received name: {name}, email: {email}")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)