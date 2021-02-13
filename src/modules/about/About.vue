<template lang="pug">
div.about
  div.about-title
    div.title-text.title-text--up мы открыты для сотрудничества
    div.title-text.title-text--bottom наши контакты
  div.about-content
    div.content-from
    div.content-contacts
      div.contact
        div.contact-icon
        div.contact-info
          div.contact-title наши телефоны
          div.contact-text
            | Отдел продаж<br/>
            | tel:+79006543210<br/>
            | Отдел по работе с подрядчиками<br/>
            | tel:+79876543210
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  &-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {

      &-text {
        text-transform: uppercase;

        &--up {
          font-size: 20px;
          font-family: $font-sourceSansPro;
        }

        &--bottom {
          font-size: 40px;
          font-family: $font-sourceSansPro;
        }

      }

    }

  }

}
</style>
