import todos from "../resources/todos.json";
import { Table } from "reactstrap";

const Todos = () => {
  const printData = () => {
    return todos.map((p, index) => {
      const { userId, id, title, completed } = p;

      return (
        <tr key={index}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td>{String(completed)}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
    </>
  );
};

export default Todos;
