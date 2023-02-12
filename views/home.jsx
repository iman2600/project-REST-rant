const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img
            id="trooper"
            src="\images\daniel-k-cheung-cPF2nlWcMY4-unsplash.jpg"
            alt="Stormtrooper walking on sand"
          />
          <div>
            <a href="https://unsplash.com/@danielkcheung">Daniel K Cheung</a> on
            <a href="https://unsplash.com/"> Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
