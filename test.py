import cv2

cap = cv2.VideoCapture(0)  # Try changing the index if needed

if not cap.isOpened():
    print("Error: Camera not accessible")
else:
    ret, frame = cap.read()
    if ret:
        # cv2.imshow("Captured Frame", frame)
        # cv2.waitKey(0)
        print('got the frame')
    else:
        print("Error: Frame not captured")

cap.release()
# cv2.destroyAllWindows()
