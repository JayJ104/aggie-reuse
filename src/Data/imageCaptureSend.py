from dotenv import USERNAME, PASSWORD,HOSTNAME, CLIENT_LOC, KNOWN_HOST_PATH
import paramiko
import time
ssh_client =paramiko.SSHClient()
ssh_client.load_host_keys(KNOWN_HOST_PATH)    # replace this with the user's SSH, replace 'user' with the username of the user's windows account
ssh_client.load_system_host_keys()

ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

 # replace hostname with chosen hostname while setting up SSH on the RPI and username with the ssh username, password with the password
 
ssh_client.connect(hostname=HOSTNAME, username=USERNAME, password=PASSWORD)        

stdin, stdout, stderr = ssh_client.exec_command("raspistill -o /home/pi/Pictures/picture.jpg")   # capture a photo using raspistill

ftp_client=ssh_client.open_sftp()
time.sleep(0.01)
ftp_client.get('/home/pi/Pictures/picture.jpg',CLIENT_LOC)

ftp_client.close()
