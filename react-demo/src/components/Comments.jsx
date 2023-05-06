import comments from "../resources/comments.json";
import { Table } from "reactstrap";

const Comments = () => {
  const printData = () => {
    return comments.map((c, index) => {
      const { postId, id, name, email, body } = c;
      return (
        <tr key={index}>
          <td>{postId}</td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{body}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <td>postId</td>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
    </>
  );
};

export default Comments;
