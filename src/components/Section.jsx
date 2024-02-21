import { useEffect, useRef, useState } from "react"

export default function Section() {
  const cardsRef = useRef(null);
  const namesRef = useRef(null) ;
  const [state, setState] = useState('closed') ;
  const [intervalId, setIntervalId] = useState('') ;

  let caroussel ;

  // Permet d'afficher la carte au milieu et le nom qui correspond à l'écran
  function setItemActive(index) {
    const active = namesRef.current.querySelector('.active') ;
    
    active.classList.remove('active') ;
    caroussel.names[index].classList.add('active');
    
    caroussel.table.style.transform = `rotate(calc(-45deg * ${caroussel.index}))`
  }

  useEffect(() => {
    caroussel = {
      cards: cardsRef.current.children,
      names: namesRef.current.children,
      table: cardsRef.current.closest('.table'),
      index: 0,
      speed: 2000,
      maxIndex: cardsRef.current.children.length - 1,
  
      play: () => {
        setIntervalId(setInterval(() => {
          if(caroussel.index == caroussel.maxIndex) {
            // -1 car on incremente avant de passer en paramètre à la fonction setItemActive
            caroussel.index = -1 ;
          }

          setItemActive(++caroussel.index) ;
        }, caroussel.speed)) ;
      },
      
      stop: () => {
        
        setItemActive(0) ;
        clearInterval(intervalId) ;
        
      }
    }  
  })
  
  function handleClick(e) {
    if(state == 'opened') {
      caroussel && caroussel.stop();


      setTimeout(() => {
        setState('closed') ;
      }, 500);

      return ;
    }

    caroussel && caroussel.play() ;
    setState('opened') ;
  }

  return (


    <section>
      <article className={state == 'opened' ? 'title hidden' : 'title visible'}>
        <div ref={namesRef} className="card-name-container">
          <div data-index={0} className="card-name active">
            <h2>Pique Noir</h2>
          </div>
          <div data-index={1} className="card-name">
            <h2>Coeur Rouge</h2>
          </div>
          <div data-index={2} className="card-name">
            <h2>Trèfle Noir</h2>
          </div>
          <div data-index={3} className="card-name">
            <h2>Pique Gold</h2>
          </div>
          <div data-index={4} className="card-name">
            <h2>Biscuit Gold</h2>
          </div>
          <div data-index={5} className="card-name">
            <h2>Trèfle Gold</h2>
          </div>
          <div data-index={6} className="card-name">
            <h2>Coeur Gold</h2>
          </div>
          <div data-index={7} className="card-name">
            <h2>Biscuit</h2>
          </div>
        </div>
        <div className="text-container">
          <h2>SpinCard</h2>
          <div onClick={handleClick} className="btn btn-start">
            <img src="/assets/button.png" alt="" />
            <span className="legend">Lancer le jeu</span>
          </div>       
        </div>
        
      </article>
      <article className={state == 'opened' ? 'table-container table-container-opened' : 'table-container'}>
        <div className="table">
          <div className="table-circle">
            <div></div>
          </div>
          <div ref={cardsRef} className="card-container">
            <div data-index={0} className="card">
              <img src="/assets/png/cards/pique_noir.png" alt="Card 0" />
            </div>
            <div data-index={1} className="card">
              <img src="/assets/png/cards/coeur_rouge.png" alt="Card 2" />
            </div>
            <div data-index={2} className="card">
              <img src="/assets/png/cards/trefle_noir.png" alt="Card 4" />
            </div>
            <div data-index={3} className="card">
              <img src="/assets/png/cards/pique_gold.png" alt="Card 6" />
            </div>
            <div data-index={4} className="card">
              <img src="/assets/png/cards/biscuit_gold.png" alt="Card 7" />
            </div>
            <div data-index={5} className="card">
              <img src="/assets/png/cards/trefle_gold.png" alt="Card 5" />
            </div>
            <div data-index={6} className="card">
              <img src="/assets/png/cards/coeur_gold.png" alt="Card 3" />
            </div>
            <div data-index={7} className="card">
              <img src="/assets/png/cards/biscuit.png" alt="Card 1" />
            </div>
          </div>

        </div>
      </article>
      <div onClick={handleClick} className= { state == 'opened' ? 'btn btn-stop' : 'btn btn-stop no-visible' }>
          <img src="/assets/button.png" alt="" />
          <span className="legend">Sortir</span>
      </div>
    </section>
  )
}