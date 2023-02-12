const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: Page not found</h1>
        <p>Sorry, we can't find this page</p>
        <img
          id="trooper"
          src="\images\daniel-k-cheung-7XHZ_47178U-unsplash.jpg"
          alt="Stormtrooper in Darkness"
        />
      </main>
    </Def>
  );
}

module.exports = error404;
