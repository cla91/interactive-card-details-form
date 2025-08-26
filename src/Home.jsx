import { useForm, FormProvider } from "react-hook-form";
import FormContainer from "./components/FormContainer";
import CardContainer from "./components/CardContainer";

const initialState = {
  cardholderName: "",
  cardNumber: "",
  expDate: {
    month: "",
    year: "",
  },
  cvc: "",
};

function Home() {
  const methods = useForm({
    defaultValues: initialState,
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <main>
        <CardContainer />
        <FormContainer />
      </main>
    </FormProvider>
  );
}

export default Home;
