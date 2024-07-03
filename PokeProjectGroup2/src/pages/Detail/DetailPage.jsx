import React from "react";
import styles from "../Detail/DetailPage.module.css";
import imgPokemon from "../../assets/contohPokemon.png";

function DetailPage() {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.mainLeft}>
                    <img src={imgPokemon} alt="" height="auto" width="450px" className={styles.mainPokemonImage} />
                </div>
                <div className={styles.mainRight}>
                    <div className={styles.cardName}>
                        <p>Pokemon Name</p>
                        <h1>Bulbasaur</h1>
                    </div>
                    <div className={styles.cardStatus}>
                        <p>Pokemon Types</p>
                        <h3>Grass, Poison</h3>
                    </div>
                </div>
            </div>
            <div className={styles.evolutionSection}>
                <h3>Evolution Chain</h3>
                <div className={styles.evolutionTable}>
                    <div className={styles.evo1}>
                        <img src={imgPokemon} alt="" height="auto" width="80px" />
                        <h2>Bulbasaur</h2>
                        <div className={styles.arrow}>{'>'}</div>
                    </div>
                    <div className={styles.evo2}>
                        <img src={imgPokemon} alt="" height="auto" width="80px" />
                        <h2>Ivysaur</h2>
                        <div className={styles.arrow}>{'>'}</div>
                    </div>
                    <div className={styles.evo3}>
                        <img src={imgPokemon} alt="" height="auto" width="80px" />
                        <h2>Venusaur</h2>
                    </div>
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.secondLeft}>
                    <div className={styles.pokemonAbout}>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Generation:</span>
                            <span>I</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Habitat:</span>
                            <span>Grassland</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Capture Rate:</span>
                            <span>45</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Growth Rate:</span>
                            <span>Medium-slow</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>EV Yield:</span>
                            <span>1 Sp. Attack</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Base Exp:</span>
                            <span>64</span>
                        </div>
                        <div className={styles.pokemonAboutItem}>
                            <span className={styles.pokemonAboutItemTitle}>Base Happiness:</span>
                            <span>50</span>
                        </div>
                    </div>
                </div>
                <div className={styles.secondRight}>
                    <div className={styles.pokemonAbilities}>
                        <h2>Abilities</h2>
                        <div className={styles.abilityItem}>
                            <span className={styles.abilityItemTitle}>Overgrow</span>
                        </div>
                        <div className={styles.abilityItem}>
                            <span className={styles.abilityItemTitle}>Chlorophyll</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
