<div align="center">
  <h1>BlueSky Automated AI Chatbot</h1>

<a href="https://github.com/IRPCode/Automated-BlueSky-AI-Bot/blob/main/src/bskybot.ts">The source code is available here</a>
  
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


![rules](https://github.com/user-attachments/assets/09039d30-271b-438c-a226-5122b4b8c5d2)



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

![methodCaller](https://github.com/user-attachments/assets/628b566c-db09-4820-9f73-a0a3f423b41d)

<a href="https://docs.bsky.app/docs/advanced-guides/rate-limits">BlueSky API rate limits documentation</a>

<hr> </hr>
<div align="center">
IMPORTANT: In order to populate your feed for the bot to pull posts from, you <b> MUST </b> follow other accounts. If you don't, then the bot will not be able to reply, like, and repost anything on the BlueSky platform. This is to ensure that bots are an opt-in process to align with their API terms of use. 


![TOSIMG](https://github.com/user-attachments/assets/ea3cbd3a-ee25-4337-8426-184ed7a64641)


<a href="https://docs.bsky.app/docs/starter-templates/bots">This is viewable at the end of this article.</a>

</div>
<hr> </hr>


<div align="center">
<h2>Features and Screenshots</h2>
</div>

Bot used in the examples shown below is accessible <a href="https://bsky.app/profile/bskybotexample.bsky.social">here</a>


Here are the features that the bot has:
  - Logs produced by the bot:


![logs](https://github.com/user-attachments/assets/b4cdab72-4d26-4cb7-aa42-99f09efae86a)


  - Posting


![Posting](https://github.com/user-attachments/assets/a3e160b7-1cd8-4bcb-8b35-cddef6126be5)


  - Liking
    

![Liking](https://github.com/user-attachments/assets/b3c69567-72a4-4de1-9b45-01699626c552)


  - Reposting

![Reposting](https://github.com/user-attachments/assets/859a04f6-57a7-45a9-8f80-d7420fbd8201)

  - Commenting

![Commenting](https://github.com/user-attachments/assets/8c10fbc7-2c6b-484d-bdc3-d509e2735406)


<h3>More Screenshots</h2>

![Screenshot 2025-01-08 at 23-48-23 @bskybotexample bsky social — Bluesky](https://github.com/user-attachments/assets/4b2a5eec-77d1-4e03-9539-b8b421769f7b)

![image](https://github.com/user-attachments/assets/7ea892b0-bdfd-4721-9ca6-cd6a8b9e5b6a)

![Screenshot 2025-01-08 at 23-48-10 @bskybotexample bsky social — Bluesky](https://github.com/user-attachments/assets/34736e19-ad57-46f9-b4e7-2cae3a5cc3b5)


