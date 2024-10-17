import re
import easyocr
import cv2
import SlotImages

slotImage = cv2.imread(f'SlotImages/indiapl8.webp')
slotingray = cv2.cvtColor(slotImage, cv2.COLOR_BGR2GRAY)
blured = cv2.GaussianBlur(slotingray, (5,5),0)
cv2.imshow('image original',slotImage)
cv2.imshow('image in gray',slotingray)
cv2.imshow('image in gray',blured)


reg = r'[A-Z]{2}\s?[0-9]{2}[A-Z]{1}\s?[0-9]{4}'




if cv2.waitKey(10) & 0xFF == ord('q'):
    pass