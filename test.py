import cv2

# Attempt to capture from the camera
camera = cv2.VideoCapture('/dev/video0')
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

if not camera.isOpened():
    print("Could not open video device")
else:
    while True:
        ret, frame = camera.read()
        if ret:
            cv2.imshow('Frame', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        else:
            print("Frame not captured")
            break

camera.release()
cv2.destroyAllWindows()
 