# your_app/consumers.py

import asyncio
import json
import time
from channels.generic.websocket import AsyncWebsocketConsumer
from django.shortcuts import render

# Create your views here.
import cv2
from django.http import StreamingHttpResponse
from django.shortcuts import render
from picamera2 import Picamera2



def video_stream():
    picam2 = Picamera2()
    picam2.start()
    # Open the camera
    # camera = cv2.VideoCapture('/dev/video1')  # Change to the appropriate camera index if needed
    while True:
        # Read frame from the camera
        frame = picam2.capture_array()
        # if not success:
        #     break
        # Encode the frame as JPEG
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        # Yield the frame
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


class AutoCoordinateFinder(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        # data = json.loads(text_data)
        print(text_data)
        if text_data == 'get_frame':
            for i in 'amal':
                await asyncio.sleep(.5)
                await self.send(video_stream())

class ManualCoordinateFinder(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        
        await self.send(text_data=json.dumps({
            'message': message
        }))

class LiveStream(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        
        await self.send(text_data=json.dumps({
            'message': message
        }))
