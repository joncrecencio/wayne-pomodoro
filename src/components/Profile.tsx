import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            {/* <img src="https://avatars.githubusercontent.com/u/53977965?s=400&u=5d3590bbb1a07119c1f0a58f06e42d4da6bf4f6b&v=4" alt="Jonathan Crecencio"/> */}
            <img src="https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121232442-stock-illustration-male-default-placeholder-avatar-profile.jpg" alt="Foto Vazias"/>

            <div>
                {/* <strong>Jonathan Crecencio</strong> */}
                <p>
                <img src="icons/level.svg" alt="Level"/>Level {level}
                </p>
            </div>
        </div>

    );
}