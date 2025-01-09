<div align="center">
  <h1>BlueSky Automated AI Chatbot</h1>

<a href="https://github.com/IRPCode/BlueSky-Automated-AI-Chatbot/blob/main/src/bskybot.ts">The source code is available here</a>
  
</div>

<div align="center">
<h2>Getting Started</h2>
</div>

First, make sure you have Node.js and Yarn installed. Documentation for these tools are the following:


  - <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Installing NodeJS and NPM</a>
  - <a href="https://www.npmjs.com/package/yarn">Yarn Documentation</a>

You can install Node.js with the following command:

    npm install -g npm

Once Node.js is installed, you can type the following to get it installed:

    npm i yarn



<div align="center">
<h2>Required APIs</h2>
</div>
Make sure you have the following Packages installed prior to running the code:
<br></br>

<b>Bluesky API:</b>
  
    yarn add @atproto/api
  <a href="https://www.npmjs.com/package/@atproto/api">BlueSky API (atproto/api) Documentation</a>

<b>Gemini API:</b>
  
     npm install @google/generative-ai

<a href="https://www.npmjs.com/package/@google/generative-ai">Gemini API Documentation</a>


<div align="center">
<h2>API Keys and Getting logged in</h2>
</div>

- The bot's program will not run without these three things:
    - Your BlueSky Profile tag
      - ex. bskybotexample.bsky.social (must be formatted like this) 
    - Your BlueSky Password
    - Your Gemini API Key, which is accessible here: <a href="https://aistudio.google.com/apikey">(You must be logged in to get your key.)</a>
    - Your AI rules


![image](https://github.com/user-attachments/assets/762c8d3b-95fd-4341-93bc-2d4ea5440914)


<hr></hr>
<b>NOTE:</b>

- As a part of your AI rules, make sure you tell Gemini the following stipulations:
  - You are a BlueSky Bot
  - Only make one post at a time (Gemini tends to attempt to make multiple blocks of text for a single post)
  - Make your responses 300 character or less in length
  - Abide by the mood that will be provided to you by the mood generator
  - Use natural language
  - You will be told to format your post as a normal post, or as a comment
  - Be nice
- Any other rules provided will change how it behaves on the platform
<hr></hr>

<b>Additional notes:</b>
- Inside of the program, there is a sleep function that is measured in Miliseconds. You can change this, but keep BlueSky's API rate limits in mind.
- At the end of the program in the postBehaivor() function, you can adjust the chances of liking, reposting, commenting, and posting. 

![image](https://github.com/user-attachments/assets/dcd310f2-e832-4e42-af7f-330c517d9d1b)

<a href="https://docs.bsky.app/docs/advanced-guides/rate-limits">BlueSky API rate limits documentation</a>

<hr> </hr>
<div align="center">
IMPORTANT: In order to populate your feed for the bot to pull posts from, you <b> MUST </b> follow other accounts. If you don't, then the bot will not be able to reply, like, and repost anything on the BlueSky platform. This is to ensure that bots are an opt-in process to align with their API terms of use. 


![image](https://github.com/user-attachments/assets/1acff457-186f-4a1a-a4c0-6d8c9e291bb0)

<a href="https://docs.bsky.app/docs/starter-templates/bots">This is viewable at the end of this article.</a>

</div>
<hr> </hr>


<div align="center">
<h2>Features and Screenshots</h2>
</div>

Bot used in the examples shown below is accessible <a href="https://bsky.app/profile/bskybotexample.bsky.social">here</a>


Here are the features that the bot has:
  - Logs produced by the bot:

![image](https://github.com/user-attachments/assets/533294f9-fe6b-4982-a088-364f6575af46)


  - Posting

![Posting](https://github.com/user-attachments/assets/8fa792f4-2026-4a16-9784-47b45b7559a4)


  - Liking
    
![Liking](https://github.com/user-attachments/assets/66a90e53-da23-4185-b13e-dc1b8542be05)


  - Reposting

![Reposting](https://github.com/user-attachments/assets/1c2e67b0-3b7d-425d-b8cc-217298f1dfaa)

  - Commenting

![Commenting](https://github.com/user-attachments/assets/d5e68c96-20d3-496e-8434-9914ba0d3b8c)

