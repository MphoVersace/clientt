import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  });

  // Example posts data for demonstration purposes
  const examplePosts = [
    {
      id: 1,
      title: "18 3-Step Summer Lunches To Make Forever",
      image:
        "https://www.eatingwell.com/thmb/uVahXWoJ-nIPnXOy7Ufc_nLA1pw=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8239558-c2345ceb0ca34be5b06e87005b729b64.jpg",
      content:
        "Start your day off right with these nutritious breakfast recipes. Packed with energy and flavor, these dishes are sure to get your day off to a great start.",
    },
    {
      id: 2,
      title: "25 High-Protein Breakfast Recipes to Make Forever",
      image:
        "https://www.eatingwell.com/thmb/2O4Qn91IVkDs316jWp_Z-Yzzq00=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-green-breakfast-sandwich-with-pesto-hero-247-cabef6ec85f74ca58d5a0ecac41eeb0b.jpg",
      content:
        "You might wake up with a smile on your face thinking of these yummy breakfast ideas. Rated with 4- and 5-stars, our readers have been loving these recipes, and we think you will too. Each serving contains at least 15 grams of protein, which helps support healthy digestion, muscle growth and energy production. You’ll want to start your day with tasty options like our Peanut-Ginger Tofu Scramble or High-Protein Peach Muffins for a delicious and nourishing morning meal!",
    },
    {
      id: 3,
      title:
        "This Crustless Spinach & Goat Cheese Quiche Is As Simple As It Gets",
      image:
        "https://www.eatingwell.com/thmb/L9Z7owYqn0RhHLA6jHHcexgR_SU=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crustless-spinach-goat-cheese-quiche-beauty3x2-288-bdeffb8fad064303b704a47c67b106c9.jpg",
      content:
        "Let this weekend-worthy quiche elevate your next brunch spread. You’ll love how easy it is to pull together without the fuss of baking and filling a crust. We love the convenience of pre-washed baby spinach, but any dark leafy green, from kale to Swiss chard, can work well in its place.",
    },
  ];

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

      <h2 className="posts-header">Latest Blog Posts</h2>
      <div className="posts-grid">
        {examplePosts.map((post) => (
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
