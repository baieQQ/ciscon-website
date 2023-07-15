<template>
  <h1 class="title">
    <slot name="name"></slot>
  </h1>
  <div class="content">
    <div class="left">
      <slot name="image"></slot>
    </div>
    <div class="right">
      <p class="text">
        <slot name="text"></slot>
      </p>
      <p class="link">
        <slot name="link"></slot>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CommunityCard',
}
</script>

<style lang="sass" scoped>
.title 
  color: #FFF
  font-family: Inter
  font-size: 64px
  font-style: normal
  font-weight: 700
  line-height: normal
  padding-left: 30px
  margin-bottom: 30px

.content
  flex: 1
  position: relative
  display: flex
  
  .left
    max-width: 300px
    margin-right: 125px
  .right
    color: #D9D9D9
    font-size: 24px
    letter-spacing: 1.2px
    width: 70%
    .text
      font-family: Montserrat
      margin-bottom: 50px
    .link
      font-family: Eastman Grotesque Trial
</style>