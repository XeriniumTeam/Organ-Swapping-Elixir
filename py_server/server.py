from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def hla_testing():
    data = request.json
    print(data)
    family_1 = data["family_1"]
    family_2 = data["family_2"]
    pair_1 = (family_1["donor"], family_2["recipient"])
    pair_2 = (family_1["recipient"], family_2["donor"])
    pairs = [pair_1, pair_2]
    total_count = 0
    positive_count = 0
    count = 0
    hla_result = []
    for pair in pairs:
        count += 1
        for gene in pair[0]["genes"].keys():
            for i in pair[0]["genes"][gene]:
                for j in pair[1]["genes"][gene]:
                    total_count += 1
                    if i == j:
                        positive_count += 1
                        break
        if(count == 1):
            hla_result.append(positive_count/total_count)
        elif(count == 2):
            hla_result.append(positive_count/total_count)
    
    responseData = {
        "hla_1_to_2": hla_result[0],
        "hla_2_to_1" : hla_result[1]
    }
    print(jsonify(responseData))
    return jsonify(responseData)


if __name__ == '__main__':
    app.run(debug=True, port=8080)




# hla_testing(family_1, family_2)