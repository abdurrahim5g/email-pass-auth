import auth from "../../firebase/firebase";

const Home = () => {
  //   const [user, setUser] = useState();
  const user = auth.currentUser;

  return (
    <div className="home-component">
      <p>
        <strong>User UID:</strong> {user.uid}
      </p>
    </div>
  );
};

export default Home;
