import cv2
from picamera2 import Picamera2

cap = Picamera2()
cap.start()

# import cv2
import time

# Set up video capture (0 for the default camera)
# cap = cv2.VideoCapture(0)

# Define video codec and create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('output.avi', fourcc, 20.0, (640, 480))

# Capture video for 5 seconds
start_time = time.time()
while int(time.time() - start_time) < 5:
    frame = cap.capture_array()

   
    # Write the frame to the video file
    out.write(frame)

    # Display the frame (optional)
    # cv2.imshow('frame', frame)

    # Press 'q' to exit early
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


# Release the camera and close the window
cap.release()
out.release()
cv2.destroyAllWindows()
