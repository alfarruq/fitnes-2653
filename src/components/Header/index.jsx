import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      {/* Yuqori qism */}
      <div className="header-top">
        
        {/* Logo */}
        <div className="logo-section">
          <svg className="logo-triangle" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 90L90 10V90H10Z" fill="#57B0E2"/>
          </svg>
          <h1 className="logo-text">
            TRUE<span>®</span>
          </h1>
        </div>

        {/* O'ng taraf */}
        <div className="header-right">
          <div className="info-row">
            <div className="lang-selector">
              <img 
                src="https://flagcdn.com/w20/ru.png" 
                alt="RU" 
                className="lang-flag"
              />
              <span>▼</span>
            </div>
            <a href="tel:+998906066666" className="phone-number">
              +998 (90)-606-66-66
            </a>
          </div>
          
          <button className="submit-btn">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>

      {/* Navigatsiya */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li>О БРЕНДЕ</li>
          <li>ПРОДУКЦИИ <span className="arrow-down">▼</span></li>
          <li>ПРЕИМУЩЕСТВА</li>
          <li>ОТКРЫТЬ КЛУБ</li>
          <li>КОНТАКТЫ</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;