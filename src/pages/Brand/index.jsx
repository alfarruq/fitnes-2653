import './style.css';
import frank from '../../assets/frank.png'
import treadmail from '../../assets/treadmail.png'


function Brand() {
    return (
        <div>



            <main>

                <section className="hero-section">
                    <p className="hero-sub">О НАШЕМ БРЕНДЕ</p>
                    <h1>TRUE - СОВЕРШЕННОЕ <br /> ФИТНЕС-ОБОРУДОВАНИЕ</h1>
                </section>


                <section className="info-bg-section">
                    <div className="container">
                        <div className="white-info-box">
                            <p className="text-blue">Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производства наших машин...</p>
                            <p>Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями...</p>
                            <p>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования...</p>
                            <p className="text-blue-bold">Свяжитесь с нами, чтобы узнать, как партнерство с true может помочь вашей компании добиться успеха.</p>
                        </div>
                    </div>
                </section>


                <section className="founder-section">
                    <div className="founder-container">
                        <div className="founder-card">
                            <img src={frank} alt="Frank Trulaske" />
                            <div className="founder-name">
                                <span className="name">FRANK TRULASKE,</span>
                                <span className="job">основатель и президент TRUE Fitness</span>
                            </div>
                        </div>
                        <div className="about-blue-box">
                            <h2>О компании TRUE</h2>
                            <div className="yellow-divider"></div>
                            <p>На протяжении всего времени своего существования TRUE придерживается главных принципов: высокого качества продукции и обеспечение первоклассного сервиса, это позволяет бренду удерживать лидирующие позиции...</p>
                        </div>
                    </div>
                </section>


                <section className="history-section">
                    <h3 className="history-title">ЭТАПЫ РАЗВИТИЯ КОМПАНИИ TRUE FITNESS</h3>
                    <h4 className="history-subtitle">ИСТОРИЯ РАЗВИТИЯ, ИСТОРИЯ ВНЕДРЕНИЯ ИННОВАЦИЙ</h4>
                    <div className="black-divider"></div>

                    <div className="history-description">
                        <p>С момента своего основания в 1981 году компания TRUE основывалась на двух основных руководящих принципах: создавать продукты высочайшего качества и поддерживать их превосходным обслуживанием. С годами фитнес-индустрия изменилась, появились новые рынки и изменились потребности наших клиентов, но эти принципы остаются неизменными, и мы неустанно продолжаем следить за актуальностью наших технологий.</p>
                        <p>В соответствии с нашими ценностями TRUE всегда стремилась оборудовать наши тренажеры новейшими технологиями и функциями безопасности. Мы с самого начала предоставляли нашим клиентам самые лучшие возможности для тренировок, обеспечивая при этом им уверенность в безопасности. Вот некоторые из революционных достижений, которых мы добились в отрасли за нашу более чем 45-летнюю историю.</p>
                    </div>


                    <div className="timeline">
                        <span className="year active">1972</span>
                        <span className="year">1983</span>
                        <span className="year">1993</span>
                        <span className="year">1998</span>
                        <span className="year">2000</span>
                        <span className="year">2000</span>
                        <span className="year">2000</span>
                        <span className="year">2000</span>
                    </div>


                    <div className="product-row">
                        <div className="product-img">
                            <img src={treadmail} alt="Treadmill" />
                        </div>
                        <div className="product-info">
                            <h2>TRUE SPORTS РАЗРАБАТЫВАЕТ СВОЮ ПЕРВУЮ БЕГОВУЮ ДОРОЖКУ</h2>
                            <p>Компания true sports основанная frank trulaske в 1981 году, разрабатывает свою первую беговую дорожку, являясь одним из пионеров...</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Brand;