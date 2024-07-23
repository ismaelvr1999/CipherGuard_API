const websiteAccountValidationSchema = {
  page_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 30,
      },
    },
  },
  email: {
    in: ["body"],
    exists: true,
    isEmail: true,
    isLength: {
      options: {
        max: 70,
      },
    },
  },
  category: {
    in: ["body"],
    optional: true,
    isString: true,
    isIn: {
      options: [
        [
          "social_media",
          "email",
          "online_shopping",
          "streaming_platform",
          "other",
        ],
      ],
    },
  },
  commentary: {
    in: ["body"],
    isString: true,
    optional: true,
    isLength: {
      options: {
        max: 65535,
      },
    },
  },
  password: {
    in: ["body"],
    isString: true,
    exists: true,
  },
  user_name: {
    in: ["body"],
    isString: true,
    optional: true,
    isLength: {
      options: {
        max: 50,
      },
    },
  },
};

const addWebsiteAccountValidationSchema = {
  ...websiteAccountValidationSchema,
};

const updateWebAccountValidationSchema = {
  page_id: {
    in: ["params"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 36,
      },
    },
  },
  ...websiteAccountValidationSchema,
};
const deleteWebAccountValidationSchema = {
  page_id: {
    in: ["params"],
    exists: true,
    isString: true,
    isLength: {
      options: {
        max: 36,
      },
    },
  },
};

export {
  websiteAccountValidationSchema,
  addWebsiteAccountValidationSchema,
  updateWebAccountValidationSchema,
  deleteWebAccountValidationSchema,
};
