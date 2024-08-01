import React from "react";

// Post component
const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

// Array of posts
const posts = [
  {
    id: "1",
    title: "Bard Vs ChatGTP: Which one is better for coding?",
    content:
      "For programmers, Generative AI offers tangible benefits. It helps with writing and debugging code, making our busy lives a bit easier as a result. But there are now competing tools like ChatGPT and Bard, which begs the question: which one is best for me to use? We compare these tools against each other in the ultimate battle to see which is the most feature-rich tool right now for programming purposes.",
  },
  {
    id: "2",
    title: "How to become a software developer with no prior experience",
    content:
      "It’s not surprising -- these days the space is so vast with numerous programming languages, form factors, application layers, and business domains to consider that it can be challenging to know where to start.",
  },
  {
    id: "3",
    title:
      "AWS re:Inforce: Take these generative AI and cloud security measures",
    content:
      "The theme of AWS re:Inforce 2024 is security in the age of generative AI. (Shocking, right?).",
  },
  {
    id: "4",
    title: "IT skills you (and your tech teams) need to develop at work",
    content:
      "When tech changes, the skills an organization needs also change. As a technologist, what skills should you prioritize learning to build or boost your tech career.",
  },
  {
    id: "5",
    title: "The 10 most in-demand tech skills in 2024 (with skill tests)",
    content:
      "Upskilling is part and parcel with being in tech, but it can be tough to know where to spend your efforts.",
  },
];

// Main component rendering the list of posts
const App = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
