"use client";

import React, { useReducer, useState } from "react";
import styles from "./Contact.module.scss";
import Input from "../common/Input";

type FormState = {
  name: string;
  email: string;
  phone: string;
};

type FormAction =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "RESET" };

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^[0-9+()\- ]{6,20}$/.test(phone); // simple phone validation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Validations ---
    if (!state.name.trim() || !state.email.trim() || !state.phone.trim()) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    if (!validateEmail(state.email)) {
      setMessage({ type: "error", text: "Please enter a valid email." });
      return;
    }

    if (!validatePhone(state.phone)) {
      setMessage({ type: "error", text: "Please enter a valid phone number." });
      return;
    }

    try {
      const res = await fetch("/api/sendLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Lead sent successfully!" });
        dispatch({ type: "RESET" });
      } else {
        setMessage({
          type: "error",
          text: "Failed to send lead: " + data.error,
        });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Network error, please try again." });
      console.error(err);
    }

    // Remove message after 5 seconds
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className="sectionHeader">Get in touch</h2>
        <p className="sectionDescription">
          Have any questions? Contact us below
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form__inline}>
            <Input
              name="name"
              placeholder="name"
              value={state.name}
              onChange={(val) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "name",
                  value: val,
                })
              }
            />
            <Input
              name="phone"
              placeholder="phone"
              value={state.phone}
              onChange={(val) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "phone",
                  value: val,
                })
              }
            />
          </div>
          <Input
            name="email"
            placeholder="email"
            value={state.email}
            onChange={(val) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: val,
              })
            }
          />

          <button type="submit" className={styles.form__submit}>
            Submit
          </button>

          {message && (
            <p
              className={
                message.type === "success"
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {message.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
