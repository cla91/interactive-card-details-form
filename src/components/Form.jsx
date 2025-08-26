import { useFormContext } from "react-hook-form";
import "./../assets/styles/form.css";

export default function Form() {
  const { register, control, handleSubmit, formState } = useFormContext();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <div className="fieldContainer span2">
          <label htmlFor="cardholder-name">Cardholder Name</label>
          <input
            {...register("cardholderName", {
              required: "Can't be blank",
            })}
            id="cardholder-name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            className={errors.cardholderName && "error"}
          />
          {errors.cardholderName && (
            <p className="errorMessage">{errors.cardholderName.message}</p>
          )}
        </div>
        <div className="fieldContainer span2">
          <label htmlFor="cardnumber">Card number</label>
          <input
            {...register("cardNumber", {
              required: "Can't be blank",
              validate: {
                wrongFormat: (fieldValue) => {
                  return (
                    /^[0-9\s]+$/.test(fieldValue) ||
                    "Wrong format, numbers only"
                  );
                },
                maxLength: (fieldValue) => {
                  return (
                    fieldValue.replace(/\s/g, "").length <= 16 ||
                    "Max 16 characters"
                  );
                },
              },
            })}
            id="cardnumber"
            type="text"
            placeholder="e.g. 2234 5678 9123 0000"
            className={errors.cardNumber && "error"}
          />
          {errors.cardNumber && (
            <p className="errorMessage">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="expDate" role="group" aria-labelledby="legend">
          <p className="legend span2" id="legend">
            Exp. date (MM/YY)
          </p>
          <label className="sr-only" htmlFor="month">
            Month
          </label>
          <input
            {...register("expDate.month", {
              pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, numbers only",
              },
              maxLength: {
                value: 2,
                message: "Correct format is MM",
              },
              minLength: {
                value: 2,
                message: "Correct format is MM",
              },
              required: "Can't be blank",
            })}
            id="month"
            type="text"
            placeholder="MM"
            className={errors.expDate?.month && "error"}
          />
          <label className="sr-only" htmlFor="year">
            Year
          </label>
          <input
            {...register("expDate.year", {
              required: "Can't be blank",
              pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, numbers only",
              },
              maxLength: {
                value: 2,
                message: "Correct format is YY",
              },
              minLength: {
                value: 2,
                message: "Correct format is YY",
              },
            })}
            id="year"
            type="text"
            placeholder="YY"
            className={errors.expDate?.year && "error"}
          />
          {errors.expDate?.month && (
            <p className="errorMessage">{errors.expDate.month.message}</p>
          )}
          {errors.expDate?.year && (
            <p className="errorMessage">{errors.expDate.year.message}</p>
          )}
        </div>
        <div className="fieldContainer">
          <label htmlFor="cvc">CVC</label>
          <input
            {...register("cvc", {
              required: "Can't be blank",
              pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format, numbers only",
              },
              maxLength: {
                value: 3,
                message: "3 characters needed",
              },
              minLength: {
                value: 3,
                message: "3 characters needed",
              },
            })}
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            className={errors.cvc && "error"}
          />
          {errors.cvc && <p className="errorMessage">{errors.cvc.message}</p>}
        </div>

        <button className="formBtn span2" type="submit">
          Confirm
        </button>
      </form>
    </>
  );
}
