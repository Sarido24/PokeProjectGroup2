import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Detail/DetailPage.module.css';
import { MyContext } from '../../context/index';

function DetailPage() {
  // Mengambil parameter ID dari URL
  const { id } = useParams();
  
  // Mengambil data dari konteks global menggunakan MyContext
  const { data, speciesData, evolutionData, evolutionSprites, fetchPokemonData } = useContext(MyContext);

  // useEffect untuk memanggil fetchPokemonData saat komponen pertama kali di proses atau load atau ID berubah
  useEffect(() => {
    if (id) {
      fetchPokemonData(id);
    }
  }, [id, fetchPokemonData]);

  // Fungsi untuk merender proses evolusi
  const renderEvolutionChain = (chain) => {
    if (!chain) return null; // Jika tidak ada proses evolusi, kembalikan null
    const evoChain = [];
    let evoData = chain;

    do {
      // Menambahkan data evolusi ke dalam array evoChain
      evoChain.push({
        species_name: evoData.species.name,
        min_level: !evoData.evolution_details[0] ? 1 : evoData.evolution_details[0].min_level,
        trigger_name: !evoData.evolution_details[0] ? null : evoData.evolution_details[0].trigger.name,
      });

      evoData = evoData.evolves_to[0]; // Lanjut ke evolusi berikutnya
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    return (
      <div className={styles.evolutionTable}>
        {evoChain.map((evo, index) => (
          <div key={index} className={styles[`evo${index + 1}`]}>
            <img src={evolutionSprites[evo.species_name]} alt={evo.species_name} height="80px" />
            <h2>{evo.species_name}</h2>
            {index < evoChain.length - 1 && <div className={styles.arrow}>{'>'}</div>}
          </div>
        ))}
      </div>
    );
  };
  if (!data || !speciesData || !evolutionData) {
    return <div>Loading...</div>;
  }

  // Mengambil nilai egg cycle
  const eggCycles = speciesData.hatch_counter;
  
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} height="auto" width="450px" className={styles.mainPokemonImage} />
        </div>
        <div className={styles.mainRight}>
          <div className={styles.cardName}>
            <p>Pokemon Name</p>
            <h1>{data.name}</h1>
          </div>
          <div className={styles.cardStatus}>
            <p>Pokemon Types</p>
            <h3>{data.types.map(type => type.type.name).join(', ')}</h3>
          </div>
        </div>
      </div>
      <div className={styles.evolutionSection}>
        <h3>Evolution Chain</h3>
        {renderEvolutionChain(evolutionData.chain)}
      </div>
      <div className={styles.second}>
        <div className={styles.secondLeft}>
          <div className={styles.pokemonAbout}>
            <div className={styles.pokemonAboutItem}>
              <span className={styles.pokemonAboutItemTitle}>Generation:</span>
              <span>{speciesData.generation.name}</span>
            </div>
            <div className={styles.pokemonAboutItem}>
              <span className={styles.pokemonAboutItemTitle}>Habitat:</span>
              <span>{speciesData.habitat.name}</span>
            </div>
            <div className={styles.pokemonAboutItem}>
              <span className={styles.pokemonAboutItemTitle}>Capture Rate:</span>
              <span>{speciesData.capture_rate}</span>
            </div>
            <div className={styles.pokemonAboutItem}>
              <span className={styles.pokemonAboutItemTitle}>Growth Rate:</span>
              <span>{speciesData.growth_rate.name}</span>
            </div>
            <div className={styles.pokemonAboutItem}>
              <span className={styles.pokemonAboutItemTitle}>Base Exp:</span>
              <span>{data.base_experience}</span>
            </div>
          </div>
        </div>
        <div className={styles.secondRight}>
          <div className={styles.pokemonAbilities}>
            <h2>Abilities</h2>
            {data.abilities.map(ability => (
              <div key={ability.ability.name} className={styles.abilityItem}>
                <span className={styles.abilityItemTitle}>{ability.ability.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.pokemonBreed}>
            <h2>Breeding</h2>
            <div className={styles.breedItem}>
              <span className={styles.breedItemTitle}>Egg Groups:</span>
              <span className={styles.breedItemValue}>{speciesData.egg_groups.map(group => group.name).join(', ')}</span>
            </div>
            <div className={styles.breedItem}>
              <span className={styles.breedItemTitle}>Egg Cycle:</span>
              <span>{eggCycles} Cycle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
