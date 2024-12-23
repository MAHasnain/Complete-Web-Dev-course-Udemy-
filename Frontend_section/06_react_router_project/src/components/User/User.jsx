
import { useParams } from "react-router-dom";

const User = () => {
  const {id} = useParams();

  return (
    <>
      <h1>User {id}</h1>
    </>
  );
};

export default User;
