import { useState } from "react";
import styles from "./Search.module.css";
import Forecast from "./Forecast";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [city, setCity] = useState("");

    const submitHandle = (event) => {
        event.preventDefault();
        async function getForecast() {
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_KEY}&units=metric`
            )
                .then((res) => res.json())
                .then((data) => setCity(data));

            setSearchValue("");
        }

        getForecast();
    };

    const changeHandle = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>
            <section className={styles.section}>
                <form className={styles.form} onSubmit={submitHandle}>
                    <input
                        className={styles.input}
                        type="search"
                        placeholder="Search City..."
                        value={searchValue}
                        onChange={changeHandle}
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </section>
            {typeof city != "string" && <Forecast data={city} />}
        </>
    );
}

export default Search;
