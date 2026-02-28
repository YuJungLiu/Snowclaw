import React from 'react';
import './Display.css';
import { Link } from 'react-router-dom'; // 1. 引入 Link

const Display = () => {
    // 2. 加入 id，確保連結路徑正確
    const projects = [
        { id: 'wando', name: 'Wando', img: 'assets/Wan_3.png' },
        // { id: 'psyqualogy', name: 'Psyqualogy', img: 'assets/Psy_1.png' },
        // { id: 'spelland', name: 'Spelland', img: 'assets/Spe_1.png' },
        // { id: 'no-signal', name: 'No Signal', img: 'assets/No_1.png' },
    ];

    return (
        <section className="game-display-section">
            <div className="scroll-wrapper">
                {projects.map((proj, index) => (
                    /* 3. 將 div 改為 Link，並指向專案頁面 */
                    <Link 
                        to={`/project/${proj.id}`} 
                        className="portfolio-item" 
                        key={index}
                    >
                        <img src={proj.img} alt={proj.name} />
                        <div className="overlay">
                            <div className="project-name">{proj.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* 順便將下方的「Game」連結也改為 Link，維持 SPA 的流暢感 */}
            <h3><Link to="/game">Game</Link></h3>
        </section>
    );
};

export default Display;