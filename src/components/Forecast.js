import styles from "./Forecast.module.css";

function Forecast({ data }) {
    const icons = {
        "01d": "bi bi-sun-fill day",
        "01n": "bi bi-moon-stars-fill night",
        "02d": "bi bi-cloud-sun-fill",
        "02n": "bi bi-cloud-moon-fill",
        "03d": "bi bi-cloud-fill",
        "03n": "bi bi-cloud-fill",
        "04d": "bi bi-clouds-fill",
        "04n": "bi bi-clouds-fill",
        "09d": "bi bi-cloud-rain-fill",
        "09n": "bi bi-cloud-rain-fill",
        "10d": "bi bi-cloud-drizzle-fill",
        "10n": "bi bi-cloud-drizzle-fill",
        "11d": "bi bi-cloud-lightning-rain-fill",
        "11n": "bi bi-cloud-lightning-rain-fill",
        "13d": "bi bi-cloud-snow-fill",
        "13n": "bi bi-cloud-snow-fill",
        "50d": "bi bi-cloud-fog2-fill",
        "50n": "bi bi-cloud-fog2-fill",
    };
    const getIcon = () => {
        return icons[data.weather[0].icon];
    };

    return (
        <section className={styles.resultsContainer}>
            {data.cod === "400" || data.cod === "404" ? (
                <div>
                    <p className={styles.notFound}>City not found</p>
                </div>
            ) : (
                <>
                    <div className={styles.heroResultsContainer}>
                        <div className={styles.placeInfo}>
                            <p className={styles.countryName}>
                                {data.sys.country}
                            </p>
                            <p className={styles.cityName}>{data.name}</p>
                            <p className={styles.description}>
                                {data.weather[0].main}
                            </p>
                        </div>
                        <i className={getIcon()}></i>
                    </div>
                    <div className={styles.subResultsContainer}>
                        <div className={styles.detailContainer}>
                            <i className="bi bi-thermometer-half otherIcon"></i>
                            <p>{data.main.temp} °C</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <i className="bi bi-moisture otherIcon"></i>
                            <p>{data.main.humidity}%</p>
                        </div>
                        <div className={styles.detailContainer}>
                            <i className="bi bi-wind otherIcon"></i>
                            <p>{data.wind.speed} m/s</p>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default Forecast;
