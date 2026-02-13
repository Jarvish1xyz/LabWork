import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Explainv from './Explainv';

function Vlist() {
    const { id, idv } = useParams();
    const [verse, setVerse] = useState(null);


    useEffect(() => {
        const urlv = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${idv}/`;
        console.log(urlv);
        const options2 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            let v = fetch(urlv, options2);
            v.then((response) => {
                return response.json();
            }).then((Verse) => {
                setVerse(Verse);
            });
        } catch (error) {
            console.error(error);
        }
    }, [id, idv]);
    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'});
        if (verse===null) {
            document.getElementById('loading').style.display = 'flex';
        }
        else {
            document.getElementById('loading').style.display = 'none';
        }
    }, [verse]);

    return (
        <>
            <div className="box1 boxbar text-center" id="mcards" >
                <Explainv />
            </div>
            <div className="box1 bodypart d-flex justify-content-center align-item-center mt-3 mb-3" style={{ height: 'auto' }}>
                <div className="box p-2">
                    {verse && (
                        <>
                            <div className=" coll">
                                <div className='row m-3'>
                                    <h2 className="card-title fw-bold text-center m-3">Translation</h2>
                                    <h5 className="fw-normal mb-lh-base slok-3 lh-base">
                                        {verse.translations
                                            .filter(tr => tr.author_name === "Shri Purohit Swami")
                                            .map((tr, index) => (
                                                <p key={index} className="card-text mb-3">{tr.description}</p>
                                            ))}
                                    </h5>
                                </div>
                                <div className='row m-3'>
                                    <h2 className="card-title text-center m-3">Commentary</h2>
                                    <h5 className=" mb-2 slok-3 lh-base">
                                        {verse.commentaries
                                            .filter(tr => tr.author_name === "Swami Sivananda")
                                            .map((tr, index) => (
                                                <p key={index} className="card-text mb-3">{tr.description}</p>
                                            ))}
                                    </h5>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Vlist;