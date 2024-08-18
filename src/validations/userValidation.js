const userValidationSchema = {
  first_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 30,
      },
    },
  },
  last_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 30,
      },
    },
  },
  master_password: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 64,
      },
    },
  },
  email: {
    in: ["body"],
    exists: true,
    isString: true,
    isEmail: true,
    isLength: {
      options: {
        max: 80,
      },
    },
  },
};

const signUpValidationSchema = {
    ...userValidationSchema
};

export {
    signUpValidationSchema
}
