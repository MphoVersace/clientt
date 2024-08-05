import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/api"; // Adjust the path as needed
import "../index.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Eating Well</h1>
        <p className="subheading">
          Healthy, delicious recipes, including quick dinner, easy lunch ideas,
          snacks, breakfast, soup and more, from the food and nutrition experts
          at EatingWell.
        </p>
      </div>
      <div className="recipe-categories">
        {/* Recipe category links */}
        <Link to="https://www.eatingwell.com/recipes/18345/health-condition/diabetic/dinner/">
          Diabetes-Friendly Dinner Recipes
        </Link>
        <Link to="https://www.eatingwell.com/category/7904309/best-of-the-best/">
          Best of the Best
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17986/side-dishes/">
          Healthy Side Dish Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17981/salad/">
          Healthy Salad Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18041/appetizer/">
          Healthy Appetizer Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/22824/dietary-restrictions/">
          Dietary Restrictions
        </Link>
        <Link to="https://www.eatingwell.com/recipes/22825/nutrient-focused-diets/">
          Nutrient-Focused Diets
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17959/holidays-occasions/">
          Healthy Holiday & Occasion Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18045/weight-loss-diet/">
          Recipes for Weight Loss & Diet
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17915/bread/">
          Healthy Bread Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17942/cooking-methods-styles/">
          Healthy Cooking Methods & Styles
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17949/drinks/">
          Healthy Drink Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17956/sauces-condiments/">
          Healthy Sauce & Condiment Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17965/main-dishes/">
          Healthy Main Dish Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17968/mealtimes/">
          Healthy Mealtime Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17979/cuisines-regions/">
          Healthy Regional Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/17985/seasonal/">
          Healthy Seasonal Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18042/soup/">
          Healthy Soup Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18024/lifestyle-diets/">
          Healthy Lifestyle Diets
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18043/ingredients/">
          Healthy Ingredient Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18044/desserts/">
          Healthy Cookie & Dessert Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/18049/healthy-kids/">
          Healthy Kids Recipes
        </Link>
        <Link to="https://www.eatingwell.com/recipes/22823/health-condition/">
          Recipes for Specific Health Conditions
        </Link>
      </div>
      <div className="upper-social">
        <a
          href="https://za.pinterest.com/pin-builder/?description=Recipes+for+Specific+Health+Condition&media=https%3A%2F%2Fwww.eatingwell.com%2Fthmb%2FiY-orpF_zEK-tayEo2bF01rnHP8%3D%2F750x0%2F76564-b95124f8ff224029b0bb711a709b7a63.jpg&method=button&url=https%3A%2F%2Fwww.eatingwell.com%2Frecipes%2F22823%2Fhealth-condition%2F%3Futm_source%3Dpinterest%26utm_medium%3Dsocial%26utm_campaign%3Dshareurlbuttons"
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
        |<a href="mailto:example@example.com">Email</a>
      </div>

      <h2 className="post-header">Latest Blog Post</h2>
      <div className="post-grid">
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
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
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
