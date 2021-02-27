import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            {/* <img src="https://avatars.githubusercontent.com/u/53977965?s=400&u=5d3590bbb1a07119c1f0a58f06e42d4da6bf4f6b&v=4" alt="Jonathan Crecencio"/> */}
            <img src="/icons/photo.jpg" alt="WayneTimer"/>

            <div>
                <strong>WayneTimer</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>Level do usuário atual: {level}
                </p>
            </div>
        </div>

    );
}