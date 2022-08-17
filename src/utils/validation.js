import { translations } from "../translations/translations";

export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = translations.emailRequire;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = translations.emailInvalid;
  }
  if (!values.username) {
    errors.username = translations.usernameRequire;
  }
  return errors;
}
