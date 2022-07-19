import AppFrame from "../HigherOrderComponent/AppFrame";
import RateUs from "../Component/RateUs";

const Rating = () => {
  return (
    <div>
      <RateUs />
    </div>
  );
};
export default AppFrame(Rating);
