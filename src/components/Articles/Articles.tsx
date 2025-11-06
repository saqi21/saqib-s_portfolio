import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Article } from '../../types';
import { getAssetPath } from '../../utils/assets';
import './Articles.css';

interface ArticlesProps {
  articles: Article[];
  useSlider?: boolean; // If true, shows slider; if false, shows cards grid
}

const Articles: React.FC<ArticlesProps> = ({ articles, useSlider = true }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderArticleCard = (article: Article) => {
    const imagePath = getAssetPath(article.image);
    
    return (
      <div key={article.id} className="blog-card">
        <div className="img-holder">
          <img 
            src={imagePath} 
            alt={article.title}
            loading="lazy"
            onError={(e) => {
              // Show placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (!target.parentElement?.querySelector('.article-image-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'article-image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i>';
                target.parentElement?.appendChild(placeholder);
              }
            }}
          />
        </div>
      <div className="content-holder">
        <h6 className="title">{article.title}</h6>
        <p className="post-details">
          <span>By: Saqib Zafar</span>
          <span>
            <i className="ti-heart text-danger"></i> {article.likes}
          </span>
          <span>
            <i className="ti-comment"></i> {article.comments}
          </span>
        </p>
        <p>{article.description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <a 
            href={article.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-0 read-more text-danger f-14"
          >
            <i className="ti-time text-danger" aria-hidden="true"></i>
            <span> {article.readTime}</span>
          </a>
          <a 
            href={article.url}
            className="mt-0 read-more text-danger f-14" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more <i className="ti-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
    );
  };

  if (isLoading) {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h2 className="mb-5">Latest <span className="text-danger">Articles</span></h2>
          <div className="text-center">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="articles">
      <div className="container">
        <h2 className="mb-5">Latest <span className="text-danger">Articles</span></h2>
        {useSlider ? (
          <div className="row">
            <div className="article-slider">
              <Slider {...sliderSettings}>
                {articles.map((article) => (
                  <div key={article.id} className="slide">
                    {renderArticleCard(article)}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : (
          <div className="articles-grid">
            {articles.map((article) => renderArticleCard(article))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
