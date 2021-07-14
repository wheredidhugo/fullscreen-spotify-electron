# Fullscreen Spotify
An application that displays the current song you're listening to in fullscreen.

# How to use:

## Step 1: Download this application

Either download the zip by clicking on the green button that says "Code" and then clicking on "Download ZIP"

or

Clone this repository by using a command line:

```bash
>git clone https://github.com/bgpvp/fullscreen-spotify/
```

## Step 2: Last.fm Linking

If you don't already have an account on [last.fm](https://last.fm), create one.

Once you have an account on [last.fm](https://last.fm), click on the top right of the screen (click on your avatar) and then click on "Settings".

Click on "Applications" and next to "Spotify Scrobbling", click on "Connect".

Then log into your Spotify account and connect.

## Step 3: Last.fm API

Once your spotify account linked to last.fm, go to https://www.last.fm/api/account/create and fill in:

        "Contact email": Leave as it is.

        "Application name": fullscreen-spotify

        "Application description": An application that displays the current song you're listening to in fullscreen.

Leave blank the rest blank.

Once you pressed "Submit", you'll get an api key and a shared secret key, note them somewhere safe but don't share these with anyone.

## Step 4: config.json

Once you have your api and secret key, go to the "config.json" file and edit it using a text editor like Visual Studio Code, Atom or even Notepad++.

Next to "apiKey", change "Replace with your own api key." with your own api key.

Next to "secret", change "Replace with your own secret key." with your own secret key.

Next to "username", change "Replace with your own last.fm username." with your own last.fm username.

## Step 5: Run

Let's see if it works.

First, open a command line and install all the dependencies by typing:

```bash
>npm install
```

then run 

```bash
>npm start
```

If it works, you should see a black window.

Simply play a song on spotify and within 5 to 10 seconds, you should see it on this black window.

## Step 6: Building 

(WIP)