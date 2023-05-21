import tensorflow as tf
from PIL import Image
import paramiko
import time

KNOWN_HOST_PATH = "C:/Users/sunny/.ssh/known_hosts"
HOSTNAME = "sandeeppi.local"
USERNAME = "pi"
PASSWORD = "sandeep"

image_path= './Data/image.jpg'

ssh_client =paramiko.SSHClient()
ssh_client.load_host_keys(KNOWN_HOST_PATH)    # replace this with the user's SSH, replace 'user' with the username of the user's windows account
ssh_client.load_system_host_keys()
ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

ssh_client.connect(hostname=HOSTNAME, username=USERNAME, password=PASSWORD)        

stdin, stdout, stderr = ssh_client.exec_command("raspistill -o /home/pi/Pictures/picture.jpg")   # capture a photo using raspistill

ftp_client=ssh_client.open_sftp()
time.sleep(5)
ftp_client.get('/home/pi/Pictures/picture.jpg',image_path)

ftp_client.close()


# Load the pre-trained model
model = tf.keras.models.load_model('./Data/TrainedModel')

# Load the image you want to test
image = Image.open(image_path)
image = image.resize((224, 224))  # Resize the image to match the input size of the model
image = image.convert('RGB')  # Convert image to RGB if needed

# Preprocess the image
image_array = tf.keras.preprocessing.image.img_to_array(image)
image_array = tf.expand_dims(image_array, 0)
image_array = tf.keras.applications.mobilenet_v2.preprocess_input(image_array)

# Make predictions on the image
predictions = model.predict(image_array)
predicted_class = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=1)[0][0]

print(f'Predicted class: {predicted_class[1]} with confidence: {predicted_class[2]}')
