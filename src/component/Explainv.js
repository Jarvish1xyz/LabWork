import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Explainv() {
    const { id, idv } = useParams();
    const [verse, setVerse] = useState([]);

    useEffect(() => {
        const urlCh = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${idv}/`;
        console.log(urlCh);
        const options1 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            let p = fetch(urlCh, options1);
            p.then((response) => {
                return response.json();
            }).then((Gitach) => {
                setVerse(Gitach);
            });
        } catch (error) {
            console.error('Error fetching chapters:', error);
        }
    }, [id, idv]);

    return (
        <>
            <div className=" w-100 coll text-center">
                <div className='row m-4'>
                    <h2 class="card-title">BG {verse.chapter_number}.{verse.verse_number}</h2>
                    <h4 class=" mb-2 slok-1 card-ch lh-base">{verse.text}</h4>
                </div>
                <div className='row m-4'>
                    <h5 class="fw-normal slok-2 mb-2 lh-base">{verse.transliteration}</h5>
                </div>
                <div className=' row m-4'>
                    <h5 class="fw-normal slok-2 mb-2 lh-base">{verse.word_meanings}</h5>
                </div>
            </div>
        </>
    );
}

export default Explainv;