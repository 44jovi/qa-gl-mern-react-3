import todos from "../resources/todos.json";
const Todos = () => {
  const printData = () => {
    return todos.map((p, index) => {
      const { userId, id, title, completed } = p;

      return (
        <tr key={index}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
          {/* TODO: render true or false for "completed" */}
          <td>{completed}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </table>
    </>
  );
};

export default Todos;
