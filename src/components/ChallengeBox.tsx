import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenges, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)
    
    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenges ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenges.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenges.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>Completei</button>

                    </footer>
                </div>
            ) : (
                <div className = {styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
            )}

        </div>
    );
}