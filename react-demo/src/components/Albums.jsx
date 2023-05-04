import albums from "../resources/albums.json";
function Albums() {
  return (
    <>
      {albums.map((a, index) => {
        return a.userId;
      })}
    </>
  );
}

export default Albums;
