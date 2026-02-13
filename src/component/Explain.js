import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Explain()  {
    const { id } = useParams();
    const [Chapter, setChapter] = useState([]);

    useEffect(() => {
        const urlCh = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`;
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
                setChapter(Gitach);
            });
        } catch (error) {
            console.error('Error fetching chapters:', error);
        }
    }, [id]);

    return (
        <>
            <div className="mainCh mb-2">
                <h5 className="card-title card-ch">Chapter {Chapter.chapter_number}</h5>
                <h2 className="card-subtitle mb-2 fw-bolder">{Chapter.name_translated}</h2>
                <p className="card-text d-flex flex-wrap CS text-start">{Chapter.chapter_summary}</p>
            </div>
        </>
    );
}

export default Explain;