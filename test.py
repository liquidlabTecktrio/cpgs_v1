import cv2
camera = cv2.VideoCapture()


def load_next_frame():
    '''
    Frame will be assigned with a latest camera frame or image
    '''
    if not camera.isOpened():
        print('Camera not found')
        return False
    else:
        __, frame = camera.read()
        return True
    

while True:
    load_next_frame()