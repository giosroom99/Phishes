# using flask_restful
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import re
from flask_cors import CORS
import pickle as pickle

app= Flask(__name__)
CORS(app) 

class DataProcessor:
  def __init__(self, data):
    self.data = data
  
  def clean_data(self):
      user_email_data = self.data  # Access the instance variable
      user_email_data = user_email_data.replace("Subject:", "")
      user_email_data = user_email_data.lower()
      cleaned_data = re.sub("[^a-z0-9_\-.]+", " ", user_email_data)
      return cleaned_data

  def predict_result(self,model,preprocessed_email):
    # Predict using the model
    predicted_label = model.predict(preprocessed_email)
    probability_scores = model.predict_proba(preprocessed_email)

    # get probability score and convert to % 
    probability_not_spam =round(probability_scores[0][0]*100,2) 
    probability_spam = round(probability_scores[0][1]*100,2)
    is_spam = predicted_label[0] == 1

    result = {
        "probability_not_spam": probability_not_spam,
        "probability_spam": probability_spam,
        "label": str(is_spam)
    }
    return result
  
    
  def compare(self):
    
    pass

  def update_data_set(self):
    input_email =  self.data
    
    pass


  def update_model(self, model_path):
    
    pass

  def print_cons(data):
    print("Print function")
    print(data.data)


def load_model(model_path):
    with open(model_path, 'rb') as model_file:
        model = pickle.load(model_file)
    return model




@app.route('/home/',methods=['GET'])
def home():
    return "Home page"


@app.route('/check-email',methods=['POST','GET'])    
def is_it_Spam():
    data = request.data.decode('utf-8')
    
    processor = DataProcessor(data )
    cleaned_data = processor.clean_data()
    
    model = load_model("model/phishie_1.pkl")
    
    print("## TEST")
    # Use model to predict spam or not
    prediction = processor.predict_result(model,[cleaned_data])
    
    prediction['email'] =data
    
    print(prediction)
    # Mock output
    return jsonify(
      prediction
    )

@app.route('/print',methods=['POST','GET'])
def print_console():
    
    return jsonify({'Greet':'Hello Jimmy',
                    'address':'India'})
    

@app.route('/user-feedback',methods=['POST'])
def get_user_feedback():
    data = request.data.decode('utf-8')
    
    processor = DataProcessor(data)
    cleaned_data = processor.clean_data()
    
    return True
    


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
    


