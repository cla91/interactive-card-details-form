import { useFormContext } from "react-hook-form";
import { iconComplete } from "../assets/images/images";

export default function FormSuccessfull() {
  const { reset } = useFormContext();
  const handleClick = () => {
    reset();
  };
  return (
    <>
      <img src={iconComplete} alt="" />
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <button className="formBtn" type="button" onClick={handleClick}>
        Continue
      </button>
    </>
  );
}
