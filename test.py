import cv2
import os

# Get a list of all video devices
video_devices = [f'/dev/video{i}' for i in range(32)]  # Adjust the range as necessary

def find_working_camera():
    # for device in video_devices:
        camera = cv2.VideoCapture('/dev/video2')

        camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)  # Set to a supported width
        camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)  # Set to a supported height
        if camera.isOpened():
            print(f'Found working camera at ')
            # Optional: Capture a frame to confirm it's working
            ret, frame = camera.read()
            if ret:
                print(f'Successfully captured a frame from ')
                # Display the frame or process it as needed
                # cv2.imshow(f'Camera Feed from {device}', frame)
                # cv2.waitKey(0)  # Wait for a key press to close the window
            else:
                print(f'Camera atcould not capture a frame.')
            camera.release()
        else:
            print(f'Camera at  not found.')

find_working_camera()
# cv2.destroyAllWindows()
