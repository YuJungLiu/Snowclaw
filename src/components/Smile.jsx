import React, { useState, useEffect, useRef } from 'react';
import './Smile.css';

const Smile = () => {
    // --- 核心狀態 (對照 style.js) ---
    const [count, setCount] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [faceSrc, setFaceSrc] = useState('assets/smile.png'); // 使用你原本的路徑
    const [activeLayerIdx, setActiveLayerIdx] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(0);

    // 模擬 HTML 中的四個背景節點
    const [bgLayers, setBgLayers] = useState([
        { gameClass: 'game-bg-lvl-0', quoteClass: 'quote-bg-lvl-0', opacity: 1, trans: 'opacity 1.5s ease-in-out' },
        { gameClass: '', quoteClass: '', opacity: 0, trans: 'opacity 1.5s ease-in-out' }
    ]);

    const resetTimerRef = useRef(null);

    // --- 漸層轉場函式 (對照 style.js 第 21-45 行) ---
    const transitionToLevel = (lvl) => {
        if (currentLevel === lvl) return;

        const nextIdx = activeLayerIdx;
        const prevIdx = (activeLayerIdx === 0) ? 1 : 0;
        
        const transTime = (lvl === 'cry') ? 'opacity 0.3s ease-in' : 'opacity 1.5s ease-in-out';

        setBgLayers(prev => {
            const newState = [...prev];
            // 更新即將顯示的這一層
            newState[nextIdx] = {
                gameClass: `game-bg-lvl-${lvl}`,
                quoteClass: `quote-bg-lvl-${lvl}`,
                opacity: 1,
                trans: transTime
            };
            // 隱藏原本顯示的那一層
            newState[prevIdx] = {
                ...newState[prevIdx],
                opacity: 0,
                trans: transTime
            };
            return newState;
        });

        setActiveLayerIdx(prevIdx); // 切換下一次使用的層
        setCurrentLevel(lvl);
    };

    const handleGameClick = (e) => {
        if (isGameOver) return;

        const newCount = count + 1;
        setCount(newCount);

        // --- 等級與 Overlay 邏輯 (對照 style.js 第 47-61 行) ---
        if (newCount === 13) {
            setIsGameOver(true);
            setFaceSrc('assets/cry.png');
            transitionToLevel('cry');
            return; // 結束後不處理後續位移
        } else if (newCount === 8) {
            transitionToLevel('2');
        } else if (newCount === 3) {
            transitionToLevel('1');
        }

        // --- 臉部方向判斷 (對照 style.js 第 64-70 行) ---
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const oneThird = rect.width / 3;

        if (clickX < oneThird) setFaceSrc('assets/smile_left.png');
        else if (clickX < oneThird * 2) setFaceSrc('assets/smile_middle.png');
        else setFaceSrc('assets/smile_right.png');

        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
            if (!isGameOver) setFaceSrc('assets/smile.png');
        }, 250);
    };

    // --- Bubble Pop Transform (對照 style.js 第 11-19 行) ---
    const getPopStyle = () => {
        if (!isGameOver && count >= 9 && count < 13) {
            let progress = count - 8;
            return {
                transform: `scale(${1 + progress * 0.02}) translateY(${progress * -6}px) rotate(${progress * 1}deg)`
            };
        }
        return {};
    };

    return (
        <>
            <section id="game-interactive-zone" className={`game ${isGameOver ? 'is-locked' : ''}`} onClick={handleGameClick}>
                <div className="img-gradient-wrapper">
                    {/* 背景層 1 & 2 */}
                    <div className={`bg-layer ${bgLayers[0].gameClass}`} style={{ opacity: bgLayers[0].opacity, transition: bgLayers[0].trans, zIndex: 1 }}></div>
                    <div className={`bg-layer ${bgLayers[1].gameClass}`} style={{ opacity: bgLayers[1].opacity, transition: bgLayers[1].trans, zIndex: 2 }}></div>
                    
                    <div className="face-stack" style={{ position: 'relative', zIndex: 10 }}>
                        <img id="face-image" src={faceSrc} alt="face" draggable="false" />
                        
                        {/* Overlay 控制 */}
                        <img id="overlay-5" src="assets/overlay_5.png" 
                            className={count >= 3 && count < 8 && !isGameOver ? 'show-overlay' : 'hidden-overlay'} 
                        />
                        <img id="overlay-10" src="assets/overlay_10.png" 
                            className={count >= 8 && !isGameOver ? 'show-overlay' : 'hidden-overlay'} 
                            style={getPopStyle()}
                        />
                    </div>
                </div>
            </section>

            <section className="quote">
                {/* Quote 背景層 1 & 2 */}
                <div className={`bg-layer ${bgLayers[0].quoteClass}`} style={{ opacity: bgLayers[0].opacity, transition: bgLayers[0].trans, zIndex: 1 }}></div>
                <div className={`bg-layer ${bgLayers[1].quoteClass}`} style={{ opacity: bgLayers[1].opacity, transition: bgLayers[1].trans, zIndex: 2 }}></div>
                
                <p style={{ position: 'relative', zIndex: 5 }}>
                    In the world we craft, find the quiet you seek.
                </p>
            </section>
        </>
    );
};

export default Smile;