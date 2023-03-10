const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div>
          <ul>
            <li id="placeInfo">
              <img src={data.place.pic} />
            </li>
            <li id="placeInfo">
              <h2>Rating</h2>
              <p>Not Rated</p>
              <h2>Description</h2>
              <p>
                Located in {data.place.city}, {data.place.state} and serves{" "}
                {data.place.cuisines}
              </p>
            </li>
          </ul>
        </div>
        <div id="comments">
          <h2>Comments</h2>
          <p>No comments yet</p>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
