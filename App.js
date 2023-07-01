import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-SPORTS</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </head>

      <body>
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" style={{ position: "fixed" }}>
          <div className="Botoes-carrossel"></div>
          <a className="navbar-brand" href="#">E-sports</a>
          <a className="navbar-brand" href="#">Valorant</a>
          <a className="navbar-brand" href="#">League of Legends</a>
          <a className="navbar-brand" href="#">Counter Strike</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Quem somos</a>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <figure>
            <div className="imagen1">
              <img src="./src/CS GO.JPG" className="1" width="1400px" style={{ margin: "0" }} />
            </div>
          </figure>

          <div className="Descricao">
            <p>
              Valorant consists of a 5x5 arena in which teams take turns arming the Spike, a kind of bomb. In addition to all the skills that a good FPS demands, good aim, strategic positioning, the game has agents with unique abilities, which allow the gameplay to be more strategic than other games in the genre.
            </p>
          </div>

          <div className="imagem2">
            <img src="/imagens/LEAGUE OF LEGENDS.jpg" width="1400px" style={{ margin: "0" }} />
          </div>

          <div className="texto1">
            <p>
              League of Legends (LoL) is an online multiplayer game that involves teams battling each other in a MOBA (Multiplayer Online Battle Arena) style. In the game, two teams of players compete to destroy the enemy base while defending their own base. Each player chooses a champion with unique abilities and works together to achieve objectives, eliminate opposing players, and gain tactical advantages throughout the match. The game is known for its strategy, complex gameplay mechanics, and a wide variety of playable characters.
            </p>
          </div>

          <div className="imagem3">
            <img src="/imagens/CS GO.jpg" className="3" width="1400px" style={{ margin: "0" }} />
            <p>Counter-Strike: Global Offensive is a first-person shooter (FPS) game that involves two teams, the terrorists (T) and the counter-terrorists (CT). The main objective of the game varies depending on the specific game mode, but it usually involves planting or defusing bombs, rescuing hostages, or eliminating all players from the opposing team.</p>
          </div>

          <div className="texto2">
            <p></p>
          </div>

          <div className="my-element"></div>

          <select className="form-select" aria-label="Default select example">
            <option selected>Select the mode</option>
            <option value="1">Valorant</option>
            <option value="2">Counter Strike</option>
            <option value="3">League of Legends</option>
          </select>
        </main>

        <footer className="footer bg-dark text-light">
          <div className="blockquote-footer">
            <ul>
              <li className="footer bg-dark text-light"><a className="footer bg-dark text-light" href="" target="_blank">Download the game</a></li>
              <li className="footer bg-dark text-light"><a className="footer bg-dark text-light" href="" target="_blank">Independent Tournaments</a></li>
              <li className="footer bg-dark text-light"><a className="footer bg-dark text-light" href="" target="_blank">Download the Riot Mobile app</a></li>
            </ul>
            <ul>
              <li>
                <a className="blockquote-footer" href="" target="_blank">
                  <svg className="blockquote-footer" viewBox="0 0 25 2">
                    <title>facebook</title>
                  </svg>
                  <span className="blockquote-footer">Facebook</span>
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  <svg className="" viewBox="0 0 25 2">
                    <title>youtube</title>
                  </svg>
                  <span className="">YouTube</span>
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  <svg className="" viewBox="0 0 25 2">
                    <title>instagram</title>
                  </svg>
                  <span className="">Instagram</span>
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  <svg className="" viewBox="0 0 25 2">
                    <title>twitter</title>
                  </svg>
                  <span className="">Twitter</span>
                </a>
              </li>
              <li>
                <a className="" href="" target="_blank">
                  <svg className="" viewBox="0 0 25 2">
                    <title>discord</title>
                  </svg>
                  <span className="">Discord</span>
                </a>
              </li>
            </ul>
            <div>
              <a href="" target="_blank">
                <svg width="99" height="32" className="" viewBox="0 0 587.93 165">
                  <title>XXXXX</title>
                  <title>XXXXXXX</title>
                </svg>
              </a>
            </div>
            <div data-interaction-id="val-logo" className="">
              <img src="" alt="XXXXX" />
            </div>
          </div>
          <div className=""></div>
        </footer>
      </body>
    </div>
  );
}

export default App;


