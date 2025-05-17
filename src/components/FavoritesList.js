import React from "react";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((fav) => (
        <p key={fav}>{fav}</p>
      ))}
    </div>
  );
};

export default FavoritesList;