import './style.css';
import './About.css';
import { useEffect } from 'react';

function Aboutgita() {

    useEffect(() => {
        if (window.location.pathname === '/aboutgita') {
            document.getElementById('loading').style.display = 'none';
        }
    }, []);


    return (
        <>
            <div className='boxim box1'>
                <div className="boxbar">
                    <img className="thumbnail img-fluid"
                        src="https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75"
                        alt="" />

                    <div className="text d-flex flex-wrap justify-content-center" style={{ width: '80vh' }}>
                        <h1 className="fw-bold display-4 text-light">About Bhagwat Gita</h1>
                    </div>
                </div>
            </div>

            <div className="box1 bodypart" style={{ minHeight: '70vh' }}>
                <div className="fs-4 box ag d-flex justify-content-center flex-column align-items-center">
                    <p className='  slok-2'>
                        Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a practical guide to one's life that guides one to re-organise their life, achieve inner peace and approach the Supreme Lord (the Ultimate Reality). It is a 700-verse text in Sanskrit which comprises chapters 23 through 40 in the Bhishma-Parva section of the Mahabharata.
                    </p>
                    <br />
                    <p className=' slok-2'>

                        The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.
                    </p>

                </div>
            </div>
        </>
    );
}

export default Aboutgita;
