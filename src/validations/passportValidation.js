const passportValidationSchema = {
  first_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 100,
      },
    },
  },
  last_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 100,
      },
    },
  },
  passport_number: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 20,
      },
    },
  },
  nationality: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 100,
      },
    },
  },
  date_of_birth: {
    in: ["body"],
    optional: true,
    isDate: {
      format: "YYYY-MM-DD",
    },
  },
  issue_date: {
    in: ["body"],
    exists: true,
    isDate: {
      format: "YYYY-MM-DD",
    },
  },
  expiration_date: {
    in: ["body"],
    exists: true,
    isDate: {
      format: "YYYY-MM-DD",
    },
  },
  status: {
    in: ["body"],
    isIn: {
      options: [["valid", "expired", "renewed"]],
    },
    isString: true,
    exists: true,
  },
  commentary: {
    in: ["body"],
    isString: true,
    optional: true,
  },
};

const addPassportValidationSchema = {
  ...passportValidationSchema,
};

const updatePassportValidationSchema = {
  passport_id: {
    in: ["params"],
    isString: true,
    isLength: {
      options: {
        max: 36,
      },
    },
  },
  ...passportValidationSchema,
};

const deletePassportValidationSchema = {
  passport_id: {
    in: ["params"],
    isString: true,
    isLength: {
      options: {
        max: 36,
      },
    },
  }
};
export { addPassportValidationSchema, 
    updatePassportValidationSchema,
deletePassportValidationSchema };
