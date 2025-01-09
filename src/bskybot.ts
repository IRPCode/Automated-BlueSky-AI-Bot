import { AtpAgent } from '@atproto/api';


const agent = new AtpAgent({
  service: 'https://bsky.social',
});

const { GoogleGenerativeAI } = require("@google/generative-ai");


//Make sure you replace these values with your own values. Hardcoded due to local machine .env errors despite correct code.
const AIRules = "RulesExample";
const identifierName: string = "bskybotexample.bsky.social";
const identifierPassword: string = "password"; 
const GeminiApiKey: string = "EnterKeyHere";

main();

//runs program
async function main() {
  try { //logs into BlueSky, make sure 2FA is disabled, or else it will fail.
    await agent.login({
      identifier: identifierName,
      password: identifierPassword,
    });
    console.log('Logged in successfully!');
  } catch (error) {
    console.error('Failed to log in:', error);
  }
  (async () => {
    while (true) {
      await postBehaivor();
      await sleep(60000); //Keep rate limits in mind when setting this number (which is in ms) https://docs.bsky.app/docs/advanced-guides/rate-limits
    }
  })();
}

//Get LLM Response
async function getGeminiLLMResponse(stringInput: string) {
  const genAI = new GoogleGenerativeAI(GeminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = AIRules + stringInput;
  const result = await model.generateContent(prompt);
  return result
}

//Make post to your BlueSky profile
async function postToBluesky(result: { response: { text: () => string } }): Promise<void> {
  try {
    let geminiInput: string = " This is a profile post. Be creative about what you want to share with the world.";
    result = await getGeminiLLMResponse(geminiInput);
    await agent.post({
      text: result.response.text(),
      createdAt: new Date().toISOString(),
    })
  }
  catch (error) {
    console.error("Failed to post.")
    console.log(result.response.text())
  }
}

//Make a comment to BlueSky
async function commentToPost(): Promise<void> {

  interface PostRecord extends Record<string, unknown> { //gets the post record, stores root and parent uris
    text: string;
    reply?: {
      root: { uri: string; cid: string; };
      parent: { uri: string; cid: string; };
    };
    createdAt: string;
  }

  try { //sorts the feed by reverse chronological order
    const timeline = await agent.api.app.bsky.feed.getTimeline({
      algorithm: 'reverse-chronological',
    });

    if (timeline.data.feed.length > 0) {
      const threadRootPost = timeline.data.feed[8].post; //gets posts from timeline based off of who you are following
      const postUri = threadRootPost.uri; //gets the uri of the post

      const postResponse = await agent.api.app.bsky.feed.getPosts({ //gets the uris off of your feed
        uris: [postUri]
      });

      //gets the text of the post
      const post = postResponse.data.posts[0];
      const postText = (post.record as any).text;
      console.log('Post text:', postText);

      //sends the post off to the AI to get a response
      let stringInput: string = "You are commenting on a post. Be creative in your response. The text is: " + postText;
      const result = await getGeminiLLMResponse(stringInput + moodGenerator());

      //Takes the result from the AI and pushes it to BlueSky
      const record: PostRecord = {
        $type: 'app.bsky.feed.post',
        text: result.response.text(),
        reply: {
          root: {
            uri: threadRootPost.uri,
            cid: threadRootPost.cid,
          },
          parent: {
            uri: threadRootPost.uri,
            cid: threadRootPost.cid,
          }
        },
        createdAt: new Date().toISOString()
      };

      const response = await agent.api.app.bsky.feed.post.create(
        { repo: agent.session?.did }, record);
      console.log('Reply posted successfully:', response);
      console.log('Reply text: ', result.response.text());
    }
  } catch (error) {
    console.error('Failed to post reply:', error);
  }
}

async function likePost() {

  try { //sorts the feed by reverse chronological order
    const timeline = await agent.api.app.bsky.feed.getTimeline({
      algorithm: 'reverse-chronological',
    });

    if (timeline.data.feed.length > 0) {
      const threadRootPost = timeline.data.feed[8].post; //gets posts from timeline based off of who you are following, gets 9th post from the time of query (most)
      const postUri = threadRootPost.uri; //gets the uri of the post
      const postCid = threadRootPost.cid; //gets the cid of the post

      const postResponse = await agent.api.app.bsky.feed.getPosts({ //gets the uris off of your feed
        uris: [postUri]
      });
      const { uri } = await agent.like(postUri, postCid);
      console.log('Liked post:', uri);
    }
  } catch (error) {
    console.error('Failed to like post:', error);
  }
}

async function repostPost() {

  try { //sorts the feed by reverse chronological order
    const timeline = await agent.api.app.bsky.feed.getTimeline({
      algorithm: 'reverse-chronological',
    });

    if (timeline.data.feed.length > 0) {

      const threadRootPost = timeline.data.feed[8].post; //gets posts from timeline based off of who you are following
      const postUri = threadRootPost.uri; //gets the uri of the post
      const postCid = threadRootPost.cid; //gets the cid of the post

      const postResponse = await agent.api.app.bsky.feed.getPosts({ //gets the uris off of your feed
        uris: [postUri]
      });

      const { uri } = await agent.repost(postUri, postCid);
      console.log('Reposted post:', uri);
    }
  } catch (error) {
    console.error('Failed to repost post:', error);
  }
}

//generates LLM's response mood
function moodGenerator() {
  const moods: readonly string[] = ["Sassy", "Rude", "Jolly", "Confused", "Mournful", "Jealous", "Skeptical", "Silly", "Normal"];
  const pushMoodToAI: string = "Your current set mood is: " + moods[randomIntFromInterval(0, moods.length - 1)] + ".";
  console.log(pushMoodToAI);
}

//random number generator
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//chooses whether to post or comment
function postBehaivor() {
  let x: number = randomIntFromInterval(0, 100);
  if (x >= 6 && x <= 69) {
    likePost();
  }
  else if (x >= 70 && x <= 85) {
    commentToPost();
  }
  else if (x >= 86 && x <= 100) {
    repostPost();
  }
  else {
    postToBluesky({ response: { text: () => "" } });
  }
}

function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
