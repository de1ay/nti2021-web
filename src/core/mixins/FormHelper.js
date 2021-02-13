import { useToast } from 'vue-toastification';

const toast = useToast();

const FormHelper = {
  data() {
    return {
      fieldsDefinitions: {},
      fieldsValues: {},
    };
  },
  computed: {
    isFormValid() {
      return Object.keys(this.fieldsDefinitions).reduce((res, key) => {
        if (!this.fieldsDefinitions[key].isValid) {
          /* eslint-disable-next-line */
          res = false;
        }
        return res;
      }, true);
    },
    fieldsRelations() {
      return Object.keys(this.fieldsDefinitions).reduce((res, key) => {
        if (this.fieldsDefinitions[key].validationRules?.requiredFields) {
          /* eslint-disable-next-line */
          res[key] = this.fieldsDefinitions[key].validationRules.requiredFields;
        }
        return res;
      }, {});
    },
  },
  methods: {
    setFieldError(fieldName, text = '') {
      if (this.fieldsDefinitions[fieldName]) {
        this.fieldsDefinitions[fieldName].error = text;
        if (typeof text === 'string' && text.length > 0) {
          this.fieldsDefinitions[fieldName].isValid = false;
          toast.error(text);
        } else this.fieldsDefinitions[fieldName].isValid = true;
      }
    },
    isValueChanged(newVal, originVal) {
      if (newVal === null || newVal === undefined
        || originVal === null || originVal === undefined) {
        if (newVal !== originVal) return true;
      }
      if (typeof originVal === 'object') {
        if (Object.keys(newVal).length !== Object.keys(originVal).length) return true;
        /* eslint-disable-next-line */
        return Object.keys(newVal).filter(key => {
          return !originVal[key] || newVal[key] !== originVal[key];
        }).length !== 0;
      }
      return newVal !== originVal;
    },
    isFieldEmpty(key) {
      const val = this.fieldsValues[key];
      if (val === null || val === undefined) {
        return true;
      }
      switch (typeof val) {
        case 'object': {
          if (val.name) return false;
          return Object.keys(val).length === 0;
        }
        case 'string': {
          return val.length === 0;
        }
        default: {
          return false;
        }
      }
    },
    validateField(key) {
      const val = this.fieldsValues[key];
      if (this.fieldsDefinitions[key].required && this.isFieldEmpty(key)) {
        this.setFieldError(key, `Поле "${this.fieldsDefinitions[key].label}" не заполнено`);
        return;
      }
      const validationRules = this.fieldsDefinitions[key].validationRules || {};
      if (validationRules.minLength && val.length < validationRules.minLength) {
        this.setFieldError(key, `Поле "${this.fieldsDefinitions[key].label}". Минимальное количество символов - ${validationRules.minLength}`);
        return;
      }
      if (validationRules.maxLength && val.length > validationRules.maxLength) {
        this.setFieldError(key, `Поле "${this.fieldsDefinitions[key].label}". Максимальное количество символов - ${validationRules.maxLength}`);
        return;
      }
      this.setFieldError(key, '');
    },
    validateRelations(key) {
      if (this.isFieldEmpty(key)) return;
      this.fieldsRelations[key].forEach((reqFieldKey) => {
        if (this.isFieldEmpty(reqFieldKey)) {
          this.setFieldError(reqFieldKey, `Поле "${this.fieldsDefinitions[reqFieldKey].label}" не заполнено`);
        }
      });
    },
    validateForm() {
      Object.keys(this.fieldsDefinitions).forEach((key) => this.validateField(key));
      Object.keys(this.fieldsRelations).forEach((key) => this.validateRelations(key));
    },
    showServerValidationErrors(err) {
      this.$toasted.error(err.message);
      if (err.validation) {
        Object.keys(err.validation).forEach((key) => {
          this.setFieldError(key, err.validation[key][0]);
        });
      }
    },
    getChangedFields(origin) {
      return Object.keys(this.fieldsDefinitions).reduce((res, key) => {
        if (this.isValueChanged(this.fieldsValues[key], origin[key])) {
          /* eslint-disable-next-line */
          res[key] = this.fieldsValues[key];
          if (this.fieldsRelations[key]) {
            this.fieldsRelations[key].forEach((reqFieldKey) => {
              /* eslint-disable-next-line */
              res[reqFieldKey] = this.fieldsValues[reqFieldKey];
            });
          }
        }
        return res;
      }, {});
    },
  },
};

export default FormHelper;
