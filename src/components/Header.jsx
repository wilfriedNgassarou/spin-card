export default function Header() {
  return (
    <header>
      <h1>SpinCard</h1>
      <nav>
        <ul>
          <li><a href="#">Le score</a></li>
          <li><a href="#">A propos</a></li>
          <li><a href="#">Aide</a></li>
        </ul>
        <div>
          <a className="btn-header" href="#">Lancer le jeu</a>
        </div>
      </nav>
    </header>
  )
}