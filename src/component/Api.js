// Api.js

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Api() {
    const [chapters, setChapters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChapters = async () => {
            const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
                    'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setChapters(data);
                console.log("fetch complete");
                
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        };

        fetchChapters();
    }, []);

    useEffect(()=> {
        window.scrollTo({top:0, behavior:'smooth'});
        if(chapters.length===0) {
            document.getElementById('loading').style.display = 'flex';
        }
        else {
            document.getElementById('loading').style.display = 'none';
        }
    }, [chapters]);

    const handleChapterClick = (id) => {
        window.scrollTo({top:0, behavior:'smooth'});
        document.getElementById('loading').style.display = 'flex';
        navigate(`/chapter/${id}`);
    };

    return (
        <>
            {chapters.map((chapter) => (
                <div className="col mt-1 mb-1" key={chapter.id}>
                    <div onClick={() => handleChapterClick(chapter.id)} className="newAni card abc chapter-link" style={{ width: '100%', height: '100%' }}>
                        <div className="card-body">
                            <h6 className="card-title card-ch">Chapter {chapter.id}</h6>
                            <h6 className="h2 card-title mb-2">{chapter.name_translated}</h6>
                            <p className="card-text card-text-s mb-3">{chapter.chapter_summary}</p>
                            <span className="card-link">
                                <svg className="svg me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="list">
                                    <g>
                                        <g>
                                            <circle cx="4" cy="7" r="1" />
                                            <circle cx="4" cy="12" r="1" />
                                            <circle cx="4" cy="17" r="1" />
                                            <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94" />
                                            <rect width="14" height="2" x="7" y="16" rx=".94" ry=".94" />
                                            <rect width="14" height="2" x="7" y="6" rx=".94" ry=".94" />
                                        </g>
                                    </g>
                                </svg>
                                {chapter.verses_count} Verses
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Api;
