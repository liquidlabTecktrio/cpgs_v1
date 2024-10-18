import cv2
from picamera2 import Picamera2

cap = Picamera2()
cap.start()


frame = cap.capture_array()
with open('image.jpg','w') as file:
    file.write(frame)

   
