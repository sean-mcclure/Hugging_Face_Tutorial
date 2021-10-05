from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api, reqparse
from main import tokenizer, logits_to_class_names, model

app = Flask(__name__)
CORS(app)
api = Api(app=app)

parser = reqparse.RequestParser()
parser.add_argument(name="Sequences", type=str, action="append", help="The sequence to be classified", required=True)

class Inference(Resource):
    def get(self):
        args = parser.parse_args()
        sequence = tokenizer(args["Sequences"], return_tensors="tf")
        prediction = logits_to_class_names(model(sequence))
        return {"Predictions": prediction}, 200

api.add_resource(Inference, "/inference")

if __name__ == "__main__":
    app.run()