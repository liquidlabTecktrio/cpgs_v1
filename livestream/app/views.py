from django.shortcuts import render

# Create your views here.
import cv2
from django.http import StreamingHttpResponse
from django.shortcuts import render

def video_stream():
    # Open the camera
    camera = cv2.VideoCapture('/dev/video1')  # Change to the appropriate camera index if needed
    while True:
        # Read frame from the camera
        success, frame = camera.read()
        if not success:
            break
        # Encode the frame as JPEG
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        # Yield the frame
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

def index(request):
    return render(request, 'index.html')

def stream(request):
    return StreamingHttpResponse(video_stream(), content_type='multipart/x-mixed-replace; boundary=frame')
