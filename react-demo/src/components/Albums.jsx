import albums from "../resources/albums.json";
import { Table } from "reactstrap";
const Albums = () => {
  const printData = () => {
    return albums.map((a, index) => {
      const { userId, id, title } = a;
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
      <Table hover striped>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
    </>
  );
};

export default Albums;
