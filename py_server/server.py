from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def hla_testing():
    data = request.json()
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

    return jsonify(responseData)


if __name__ == '__main__':
    app.run(debug=True)

# family_1 = {
#     "donor":{
#         "name":"Ushnish",
#         "genes": {
#             "A":["02:01:01G","74:03:01G"],
#             "B":["15:25:01G","53:01:01G"],
#             "C":["15:25:01G","53:01:01G"],
#             "DRB1":["03:01:01G","12:01:02G"],
#             "DRB345":["23:01:01G","33:01:01G"],
#             "DQB1":["05:01:01","05:01:01G"],
#             "DQA1":["03:01:01G","02:02:02G"],
#             "DPB1":["08:01:01G","08:01:01G"],
#             "DPA1":["02:01:01G","06:01:01G"]
#         }
#     },
#     "recipient":{
#         "name": "Urvashi",
#         "genes": {
#             "A":["74:03:01G","02:01:01G"],
#             "B":["16:27:01G","51:01:01G"],
#             "C":["15:25:01G","53:01:01G"],
#             "DRB1":["01:01:01G","12:01:02G"],
#             "DRB345":["25:01:01G","40:01:01G"],
#             "DQB1":["04:01:01","08:01:01G"],
#             "DQA1":["03:01:01G","02:02:02G"],
#             "DPB1":["08:01:01G","08:01:01G"],
#             "DPA1":["02:01:01G","09:01:01G"]
#         }
#     }
# }

# family_2 = {
#     "donor":{
#         "name":"Vinita",
#         "genes": {
#             "A":["01:01:01","02:03:03G"],
#             "B":["55:05:01G","53:05:01G"],
#             "C":["16:25:01G","54:01:01G"],
#             "DRB1":["01:01:01G","03:01:02G"],
#             "DRB345":["30:01:01G","32:01:01G"],
#             "DQB1":["17:27:01G","56:01:01G"],
#             "DQA1":["15:25:01G","53:01:01G"],
#             "DPB1":["23:01:01G","33:01:01G"],
#             "DPA1":["02:01:01G","06:01:01G"]
#         }
#     },
#     "recipient":{
#         "name": "Monika",
#         "genes": {
#             "A":["01:01:01","02:03:03G"],
#             "B":["05:05:01G","53:05:01G"],
#             "C":["11:25:01G","55:01:01G"],
#             "DRB1":["01:01:04G","02:01:01G"],
#             "DRB345":["32:01:01G","30:01:01"],
#             "DQB1":["19:27:01G","56:01:01G"],
#             "DQA1":["02:01:01G","06:01:01G"],
#             "DPB1":["23:01:01G","33:01:01G"],
#             "DPA1":["02:01:01G",]
#         }
#     }
# }


# hla_testing(family_1, family_2)