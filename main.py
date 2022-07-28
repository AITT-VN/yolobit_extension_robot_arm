from yolobit_arm import *
import music
import time
from yolobit import *

arm = Arm(pin0, pin1, pin2, pin3)
arm.origin()

for count in range(3):
    music.play(['G3:1'], wait=True)
    time.sleep_ms(100)

display.show(Image.YES)
