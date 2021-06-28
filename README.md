# AnyTutor

A ReactJS application made for NUS Orbital 2021.
Here is the link for the app deployed on Vercel: [AnyTutor](https://any-tutor-allardquek.vercel.app/).

## Deploying the app locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Problem

Since the Covid-19 pandemic started, many schools and tuition centers have shifted their lessons online. However, such online lessons are notorious for being less engaging than face-to-face classes, and coupled with many student’s tendencies to get distracted easily, these lessons usually end up being less productive than they should be. Moreover, there is an evident lack of teachers to provide each student sufficient attention during lessons. 

## Solution

As such, we aim to reduce the burden on teachers in this changing educational landscape, and at the same time hopefully also make the learning experience for students more interesting, engaging, and thus more productive. Our proposed solution is to utilize Deep Fake technology to produce video lessons conveniently and efficiently. This would ultimately save teachers a significant amount of time they can then spend on planning more engaging lessons and doing more meaningful work. 

As of Milestone 2, we have successfully implemented our core feature: a teacher is now able to upload a lesson video (without the teacher’s face) and a short sample video containing their face (or anyone’s face for that matter), and receive as output a new lesson video with the teacher’s face overlaid on the original video in a corner.

## Solution Architecture

![Alt text](/readme/architecture.jpg "Solution Architecture")

[View it here!](https://drive.google.com/file/d/1r76ZKnCRcOcwaM2_Z2adoY6EzebQVoTk/view?usp=sharing) (last updated: 28 May)

## Current Features
1. Generate a deepfake video from user audio and image
1. Generate a lip-sync video from your own video and audio
1. Generate a tutorial video with an avatar from the input lesson video and the tutor's sample video
1. Receive your generated video through email!

## IMOPRTANT NOTES
- For the features to work, our AWS resources have to be switched on. 
- When testing, only submit ONE request at a time. We have limited resources.
- When choosing video content to upload, the recommended duration is 30-60 seconds to get results quickly
- Videos of the tutor chosen must contain a human face in all of the video frames, but the duration may be short (even 5 to 10 seconds will work)
- To obtain the best results, ensure that the tutor in the video varies their facial expressions and includes gestures as if emphasising certain points. To achieve this, it might be better to record a short video keeping these pointers in mind.
- Please reach out if you face any issues or have any suggestions for improvements!

## Upcoming Features
1. Provide the user with sample videos to generate the deepfake video by inputting just raw text
2. Translation to other languages (e.g. Chinese, Malay) to make education more accessible
3. Give the user the option to format the layout of the overlay and output video

