import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

in1 = 5
in2 = 6
in3 = 13
in4 = 19

GPIO.setup(in1, GPIO.OUT)
GPIO.setup(in2, GPIO.OUT)
GPIO.setup(in3, GPIO.OUT)
GPIO.setup(in4, GPIO.OUT)

GPIO.output(in1, 0)
GPIO.output(in2, 0)
GPIO.output(in3, 0)
GPIO.output(in4, 0)

time.sleep(5)

GPIO.output(in1, 1)

time.sleep(1)

GPIO.output(in1, 0)
GPIO.output(in2, 1)

time.sleep(1)

GPIO.output(in2, 0)
GPIO.output(in3, 1)

time.sleep(1)

GPIO.output(in3, 0)
GPIO.output(in4, 1)

time.sleep(1)

GPIO.output(in4, 0)

time.sleep(1)

GPIO.cleanup()
