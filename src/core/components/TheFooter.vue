<template lang="pug">
the-development-video-modal(
  v-if="isDevelopmentVideoModalOpen"
  @close="setIsDevelopmentVideoModalOpen(false)"
)
footer.footer
  div.footer-column.footer-column--company
    div.footer-text.footer-text--company_name ООО "СТА"
    div.footer-text.footer-text--company_slogan Мы делаем бизнес современнее
  div.footer-column.footer-column--nav
    div.footer-text.footer-text--heading Навигация
    router-link.footer-text(:to="{name: 'Profile'}") Личный кабинет
    router-link.footer-text(:to="{name: 'Warehouse'}") Склад
    router-link.footer-text(:to="{name: 'Broadcast'}") Видео-поток
    router-link.footer-text(:to="{name: 'About'}") О нас
  div.footer-column.footer-column--support
    div.footer-text.footer-text--heading Поддержка
    div.footer-text(@click="setIsDevelopmentVideoModalOpen(true)") Видео разработки
    div.footer-text Оставить сообщение
    div.footer-text Регламент
    div.footer-text Дополнительные материалы
</template>

<script>
import TheDevelopmentVideoModal from '@core/components/TheDevelopmentVideoModal.vue';

export default {
  name: 'TheFooter',
  components: {
    TheDevelopmentVideoModal,
  },
  data() {
    return {
      isDevelopmentVideoModalOpen: false,
    };
  },
  methods: {
    setIsDevelopmentVideoModalOpen(isDevelopmentVideoModalOpen) {
      this.isDevelopmentVideoModalOpen = isDevelopmentVideoModalOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding: 50px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  color: $color-surface;
  background: $color-neutralDarkest;

  &-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &:not(:first-child) {
      margin-left: 50px;
    }
  }

  &-text {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: $font-firaSansCondensed;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &--heading {
      font-size: 28px;
      font-weight: 600;
      font-family: $font-montserratAlternates;
      cursor: default;

      &:hover {
        text-decoration: none;
      }

    }

    &--company_name {
      font-size: 28px;
      font-weight: 600;
      font-family: $font-montserratAlternates;
      cursor: default;

      &:hover {
        text-decoration: none;
      }
    }

    &--company_slogan {
      cursor: default;

      &:hover {
        text-decoration: none;
      }

    }

  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: $color-neutralDarkest;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: $color-neutralDarkest;
  }

}
</style>
