function createContent() {
  document.body.innerHTML = `
    <header>
      <ul id="top-menu-bar">
        <li>
          <a href="#">DESPRE NOI</a>
        </li>
        <li>
          <a href="#products">PRODUSE</a>
        </li>
        <li>
          <a href="#">OFERTE</a>
        </li>
        <li>
          <a href="#">RECENZII</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <hr />
      <div id="header-wrapper">
        <div id="header-picture">
          <img src="images/solar.jpg" alt="logo" width="100px" />
        </div>
        <div id="header-info">
          <div id="title">
            <h1>CHIS SIMONA FLORINA</h1>
          </div>
          <h2>
            <img src="images/home.png" alt="" /> Zalău, Sălaj
            <img src="images/location.png" alt="" />Strada Luncii nr 20
            <img src="images/telephone.png" alt="" /> 0748 15 98 54
          </h2>
        </div>
      </div>
    </header>
    <hr />

    <div id="content">
      <div id="admin" style="display: none">
        <img src="images/logo.png" alt="logo" />
        <h2>
          <img src="images/home.png" alt="" /> Zalău, Sălaj
          <img src="images/location.png" alt="" />Strada Luncii nr 20
          <img src="images/telephone.png" alt="" /> 0748 15 98 54
        </h2>
      </div>
      <div id="products">
        <div id="tomatoes">
          <h2>ROȘII</h2>
          <img src="images/rosii1.jpg" class="veggies" alt="" />
        </div>
        <div id="onion">
          <h2>CEAPĂ VERDE</h2>
          <img src="images/ceapa.jpg" class="veggies" alt="" />
        </div>

        <div id="salad">
          <h2>SALATĂ VERDE</h2>
          <img src="images/salata.jpg" class="veggies" alt="" />
        </div>

        <div id="cabagge">
          <h2>VARZĂ</h2>
          <img src="images/varza.jpg" class="veggies" alt="" />
        </div>

        <div id="peppers">
          <h2>ARDEI</h2>
          <img src="images/ardei.jpg" class="veggies" alt="" />
        </div>

        <div id="cucumber">
          <h2>CASTRAVEȚI</h2>
          <img src="images/castraveti.jpg" class="veggies" alt="" />
        </div>

        <div id="parsley">
          <h2>PĂTRUNJEL</h2>
          <img src="images/patrunjel.jpg" class="veggies" alt="" />
        </div>

        <div id="dill">
          <h2>MĂRAR</h2>
          <img src="images/marar.jpg" class="veggies" alt="" />
        </div>

        <div id="radish">
          <h2>RIDICHI</h2>
          <img src="images/ridichi.jpg" class="veggies" alt="" />
        </div>
      </div>
    </div>

    <footer>
      <span>
        2024@Copyrights&Designed by
        <a href="https://github.com/sabovoichita/">Voichita</a>
      </span>
      <a
        href="https://www.facebook.com/simona.chis.942"
        title="facebook"
        target="_blank"
        ><img src="images/facebook.png" width="40px" alt="facebook logo"
      /></a>
      <a href="mailto:simonachis@gmail.com"
        ><img src="images/emaill.svg" width="40px" alt="email"
      /></a>
      <a
        href="https://api.whatsapp.com/send/?phone=40748159854&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <img src="images/whatsapp.png" width="40px" />
      </a>
    </footer>
    `;
}
createContent();
