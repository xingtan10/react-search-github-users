import { FaBeer } from "react-icons/fa";
import Review from "./Review";
const AppReview = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
      </div>
      <Review />
    </main>
  );
};
export default AppReview;
