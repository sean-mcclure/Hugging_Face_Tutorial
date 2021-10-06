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
    # A method corresponding to a GET request
    def get(self):
        # Parsing the arguments we defined earlier
        args = parser.parse_args()
        
        # Tokenizing the sequence
        sequence = tokenizer(args["Sequences"], return_tensors="tf", padding=True)
        
        # Obtaining a prediction
        prediction = logits_to_class_names(model(sequence))
        
        # Returning the prediction
        return {"Predictions": prediction}, 200

api.add_resource(Inference, "/inference")

if __name__ == "__main__":
    app.run()