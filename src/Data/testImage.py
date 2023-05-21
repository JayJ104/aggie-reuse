import tensorflow as tf
from PIL import Image
import paramiko
import time
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib
import matplotlib.pyplot as plt

KNOWN_HOST_PATH = "C:/Users/sunny/.ssh/known_hosts"
HOSTNAME = "sandeeppi.local"
USERNAME = "pi"
PASSWORD = "sandeep"

image_save_path= './src/Data/image.jpg'

ssh_client =paramiko.SSHClient()
ssh_client.load_host_keys(KNOWN_HOST_PATH)    # replace this with the user's SSH, replace 'user' with the username of the user's windows account
ssh_client.load_system_host_keys()
ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

ssh_client.connect(hostname=HOSTNAME, username=USERNAME, password=PASSWORD)        

stdin, stdout, stderr = ssh_client.exec_command("raspistill -o /home/pi/Pictures/picture.jpg -w 450 -h 450 -vf")   # capture a photo using raspistill

ftp_client=ssh_client.open_sftp()
time.sleep(7)
ftp_client.get('/home/pi/Pictures/picture.jpg',image_save_path)

ftp_client.close()

image_path = image_save_path

# Load the pre-trained model
model = tf.keras.models.load_model('./src/Data/TrainedModel')

def preprocess_image(image_path):
    image = Image.open(image_path)
    image = image.resize((224, 224))  # Adjust the size as required by your model
    image = np.array(image) / 255.0   # Normalize the image
    image = np.expand_dims(image, axis=0)  # Add an extra dimension for batch size
    return image

# Function to make predictions
def predict_image(image_path, model):
    # Preprocess the image
    image = preprocess_image(image_path)

    # Make predictions using the model
    predictions = model.predict(image)
    predicted_class = np.argmax(predictions[0])
    return predicted_class

class_list = ["dress","hat", "longsleeve", "outwear", "pants", "shirt", "shoes", "shorts", "skirt"]
# Run the image through the model
predicted_class = predict_image(image_path, model)

#print("The shown item is", class_list[predicted_class])

output_string = class_list[predicted_class]

print(output_string)

text_file_path = "./src/Data/output.txt"

with open(text_file_path, 'w') as file:
    # Write the text to the file
    file.write(output_string)
