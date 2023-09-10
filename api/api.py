import time
from flask import Flask, request

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/username', methods=['POST', 'GET', 'PUT'])
def get_current_username():
    if request.method == 'POST' or 'PUT':
        try:
            data = request.form.to_dict()
            write_to_file(data)
            return 'Done!'
        except:
            return 'Did not save to Database'
    else:
        return 'somethings wrong'

def write_to_file(data):
    with open('database.txt', 'a') as database:
        username = data['email']
        file = database.write(f'\n{username}')

    # elif request.method == 'GET':
    #     return {'username': username}

