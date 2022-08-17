# This file is executed on every boot (including wake-boot from deepsleep)
import gc
import time
from yolobit import *
import music
from yolobit_arm import *

arm = Arm(pin8, pin9, pin10, pin11)

display.set_all('#ff0000')
music.play(music.POWER_UP, wait=False)

print('Robot Arm started and ready')

ROBOT_MODE_DO_NOTHING = const(31)
ROBOT_MODE_AUTO = const(32)

mode = ROBOT_MODE_DO_NOTHING
mode_changed = False
current_speed = 100
ble_connected = False
speed = 100
theta = 90
radius = 90
height = 90


def on_button_a_pressed():
    global mode, mode_changed
    music.play(['G3:1'], wait=True)
    if mode == ROBOT_MODE_DO_NOTHING:
        mode = ROBOT_MODE_AUTO
    elif mode == ROBOT_MODE_AUTO:
        mode = ROBOT_MODE_DO_NOTHING

    mode_changed = True
    time.sleep_ms(100)
    print('ode changed by button')


button_a.on_pressed = on_button_a_pressed


def on_ble_connected_callback():
    global ble_connected
    display.set_all('#00ff00')
    ble_connected = True


ble.on_connected(on_ble_connected_callback)


def on_ble_disconnected_callback():
    global ble_connected
    display.set_all('#ff0000')
    ble_connected = False


ble.on_disconnected(on_ble_disconnected_callback)


def on_ble_message_string_receive_callback(chu_E1_BB_97i):
    global mode, mode_changed, theta, radius, height, speed
    if chu_E1_BB_97i == ('!B11:'):
        theta = (theta if isinstance(theta, (int, float)) else 0) + 5
    elif chu_E1_BB_97i == ('!B417'):
        theta = (theta if isinstance(theta, (int, float)) else 0) + -5
    elif chu_E1_BB_97i == ('!B516'):
        height = (height if isinstance(height, (int, float)) else 0) + 5
    elif chu_E1_BB_97i == ('!B615'):
        height = (height if isinstance(height, (int, float)) else 0) + -5
    elif chu_E1_BB_97i == ('!B814'):
        radius = (radius if isinstance(radius, (int, float)) else 0) + 5
    elif chu_E1_BB_97i == ('!B714'):
        radius = (radius if isinstance(radius, (int, float)) else 0) + -5
    elif chu_E1_BB_97i == ('!B219'):
        arm.moveGripper(90, 90)
    elif chu_E1_BB_97i == ('!B318'):
        arm.moveGripper(0, 90)

    if mode_changed:
        print('mode changed by app')


ble.on_receive_msg("string", on_ble_message_string_receive_callback)


def on_ble_message_name_value_receive_callback(name, value):
    global current_speed, key, ble_key_received

    if name == 'F':
        print('not support')
    elif name == 'B':
        print('not support')
    elif name == 'L':
        print('not support')
    elif name == 'R':
        print('not support')
    elif name == 'S':
        print('not support')
    elif name == 'S1':
        print('not support')
    elif name == 'S2':
        print('not support')


ble.on_receive_msg("name_value", on_ble_message_name_value_receive_callback)


try:
    while True:
        if mode_changed:
            if mode == ROBOT_MODE_DO_NOTHING:
                display.set_all('#ff0000')
            elif mode == ROBOT_MODE_AUTO:
                display.set_all('#0000ff')
            mode_changed = False

        if mode == ROBOT_MODE_DO_NOTHING:
            if ble_connected:
                while True:
                    arm.moveKinematic(theta, radius, height, speed)
                    time.sleep_ms(50)
                    if not ble_connected:
                        break
                # do nothing and wait for commands from bluetooth
                time.sleep_ms(50)

        elif mode == ROBOT_MODE_AUTO:
            # Test Gripper Mode
            arm.moveGripper(0, 90)
            time.sleep(0.5)
            arm.moveGripper(90, 90)
            time.sleep(0.5)


except KeyboardInterrupt:
    print('ArmBot program stopped')
finally:
    button_a.on_pressed = None
    ble.on_receive_msg("string", None)
    ble.on_connected(None)
    ble.on_disconnected(None)
    del theta, radius, height, speed, mode, mode_changed, current_speed, ble_connected, on_ble_message_string_receive_callback, on_ble_connected_callback, on_ble_disconnected_callback, on_button_a_pressed
    gc.collect()
