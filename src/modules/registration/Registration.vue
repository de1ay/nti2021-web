<template lang="pug">
teleport(to="body")
  modal-container(@close="$router.push({ name: 'Landing' })")
    div.form
      nti-input.form-email(
        v-model="fieldsValues.email"
        v-bind="fieldsDefinitions.email"
        @error="(err) => setFieldError('email', err)"
      )
      nti-input.form-password1(
        v-model="fieldsValues.password1"
        v-bind="fieldsDefinitions.password1"
        @error="(err) => setFieldError('password1', err)"
      )
      nti-input.form-password2(
        v-model="fieldsValues.password2"
        v-bind="fieldsDefinitions.password2"
        @error="(err) => setFieldError('password2', err)"
      )
      button.form-submit(@click="submit") Продолжить
</template>

<script>
import axios from '@core/api/axios';
import { useToast } from 'vue-toastification';

import ModalContainer from '@core/components/ModalContainer.vue';
import NtiInput from '@core/components/inputs/NtiInput.vue';
import FormHelperMixin from '@core/mixins/FormHelper';

const toast = useToast();

export default {
  name: 'Registration',
  components: {
    ModalContainer,
    NtiInput,
  },
  mixins: [FormHelperMixin],
  data() {
    return {
      fieldsDefinitions: {
        email: {
          isValid: false,
          error: '',
          required: true,
          type: 'text',
          label: 'Email',
          placeholder: 'Введите email',
          darkTheme: true,
        },
        password1: {
          isValid: false,
          error: '',
          required: true,
          type: 'password',
          label: 'Пароль',
          placeholder: 'Введите пароль',
          validationRules: {
            minLength: 8,
            maxLength: 20,
          },
          darkTheme: true,
        },
        password2: {
          isValid: false,
          error: '',
          required: true,
          type: 'password',
          label: 'Повторите пароль',
          placeholder: 'Повторите пароль',
          validationRules: {
            minLength: 8,
            maxLength: 20,
          },
          darkTheme: true,
        },
      },
      fieldsValues: {
        email: '',
        password1: '',
        password2: '',
      },
    };
  },
  methods: {
    submit() {
      this.validateForm();
      if (this.isFormValid) {
        if (this.customValidation()) {
          this.registerUser();
        }
      }
    },
    customValidation() {
      const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = emailRe.test(this.fieldsValues.email);
      if (!isEmailValid) {
        this.setFieldError('email', 'Email имеет неверный формат ');
      }
      let isPasswordValid = true;
      const passwordOneNumberRe = /[0-9]/g;
      if (!passwordOneNumberRe.test(this.fieldsValues.password1)) {
        isPasswordValid = false;
        this.setFieldError('password1', 'Пароль должен содержать хотя бы одну цифру');
      }
      const passwordOneSpecialSymbolRe = /[!@#$%^&*.,:;\-+=]/g;
      if (!passwordOneSpecialSymbolRe.test(this.fieldsValues.password1)) {
        isPasswordValid = false;
        this.setFieldError('password1', 'Пароль должен содержать хотя бы один знак препинания');
      }
      if (this.fieldsValues.password1.toLowerCase() === this.fieldsValues.password1) {
        isPasswordValid = false;
        this.setFieldError('password1', 'Пароль должен содержать хотя бы одну заглавную букву');
      }
      if (this.fieldsValues.password1 !== this.fieldsValues.password2) {
        isPasswordValid = false;
        this.setFieldError('password1', 'Пароли не совпадают');
        this.setFieldError('password2', 'Пароли не совпадают');
      }
      return isEmailValid && isPasswordValid;
    },
    registerUser() {
      axios({
        url: '/dj-rest-auth/registration/',
        method: 'POST',
        data: {
          ...this.fieldsValues,
          username: this.fieldsValues.email.substring(0, this.fieldsValues.email.indexOf('@')),
        },
      })
        .then((resp) => {
          if (resp.data.error !== undefined) {
            return Promise.reject(resp.data.error);
          }
          toast.success('Проверьте почту для продолжения регистрации');
          this.$router.push({ name: 'Landing' });
          return Promise.resolve(resp.data);
        })
        .catch((err) => {
          const { data } = err.response;
          if (data.email) {
            this.setFieldError('email', data.email[0]);
          }
          if (data.password1) {
            this.setFieldError('password1', data.password1[0]);
          }
          if (data.detail) {
            return Promise.reject(data.detail);
          }
          return Promise.reject(data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  > div:not(:first-of-type), > button {
    margin-top: 20px;
  }

  &-submit {
    padding: 0 20px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-surface;
    background: $color-primary;
    font-size: 18px;
    font-family: $font-firaSansCondensed;
    border-radius: 10px;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: $color-primaryDark;
      cursor: pointer;
    }

  }

}
</style>
