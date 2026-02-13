import './style.css';
import Api from './Api';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='boxim box1'>
                <div className=" boxbar">
                    <img className="thumbnail img-fluid" src="https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75"
                        alt="" />

                    <div className="text">
                        <h1 className="fw-bold display-4 text-light">Experience the Gita</h1>
                        <h2 className="fw-bold display-6 text-warning">Anywhere, Anytime</h2>
                        <div onClick={() => {
                            window.scrollTo({top:0, behavior:'smooth'});
                            document.getElementById('loading').style.display = 'flex';
                            navigate('/chapter/1');
                        }} style={{ cursor: 'pointer' }} className="btn btn-light mt-3">Read now</div>
                    </div>
                </div>
            </div>

            <div className="box1 bodypart">
                <div className="box p-3">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-transparent border-0">
                                <div className="h2 card-body">
                                    Chapters
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cards" className="row ch row-cols-1 row-cols-lg-2 gx-3 gy-4">
                        <Api />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;