# your_app/consumers.py

import asyncio
import base64
import json
import time
from channels.generic.websocket import AsyncWebsocketConsumer
from django.shortcuts import render

# Create your views here.
import cv2
from django.http import StreamingHttpResponse
from django.shortcuts import render
from picamera2 import Picamera2



def video_stream(picam2):
   
    # Open the camera
    # camera = cv2.VideoCapture('/dev/video1')  # Change to the appropriate camera index if needed

    # Read frame from the camera
    frame = picam2.capture_array()
    # if not success:
    #     break
    # Encode the frame as JPEG
    ret, buffer = cv2.imencode('.jpg', frame)
    frame_bytes = buffer.tobytes()
    encoded_frame = base64.b64encode(frame_bytes).decode('utf-8')
    

        # Yield the base64 string
    return  f"data:image/jpeg;base64,{encoded_frame}"


class AutoCoordinateFinder(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        # data = json.loads(text_data)
        print(text_data)
        if text_data == 'get_frame':
            picam2 = Picamera2()
            picam2.start()
            while True:
                await asyncio.sleep(.2)
                await self.send(video_stream(picam2))
            picam2.stop()

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
