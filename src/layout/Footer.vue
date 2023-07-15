<template>
  <div class="footer">
    <img src='../assets/logo_1.png'>
    <div class="content">
      <div class="left">
        <div class="title">Computer Informatics Students Conference </div>
        <div class="title">example@gmail.com</div>
      </div>
      <div class="right">
        <div class="title">社群媒體</div>
        <div class="social-media-items">
          <a href="#" target="_blank" class="social-media-item">
            <img src='../assets/facebook.svg' alt="Facebook" />
          </a>
          <a href="#" target="_blank" class="social-media-item">
            <img src='../assets/instagram.svg' alt="Instagram" />
          </a>
          <a href="#" target="_blank" class="social-media-item">
            <img src='../assets/discord.svg' alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="sass" scoped>
.footer
  position: relative
  width: 100%
  height: 200px
  background-color: #2C2C3C
  padding: 30px 100px
  
  .title
    height: 30px
    margin: 3px
    color: #fff
    font-size: 24px
    font-weight: 700
  .content
    position: relative
    width: 100%
    .right
      position: absolute
      width: 120px
      right: 0
      top: 0
      .title
        font-size: 16px
.social-media-items
  width: 100%
  height: auto
  display: flex
  gap: 10px
  margin-top: 10px
  .social-media-item
    width: 30px
    height: 30px

</style>