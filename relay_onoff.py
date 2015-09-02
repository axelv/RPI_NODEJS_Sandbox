import sys
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
argv = sys.argv
pinnr = int(argv[1])
val = int(argv[2])
print "Pin %s , value %s" % (argv[1], argv[2])
if pinnr == 1:
    pin = 5
elif pinnr == 2:
    pin = 6
elif pinnr == 3:
    pin = 13
elif pinnr == 4:
    pin = 19
else:
    quit()
GPIO.setmode(GPIO.BCM)
GPIO.setup(pin, GPIO.OUT)    
GPIO.output(pin, val)

