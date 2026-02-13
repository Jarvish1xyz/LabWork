import './style.css';
import './Quotes.css';
import { useEffect } from 'react';

function Quotes() {

    // ✅ 1. Array of 10 Bhagavad Gita quotes
    const quotes = [
        "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.",
        "As they approach me, so I receive them. All paths, Arjuna, lead to me.",
        "I am the beginning, middle, and end of creation.",
        "Among animals I am the lion; among birds, the eagle Garuda. I am Prahlada, born among the demons, and of all that measures, I am time.",
        "I am death, which overcomes all, and the source of all beings still to be born.",
        "Just remember that I am, and that I support the entire cosmos with only a fragment of my being.",
        "Behold, Arjuna, a million divine forms, with an infinite variety of color and shape. Behold the gods of the natural world, and many more wonders never revealed before. Behold the entire cosmos turning within my body, and the other things you desire to see.",
        "I am time, the destroyer of all; I have come to consume the world.",
        "That one is dear to me who runs not after the pleasant or away from the painful, grieves not, lusts not, but lets things come and go as they happen.",
        "Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man or woman, who sees the Lord everywhere."
    ];
    
    useEffect(()=> {
        if(window.location.pathname==='/quotes'){
            document.getElementById('loading').style.display='none';
        }
    }, []);

    return (
        <>
            <div className='boxim box1'>
                <div className="boxbar">
                    <img className="thumbnail img-fluid"
                        src="https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75"
                        alt="" />

                    <div className="text flex-wrap" style={{ width: '80vh' }}>
                        <h1 className="fw-bold display-4 qt text-light">Bhagavad Gita Quotes By Lord Krishna</h1>
                    </div>
                </div>
            </div>

            <div className="box1 bodypart">
                <div className="box p-3">

                    {/* ✅ Bootstrap Carousel with Quotes Array */}
                    <div id="quotesCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {quotes.map((quote, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{
                                            height: "300px",
                                            backgroundColor: "#f8f9fa",
                                            padding: "20px",
                                        }}
                                    >
                                        <h3 className="text-center" style={{ maxWidth: "700px" }}>
                                            {quote}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 🔁 Custom SVG Controls */}
                        <button
                            className="carousel-control-prev ps-5 custom-control"
                            type="button"
                            data-bs-target="#quotesCarousel"
                            data-bs-slide="prev"
                        >
                            {/* ⬅️ Custom SVG (Previous) */}
                            <svg
                                className='svg'
                                fill="#000000"
                                height="50px"
                                width="50px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 
        c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256
        S373.818,469.333,256,469.333z"/>
                                <path d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17
        l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
        C322.083,156.087,322.083,142.58,313.752,134.248z"/>
                            </svg>
                        </button>

                        <button
                            className="carousel-control-next pe-5 custom-control"
                            type="button"
                            data-bs-target="#quotesCarousel"
                            data-bs-slide="next"
                        >
                            {/* ➡️ Custom SVG (Next) */}
                            <svg
                                className='svg'
                                fill="#000000"
                                height="50px"
                                width="50px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z 
        M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,
        469.333,256S373.818,469.333,256,469.333z"/>
                                <path d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256
        l-91.582,91.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667
        c8.331-8.331,8.331-21.839,0-30.17L228.418,134.248z"/>
                            </svg>
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Quotes;
