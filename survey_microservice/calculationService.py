from flask import Flask, request, jsonify
import hashlib

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    """ This is dummy code, TODO: replace with actual calculation """
    data = request.json
    user_answers = data.get('user_answers')
    concatenated_answers = ''.join([x.get('answer') for x in user_answers])
    hash_object = hashlib.md5(concatenated_answers.encode())
    hash_hex = hash_object.hexdigest()
    index = int(hash_hex[:8], 16) % 12
    
    zodiac_signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    zodiac_sign = zodiac_signs[index]
    result = {'zodiac': zodiac_sign, 'hash': hash_hex, 'index': index, 'hashedValue': concatenated_answers, 'userAnswers': user_answers}
    response = jsonify({"result": result})
    return response

if __name__ == '__main__':
    app.run(debug=True, port=6000)
