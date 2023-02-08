import "./App.css";
import Card from "./components/Card";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state);

  return (
    <div className="appContainer">
      {posts.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
}

export default App;
