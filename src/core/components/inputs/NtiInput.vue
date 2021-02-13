<template lang="pug">
div.nti-input(
  :class="inputWrapperClasses"
  :data-error="error"
)
  input.nti-input__field(
    v-if="type === 'text' || type === 'password'"
    v-model="rawVal"
    :type="type"
    :placeholder="placeholder"
    @focus="onFocus"
    @blur="onUnfocus"
  )
  textarea.nti-input__field(
    ref="textarea"
    v-if="$props.type === 'textarea'"
    v-model="rawVal"
    type="textarea"
    :placeholder="$props.placeholder"
    :readonly="$props.readOnly"
    :disabled="$props.disabled"
    :style="textareaStyles"
    @focus="onFocus"
    @blur="onUnfocus"
  )
  label.nti-input__label(
    v-if="$props.label"
  ) {{ $props.label || '' }}
</template>

<script>
const InputStates = {
  default: 0,
  active: 1,
};

export default {
  name: 'NtiInput',
  props: {
    modelValue: {
      required: true,
    },
    type: {
      required: true,
      type: String,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    darkTheme: {
      type: Boolean,
      default: false,
    },
    autoExpand: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      InputStates,
      inputState: InputStates.default,
    };
  },
  emits: ['update:modelValue', 'focus', 'unfocus', 'error'],
  computed: {
    textareaStyles() {
      return {
        resize: this.$props.disabled || this.$props.readOnly ? 'none' : 'vertical',
        overflow: this.$props.autoExpand ? 'hidden' : 'auto',
      };
    },
    rawVal: {
      set(change) {
        this.$emit('update:modelValue', change);
      },
      get() {
        return this.$props.modelValue;
      },
    },
    inputWrapperClasses() {
      return {
        'nti-input--error': !this.isValid && this.error && !this.readOnly,
        'nti-input--active': this.isInputStateActive,
        'nti-input--required': this.required,
        'nti-input--dark': this.darkTheme,
        'nti-input--empty': !this.rawVal,
      };
    },
    isInputStateActive() {
      return this.inputState === InputStates.active;
    },
    isInputAllowed() {
      return !this.$props.disabled && !this.$props.readOnly;
    },
  },
  methods: {
    onFocus() {
      this.setInputState(InputStates.active);
      this.$emit('focus');
      if (!this.isValid && this.error) {
        this.$emit('error', '');
      }
    },
    onUnfocus() {
      this.setInputState(InputStates.default);
      this.$emit('unfocus');
    },
    setInputState(state) {
      this.inputState = state;
      setTimeout(this.resetTextareaScrollAndHeight, 200);
    },
    resetTextareaScrollAndHeight() {
      if (this.inputState === InputStates.default
        && this.$props.type === 'textarea'
        && !!this.$refs.textarea) {
        this.$refs.textarea.scrollTop = 0;
        this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight + 2}px`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nti-input {
  position: relative;
  min-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .nti-input__label {
    min-height: 12px;
    width: 100%;
    order: -1;
    font-size: 12px;
    font-weight: bold;
    color: $color-text;
    font-family: $font-sourceSansPro;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: $color-text;
      transition: background-color .2s ease-in-out;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0;
      background-color: $color-primary;
      transition: width .2s ease-in-out,
                  background-color .2s ease-in-out;
    }

  }

  .nti-input__field {
    box-sizing: border-box;
    padding: 8px 0 5px 0;
    max-width: 100%;
    flex: 1;
    font-size: 16px;
    background-color: transparent;
    font-family: $font-firaSansCondensed;
    transition: border     ease-in-out .2s,
                padding    ease-in-out .2s,
                background-color ease-in-out .2s;

    &:disabled {
      cursor: not-allowed;
    }

    &::placeholder {
      color: $color-neutral;
    }

  }

  textarea.nti-input__field {
    @include scroll-view('auto', $color-primary, $color-primaryLightest);
  }

  &--active {

    .nti-input__label {

      &:after {
        width: 100%;
      }

    }

  }

  &--dark {

    .nti-input__label {
      color: $color-surface;

      &:before {
        background-color: $color-surface;
      }

    }

    .nti-input__field {
      color: $color-surface;
    }

  }

  &--empty {

     .nti-input__label {

        &:before {
          background-color: $color-neutralDark;
        }

      }

  }

  &--error {

    .nti-input__label {
      color: $color-surface;

      &:before {
        background-color: $color-secondary;
      }

      &:after {
        background-color: $color-secondary;
      }

    }

  }

}
</style>
