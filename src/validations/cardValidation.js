const cardValidationSchema = {
  type: {
    in: ["body"],
    isIn: {
      options: [
        [
          "credit_card",
          "debit_card",
        ]
      ]
    },
    isString: true,
    exists: true,
  },
  cardholder_name: {
    in: ["body"],
    exists: true,
    isString: true,
    isLength:{
        options:{
            max:100
        }
    }
  },
  expiration_date:{
    in: ["body"],
    exists: true,
    isDate: {
        format: 'YYYY-MM-DD'
    }
  },
  cvv:{
    in: ["body"],
    isString: true,
    exists: true,
    isLength:{
        options:{
            max:3
        }
    }
  },
  issuer:{
    in: ["body"],
    isString:true,
    exists: true,
    isLength:{
        options:{
            max:50
        }
    }
  },
  commentary:{
    in: ["body"],
    isString:true,
    optional:true
  }
};

const addcardValidationSchema = {
    ...cardValidationSchema
}

const updateCardValidationSchema = {
    card_id:{
        in: ["params"],
        isString: true,
        isLength:{
            options:{
                max:36
            }
        }
    },
    ...cardValidationSchema
}

const deleteCardValidationSchema = {
    card_id:{
        in: ["params"],
        isString: true,
        isLength:{
            options:{
                max:36
            }
        }
    }
}

export {
    addcardValidationSchema,
    updateCardValidationSchema,
    deleteCardValidationSchema
}