import comments from "../resources/comments.json";
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
      <table>
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
      </table>
    </>
  );
};

export default Comments;
