import styles from "./App.module.css";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const fieldsScheme = yup.object().shape({
  email: yup.string().required("Введите почту"),
  password: yup
    .string()
    .required("Введите пароль")
    .max(20, "Пароль должен быть не более 20 символов")
    .min(5, "Пароль должен быть не менее  5 символов"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      cPassword: "",
    },
    resolver: yupResolver(fieldsScheme),
    mode: "onTouched",
  });

  const getErrorMessages = () => {
    let loginError = "";
    if (Object.keys(errors.length > 0)) {
      loginError = Object.keys(errors)
        .map((key) => (loginError = `${errors[key]?.message} \n`))
        .join("");
    }
    return loginError;
  };

  const onSubmit = (data) => {
    console.log(`Данные формы`, data);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {getErrorMessages() && (
          <div className={styles.errorLabel}>{getErrorMessages()}</div>
        )}
        <input name="email" type="email" {...register("email")} />
        <input name="password" type="password" {...register("password")} />
        <input name="cPassword" type="password" {...register("cPassword")} />
        <button type="submit" disabled={!isValid}>
          Зарегаться
        </button>
      </form>
    </div>
  );
};
