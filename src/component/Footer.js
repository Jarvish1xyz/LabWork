import React, { useEffect, useState, useCallback } from 'react';
import './Footer.css';

// ✅ Move constants outside the component
const totalChapters = 18;
const versesPerChapter = {
  1: 47, 2: 72, 3: 43, 4: 42, 5: 29, 6: 47, 7: 30, 8: 28, 9: 34,
  10: 42, 11: 55, 12: 20, 13: 35, 14: 27, 15: 20, 16: 24, 17: 28, 18: 78
};

function Footer() {
  const [chapter, setChapter] = useState(null);
  const [verse, setVerse] = useState(null);
  const [verseData, setVerseData] = useState(null);

  // ✅ generateVerse wrapped in useCallback (no warnings now)
  const generateVerse = useCallback(() => {
    const ch = Math.floor(Math.random() * totalChapters) + 1;
    const ver = Math.floor(Math.random() * versesPerChapter[ch]) + 1;
    setChapter(ch);
    setVerse(ver);
    sessionStorage.setItem('verseData', JSON.stringify({ ch, ver }));
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem('verseData');
    if (saved) {
      const { ch, ver } = JSON.parse(saved);
      setChapter(ch);
      setVerse(ver);
    } else {
      generateVerse();
    }
  }, [generateVerse]);

  useEffect(() => {
    if (!chapter || !verse) return;

    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => setVerseData(data))
      .catch(err => console.error('Error fetching verse:', err));
  }, [chapter, verse]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-verse">
        {chapter && verse ? (
          <>
            <p>
              <em>Verse of Your Visit:</em>{' '}
              <strong>BG {chapter}.{verse}</strong>
            </p>

            {verseData ? (
              verseData.translations
                ?.filter(tr => tr.author_name === 'Swami Sivananda')
                .map((tr, index) => (
                  <p key={index} className="verse-text">
                    “{tr.description}”
                  </p>
                ))
            ) : (
              <p>Loading verse...</p>
            )}
          </>
        ) : (
          <p>Loading verse of the visit...</p>
        )}

        <button onClick={scrollToTop} className="btn btn-primary scroll-btn">
          Go to Top
        </button>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ved Vyas Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
