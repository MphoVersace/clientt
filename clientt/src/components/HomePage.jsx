import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom"; // Import Link if not already
import "./App.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/posts") // Make sure this URL is correct
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Healthy Recipes</h1>
        <p className="subheading">
          Healthy, delicious recipes, including quick dinner, easy lunch ideas,
          snacks, breakfast, soup and more, from the food and nutrition experts
          at EatingWell.
        </p>
      </div>
      <div className="recipe-categories">
        {/* Recipe category links */}
        <a href="/diabetes-friendly">Diabetes-Friendly Dinner Recipes</a>
        <a href="/best-of-the-best">Best of the Best</a>
        <a href="/healthy-side-dish">Healthy Side Dish Recipes</a>
        <a href="/healthy-salad">Healthy Salad Recipes</a>
        <a href="/healthy-appetizer">Healthy Appetizer Recipes</a>
        <a href="/Dietary Restrictions">Dietary Restrictions</a>
        <a href="/Nutrient-Focused Diets">Nutrient-Focused Diets</a>
        <a href="/Healthy Holiday & Occasion Recipes">
          Healthy Holiday & Occasion Recipes
        </a>
        <a href="/Recipes for Weight Loss & Diet">
          Recipes for Weight Loss & Diet
        </a>
        <a href="/Healthy Bread Recipes">Healthy Bread Recipes</a>
        <a href="/Healthy Cooking Methods & Styles">
          Healthy Cooking Methods & Styles
        </a>
        <a href="/Healthy Drink Recipes">Healthy Drink Recipes</a>
        <a href="/Healthy Sauce & Condiment Recipes">
          Healthy Sauce & Condiment Recipes
        </a>
        <a href="/Healthy Main Dish Recipes">Healthy Main Dish Recipes</a>
        <a href="/Healthy Mealtime Recipes">Healthy Mealtime Recipes</a>
        <a href="/Healthy Regional Recipes">Healthy Regional Recipes</a>
        <a href="/Healthy Seasonal Recipes">Healthy Seasonal Recipes</a>
        <a href="/Healthy Soup Recipes">Healthy Soup Recipes</a>
        <a href="/Healthy Lifestyle Diets">Healthy Lifestyle Diets</a>
        <a href="/Healthy Ingredient Recipes">Healthy Ingredient Recipes</a>
        <a href="/Healthy Cookie & Dessert Recipes">
          Healthy Cookie & Dessert Recipes
        </a>
        <a href="/Healthy Kids Recipes">Healthy Kids Recipes</a>
        <a href="/Recipes for Specific Health Conditions">
          Recipes for Specific Health Conditions
        </a>
      </div>
      <div className="upper-social">
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pinterest
        </a>{" "}
        |
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="mailto:example@example.com" // Changed to a mailto link
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
      </div>

      <h2 className="posts-header">Latest Blog Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} />
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>

      <footer className="blog-footer">
        <div className="footer-content">
          <div className="footer-description">
            <h2>About This Blog</h2>
            <p>
              Welcome to our blog! Here, we share insights, stories, and tips
              about the latest trends and topics in our field. Stay tuned for
              updates and new posts.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            |
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Mpho Mtlomelo. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
