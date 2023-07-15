<template>
  <div class="container">
    <div class="title">
      <h1> 合作社群 </h1>
    </div>
    <div class="container-item">
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "CollaboratorList",
})
</script>

<style lang="sass" scoped>

.container
  margin: 0 auto
  margin-top: 130px

.container-item
  display: flex
  justify-content: top
  align-self: center
  flex-direction: column 
  position: relative
  width: 100% 
  max-height: 950px
  height: 100vh

  &:nth-child(2)
    background: url('@/assets/staff_list/bg_1.png') no-repeat
    background-size: cover
  &:nth-child(3)
    background: url('@/assets/staff_list/bg_2.png') no-repeat
    background-size: cover
  &:nth-child(4)
    background: url('@/assets/staff_list/bg_3.png') no-repeat
    background-size: cover
  &:nth-child(5)
    background: url('@/assets/staff_list/bg_4.png') no-repeat
    background-size: cover
  .content
    position: relative
    width: 100%
    height: auto
    .text-block
      position: absolute
      width: 500px
      right: 0px
      h1 
        color: #FFF
        font-size: 80px
        margin-bottom: 10px
      p
        color: #D9D9D9
        font-size: 30px
    .left
      left: 100px
      top: 25px
    .right
      right: 300px
      top: 100px

.title
  display: flex
  justify-content: center
  align-items: center
  position: relative
  left: 50%
  transform: translateX(-50%)
  margin-top: 20px

  background: #009C2C
  width: 1000px
  height: 130px
  h1
    color: #FFF
    text-align: center
    font-family: Eastman Grotesque Trial
    font-size: 90px
    font-style: normal
    font-weight: 700
    line-height: normal
    letter-spacing: 7.2px

.member-items
  width: 100%
  display: grid
  grid-template-columns: repeat(auto-fit, 150px)
  grid-gap: 60px
  margin-left: 100px
  .member-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: top
    text-align: center
    img
      width: 150px
      height: 150px
      object-fit: cover
      border-radius: 100em
      background-color: #fff
    .member-name
      color: #ffffff
      font-size: 24px
      font-weight: 700
      margin-top: 10px
      text-align: center
</style>