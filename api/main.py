from transformers import AutoTokenizer, TFAutoModelForSequenceClassification
import tensorflow as tf

import urllib.request
urllib.request.urlretrieve("https://collaboratescience.com/models/tf_model.h5", "api/distilBERT-tweet-emotion/tf_model.h5")
urllib.request.urlretrieve("https://collaboratescience.com/models/config.json", "api/distilBERT-tweet-emotion/config.json")

# Instantiating our DistilBERT tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
model = TFAutoModelForSequenceClassification.from_pretrained("api/distilBERT-tweet-emotion", num_labels=4)

# Making a dictionary with class names for conversion
class_names = {0: "anger", 1: "joy", 2: "optimism", 3: "sadness"}

# A function containing the transformation steps from above
def logits_to_class_names(predictions):
    predictions = tf.nn.softmax(predictions.logits)
    predictions = tf.argmax(predictions, axis=1).numpy()
    predictions = [class_names[prediction] for prediction in predictions]
    
    return predictions