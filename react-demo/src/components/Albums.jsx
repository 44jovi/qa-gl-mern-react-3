import albums from "../resources/albums.json";
const Albums = () => {
  const printData = () => {
    return albums.map((a, index) => {
      const { userId, id, title } = a;
      console.log(a);
      return (
        <tr key={index}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </table>
    </>
  );
};

export default Albums;
