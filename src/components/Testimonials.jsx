import React, { useState } from "react";
import "../index.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Imagination is powerful than knowledge.",
      author: "Albert Einstein",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },

    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "We cannot solve our problems with the same thinking we used when we created them.",
      author: "Albert Einstein",
    },
    {
      quote:
        "If you want to go fast, go alone. If you want to go far, go together.",
      author: "African Proverb",
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="quote-author">
        <div className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
          - {testimonials[currentIndex].author}
        </div>
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
