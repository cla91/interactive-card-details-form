import FormSuccessfull from "./FormSuccessfull";
import Form from "./Form";
import { useFormContext } from "react-hook-form";
import "./../assets/styles/formContainer.css";

export default function FormContainer() {
  const {
    formState: { isSubmitSuccessful },
  } = useFormContext();
  return (
    <section className={`formContainer ${isSubmitSuccessful && "success"}`}>
      {isSubmitSuccessful ? <FormSuccessfull /> : <Form />}
    </section>
  );
}
