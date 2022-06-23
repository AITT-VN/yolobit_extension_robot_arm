"""
    See more Arduino code here: https://www.youtube.com/watch?v=md4RQzFbGR0
""" 
import math
import time
from yolobit import *
from machine import *
from utility import *

class Arm():

    def __init__(self, base=pin1, right=pin16, left=pin3, gripper=pin0):
        self.base = base
        self.right = right
        self.left = left
        self.gripper = gripper
        self.origin()
        say('Arm setup done!')

    def origin(self):
        self.defaultBase = 90
        self.defaultRight = 90
        self.defaultLeft = 90
        self.defaultGripper = 90
        self.base.servo_write(self.defaultBase)
        self.right.servo_write(self.defaultRight)
        self.left.servo_write(self.defaultLeft)
        self.gripper.servo_write(self.defaultGripper)
        say('Here at 0,0,0')
    
    def releases(self):
        self.base.servo_release()
        self.right.servo_release()
        self.left.servo_release()
        self.gripper.servo_release()
        say('Arm released')

    # Servo Base (Theta)
    def moveBase(self, moveToBase, speed=100):
        
        # speed of movement
        sleep = translate(speed,0,100,50,0)
        if speed == 0:
          return
        
        # limit min/max values
        if moveToBase < 0:
            moveToBase = 0
        if moveToBase > 180:
            moveToBase = 180
        
        if moveToBase > self.defaultBase:
            self.defaultBase = moveToBase
            self.base.servo_write(self.defaultBase)
        else:
            self.defaultBase = moveToBase
            self.base.servo_write(self.defaultBase)

    # Servo Gripper
    def moveGripper(self, moveToGripper, speed=100):
        
        # speed of movement
        sleep = translate(speed,0,100,50,0)
        if speed == 0:
          return
        
        # limit min/max values
        if moveToGripper  < 0:
            moveToGripper  = 0
        if moveToGripper  > 90:
            moveToGripper  = 90
        
        if moveToGripper > self.defaultGripper:
            self.defaultGripper = moveToGripper
            self.gripper.servo_write(self.defaultGripper)
        else:
            self.defaultGripper = moveToGripper
            self.gripper.servo_write(self.defaultGripper)

    # Servo Right
    def moveRight(self, moveToRight, speed=100):
        
        # speed of movement
        sleep = translate(speed,0,100,50,0)
        if speed == 0:
          return
        
        self.left.servo_release()
        # limit min/max values
        if moveToRight  < 50:
            moveToRight  = 50
        if moveToRight  > 179:
            moveToRight  = 179
        
        if moveToRight > self.defaultRight:
            self.defaultRight = moveToRight
            self.right.servo_write(self.defaultRight)
        else:
            self.defaultRight = moveToRight
            self.right.servo_write(self.defaultRight)

    # Servo Left
    def moveLeft(self, moveToLeft, speed=100):
      
        # speed of movement
        sleep = translate(speed,0,100,50,0)
        if speed == 0:
          return
        
        self.right.servo_release()
        # limit min/max values
        if moveToLeft  < 5:
            moveToLeft  = 5
        if moveToLeft  > 140:
            moveToLeft  = 140
        
        if moveToLeft > self.defaultLeft:
            self.defaultLeft = moveToLeft
            self.left.servo_write(self.defaultLeft)
        else:
            self.defaultLeft = moveToLeft
            self.left.servo_write(self.defaultLeft)

    # Move the arm along the r axis (polar coordinates), or in height (z)
    def moveKinematic(self, moveToA=90, moveToR=80, moveToZ=80, speed=100):
        
        # limit min/max values
        if (moveToR < 20):
            moveToR = 20
        if (moveToZ < -35):
            moveToZ = -35
        if (moveToR > 130):
            moveToR = 130
        if (moveToZ > 125):
            moveToZ = 125
        
        c = math.sqrt(moveToZ*moveToZ + moveToR*moveToR) # pythagorean theorem
        K = math.atan2(moveToZ, moveToR)
        
        # fixed length bicep and forearm respectively
        a = 81
        b = 81

        B = math.acos((a*a + c*c - b*b) / (2*a*c)) # cosine law
        C = math.pi - 2*B # (180 - A - B) and A==B from isoceles
        C = C * 180 / math.pi # rad --> deg

        rightServoAngle = (K+B) * 180 / math.pi # servo 1 (right)
        X = 90 - rightServoAngle # right angle subtraction
        Y = 90 - X # sum of interior angles again
        W = 180 - C - Y
        leftServoAngle = W
        
        newRightServoAngle = 175-rightServoAngle
        newLeftServoAngle = 90-leftServoAngle

        if (math.isnan(leftServoAngle) != math.isnan(rightServoAngle)):
            print('ERROR: Outside of boundaries!')
            return

        self.moveBase(moveToA, speed)
        #servo.position(self.right, newRightServoAngle) # see REPORT.pdf for explanation
        self.moveRight(newRightServoAngle,speed)
        #servo.position(self.left, newLeftServoAngle) # and diagrams of angle calculations
        self.moveLeft(newLeftServoAngle, speed)
        
arm = Arm()



