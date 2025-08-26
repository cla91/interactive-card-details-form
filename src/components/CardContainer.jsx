import { cardLogo } from "../assets/images/images";
import { useFormContext, useWatch } from "react-hook-form";
import styles from "./CardContainer.module.css";
import { formatCardNumber } from "../utils/handleText";

export default function CardContainer() {
  const {
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const cardholderName = useWatch({
    name: "cardholderName",
  });
  const cardNumber = useWatch({
    name: "cardNumber",
  });
  const month = useWatch({ name: "expDate.month" });
  const year = useWatch({ name: "expDate.year" });
  const cvc = useWatch({ name: "cvc" });

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.backCard} ${styles.card}`}>
        <p>
          <span className="sr-only">CVC </span>
          {isSubmitSuccessful ? "000" : cvc.slice(0, 3) || "000"}
        </p>
      </div>
      <div className={`${styles.frontCard} ${styles.card}`}>
        <img src={cardLogo} alt="" />
        <p className={styles.cardNumber}>
          <span className="sr-only">Card number </span>
          <span>
            {isSubmitSuccessful
              ? "0000 0000 0000 0000"
              : formatCardNumber(cardNumber) || "0000 0000 0000 0000"}
          </span>
        </p>
        <div>
          <p>
            <span className="sr-only">Cardholder name </span>
            <span>
              {isSubmitSuccessful
                ? "Jane Appleseed"
                : cardholderName || "Jane Appleseed"}
            </span>
          </p>
          <p>
            <span className="sr-only">Exp. date </span>
            <span>{isSubmitSuccessful ? "00" : month.slice(0, 2) || "00"}</span>
            /<span>{isSubmitSuccessful ? "00" : year.slice(0, 2) || "00"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
