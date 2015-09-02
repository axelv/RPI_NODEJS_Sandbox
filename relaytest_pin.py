import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

input = 5

GPIO.setup(input, GPIO.OUT)

GPIO.output(input, 0)
