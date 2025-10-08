// This file reads the text configuration and provides it to the app

export const textConfig = {
  greeting: {
    name: "Huii, KuchuPuchu",
    message: "A Gift For You"
  },

  letter: {
    title: "Read My Letter",
    subtitle: "Click to see your special letter",
    recipient: "To My KuchuPuchu",
    paragraphs: [
      "No big occasion, no fancy reason—just wanted to say you matter. You make the everyday feel less ordinary, and I’m lucky to have you in my corner. Whether it’s your laugh, your kindness, or the way you always show up, I notice it all. Thanks for being the kind of person who makes life better without even trying.",

      "I’m so lucky to have you by my side, and I just want you to know how deeply you’re loved and appreciated today and always."
    ],
  // include a small pet name above the actual signature so it displays
  signature: "Pretty princess\nYours (......),\nHariom 💕"
  },

  gallery: {
    title: "Some Special Moments",
    subtitle: "Swipe to see more ✨",
    photos: [
      { src: "./images/pic1.gif", caption: "Thanks for making me smile 💕" },
      { src: "./images/pic2.gif", caption: "I’m so lucky to have you by my side 😊" },
      { src: "./images/pic3.jpg", caption: "the most amazing person in my life ✨" }
    ],
    scrollIndicators: 3, // number of dots
    dividerIcon: "📷"
  },

  game: {
    title: "Play a Game!",
    subtitle: "Catch some hearts to unlock a special message",
    completionMessage: "You've completed the game! ✨ But you can play again if you want!",
    winMessage: "You caught my heart! Just like how you've captured my real heart forever..."
  },

  ui: {
    envelopeHint: "Click to open",
    envelopePreview: "💌 A letter for you..."
  },


};
