import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Drop() {
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
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        };

        fetchChapters();
    }, []);

    const handleChapterClick = (id) => {
        navigate(`/chapter/${id}`);
    };

    const getChapterRows = () => {
        const rows = [];
        for (let i = 0; i < chapters.length; i += 2) {
            rows.push(chapters.slice(i, i + 2));
        }
        return rows;
    };

    return (
        <>
            {getChapterRows().map((pair, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {pair.map((chapter) => (
                        <div onClick={() => handleChapterClick(chapter.id)} className="col m-1 col-ch abc rounded border border-1 ">
                            Chapter {chapter.id}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Drop;