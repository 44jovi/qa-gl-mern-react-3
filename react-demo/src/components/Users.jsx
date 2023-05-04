import users from "../resources/users.json";
import { Table } from "reactstrap";

const Users = () => {
  const printData = () => {
    return users.map((u, index) => {
      const {
        id,
        name,
        username,
        email,
        address: {
          street,
          suite,
          city,
          zipcode,
          geo: { lat, lng },
        },
        phone,
        website,
        company,
      } = u;

      const address = [street, suite, city, zipcode, lat, lng];

      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{address.join(", ")}</td>
          <td>{phone}</td>
          <td>{website}</td>
          <td>{company.name}</td>
          <td>{company.catchPhrase}</td>
          <td>{company.bs}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>username</td>
            <td>email</td>
            <td>address</td>
            <td>phone</td>
            <td>website</td>
            <td>company</td>
            <td>company catchphrase</td>
            <td>company bs</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
    </>
  );
};

export default Users;
