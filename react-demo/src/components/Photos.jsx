import photos from "../resources/photos.json";
import { Table } from "reactstrap";

const Photos = () => {
  const printData = () => {
    return photos.map((p, index) => {
      const { albumId, id, title, url, thumbnailUrl } = p;
      return (
        <tr key={index}>
          <td>{albumId}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td>
            {
              <a href={url} target="_blank" rel="noreferrer">
                <img src={thumbnailUrl} alt={title} />
              </a>
            }
          </td>
          <td></td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <td>albumId</td>
            <td>id</td>
            <td>title</td>
            <td>image</td>
          </tr>
        </thead>
        <tbody>{printData()}</tbody>
      </Table>
    </>
  );
};

export default Photos;
