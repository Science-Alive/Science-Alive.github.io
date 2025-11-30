
---
workshop: Intro to Arduino
author: Danny
categories: tech
order: 2
---

Now that we've covered a bit of Arduino's history and why we should learn about them, let's take a further dive into the Arduino UNO, which is the board that we will be using today.

### Arduino UNO Anatomy
Arduinos are pretty complicated but here are some important components:
1. Microcontroller: This is the brain of the board and the component where programs(sketches) are loaded into.
2. USB port: used to connect the board to another device like a computer
3. USB to Serial chip: A translator for the data that comes from a computer
4. Digital pins: Pins that use 0/1 or LOW/HIGH. Commonly used for switches
5. Analog pins: Pins that can read values in a 10 bit resolution (0-1023)
6. 5V and 3.3V pins: Used to power external components
7. GND: Used to complete electrical circuits

* Insert an image of the board here

### Code Execution
The way that these boards are designed to work is by uploading a single program that runs on the microcontroller.

These programs start execution as soon as it's powered and programs are executed very quickly.
