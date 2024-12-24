import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <>
      <h1 className="p-5 text-center bg-stone-400 text-2xl" >User: {userId}</h1>
    </>
  );
};

export default User;
