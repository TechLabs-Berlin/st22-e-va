import AppFrame from "../HigherOrderComponent/AppFrame";
import NewForm from "../Component/NewForm";

const NewPageSurvey = () => {
  return (
    <div>
      Welcome to E-va App
      <NewForm />
    </div>
  );
};
export default AppFrame(NewPageSurvey);
