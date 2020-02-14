export default function validateFields(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Required Your Name";
  }
  // Company Errors
  if (!values.company) {
    errors.company = "Required Company";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Phone Errors
  if (!values.phone) {
    errors.phone = "Required phone";
  }
  // Password Errors
  if (!values.message) {
    errors.message = "Message is empty";
  }
  return errors;
}
