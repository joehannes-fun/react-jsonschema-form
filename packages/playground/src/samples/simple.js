module.exports = {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        title: "E-Mail",
      },
      password: {
        type: "string",
        title: "Password",
        minLength: 8,
      },
    },
  },
  uiSchema: {
    email: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
  },
  formData: {
    email: "",
    password: "",
  },
};
