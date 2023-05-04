import posts from "../resources/posts.json";
const Posts = () => {
  const printData = () => {
    return posts.map((p, index) => {
      const { userId, id, title, body } = p;
      return (
        <tr key={index}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
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
            <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </table>
    </>
  );
};

export default Posts;
