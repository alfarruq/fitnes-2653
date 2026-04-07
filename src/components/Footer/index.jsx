
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./style.css"; // CSS faylni ulash

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* 1. Katalog */}
        <div className="footer-column">
          <h3>Каталог товаров</h3>
          <ul>
            <li>Кардио тренажеры</li>
            <li>Composite Strength</li>
            <li>True Stretch</li>
            <li>Сайклинг</li>
            <li>Групповые тренировки</li>
            <li>Силовые тренажеры</li>
            <li>Консоли</li>
          </ul>
          <p className="footer-bottom-text">© TRUE FITNESS</p>
        </div>

        {/* 2. Ma'lumot */}
        <div className="footer-column">
          <h3>Информация</h3>
          <ul>
            <li>О бренде</li>
            <li>Преимущества</li>
            <li>Открыть клуб</li>
            <li>Продукции</li>
            <li>Контакты</li>
          </ul>
        </div>

        {/* 3. Kontaktlar */}
        <div className="footer-column">
          <h3>Контакты</h3>
          <ul>
            <li>Политика конфиденциальности</li>
            <li>Контакты</li>
          </ul>
        </div>

        {/* 4. Obuna va Ijtimoiy tarmoqlar */}
        <div className="footer-column">
          <h3>Подписаться на новости и акции</h3>
          
          <div className="subscribe-group">
            <input type="email" placeholder="E - MAIL" />
            <button className="subscribe-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;