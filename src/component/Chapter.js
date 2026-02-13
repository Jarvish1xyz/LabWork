import './style.css';
import './chsty.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Explain from './Explain';
import { useNavigate } from 'react-router-dom';


function Chapter() {
    const { id } = useParams();
    const [Verses, setVerses] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`;
        console.log(url);
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            let v = fetch(url, options);
            v.then((response) => {
                return response.json();
            }).then((Gita) => {
                setVerses(Gita);
            });
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        window.scrollTo({top:0, behavior:'smooth'});
        if (Verses.length === 0) {
            document.getElementById('loading').style.display = 'flex';
        }
        else {
            document.getElementById('loading').style.display = 'none';
        }
    }, [Verses]);

    const handleVerseClick = (idv) => {
        window.scrollTo({top:0, behavior:'smooth'});
        document.getElementById('loading').style.display = 'flex';
        navigate(`/chapter/${id}/verse/${idv}`);
    };

    return (
        <>
            <div class="box1 boxbar text-center" id="mcards" >
                <Explain />
            </div>
            <div class="box1 bodypart">
                <div class="box p-2">
                    <div id="vcards" class="container m-auto row ch row-cols-1" style={{ width: '100%' }}>
                        <hr className='m-0' />
                        <div className='m-3'>
                            <div className='fs-5 fw-semibold'>{Verses.length} Verses</div>
                        </div>
                        <hr />
                        {Verses.map((verse) => {
                            const description = verse.translations
                                .filter((tr) => tr.author_name === "Swami Gambirananda")
                                .map((tr, index) => (
                                    <p key={index} className="card-text mb-3">
                                        {tr.description}
                                    </p>
                                ));

                            const collapseId = `collapseExample${verse.verse_number}`;

                            return (
                                <>

                                    <div className="d-flex flex-wrap" onClick={() => handleVerseClick(verse.verse_number)} aria-controls={collapseId}>
                                        <div className="col row row-cols-1 pqr p-3">
                                            <div className="col-12 col-lg-2">
                                                <span className="card-title card-ch">
                                                    Verse {verse.verse_number}
                                                </span>
                                            </div>
                                            <div className="col-12 col-lg-10">{description}</div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chapter;