<template>
  <div class="container">
    <div class="container-item banner">
      <h1 class="name">CISCON </h1>
      <p class="name-full"> Computer Informatics Students Conference </p>
    </div>
    <div class="container-item">
      <div class="text-block about">
        <h1 class=""> 關於社群月 </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in. Faucibus interdum posuere lorem ipsum dolor sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod nisi porta. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Mi ipsum faucibus vitae aliquet. Sapien et ligula ullamcorper malesuada proin. Cursus in hac habitasse platea dictumst quisque sagittis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Neque convallis a cras semper auctor. Sit amet est placerat in egestas. </p>
      </div>
    </div>

    <div class="container-item">
      <div class="text-block origin">
        <h1 class=""> 關於社群月 </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in. Faucibus interdum posuere lorem ipsum dolor sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod nisi porta. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Mi ipsum faucibus vitae aliquet. Sapien et ligula ullamcorper malesuada proin. Cursus in hac habitasse platea dictumst quisque sagittis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Neque convallis a cras semper auctor. Sit amet est placerat in egestas. </p>
      </div>
    </div>

    
    <div class="container-item">
      <div class="text-block type">
        <h1 class=""> 社群月形式 </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in. Faucibus interdum posuere lorem ipsum dolor sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod nisi porta. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "HomePage",
})
</script>

<style lang="sass" scoped>
h1 
  margin-bottom: 30px
.container
  margin: 0 auto

.container-item
  border: black 5px solid
  position: relative
  width: 100% 
  max-height: 1080px
  height: 100vh
  &:nth-child(1)
    background: url('@/assets/home_page/bg_1.png') no-repeat
    background-size: cover
  &:nth-child(2)
    background: url('@/assets/home_page/bg_2.png') no-repeat
    background-size: cover
  &:nth-child(3)
    background: url('@/assets/home_page/bg_3.png') no-repeat
    background-size: cover
  &:nth-child(4)
    background: url('@/assets/home_page/bg_4.png') no-repeat
    background-size: cover
  .text-block
    position: absolute
    width: 900px
    h1 
      color: #FFF
      font-size: 100px
    p
      color: #EBEBEB
      font-size: 28px
  .about
    top: 350px
    left: 200px
  
  .origin
    top: 220px
    right: 140px

  .type
    top: 300px
    left: 110px
    p
      width: 575px


.banner
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

  .name
    margin: 0
    color: #fff
    text-align: center
    font-family: Eastman Grotesque Trial
    font-size: 130px
    font-style: normal
    font-weight: 700
    line-height: normal
    letter-spacing: 13px
  .name-full
    color: #DCDCDC
    text-align: center
    font-family: Eastman Grotesque Trial
    font-size: 40px
    font-style: normal
    font-weight: 700
    line-height: normal
    letter-spacing: 2px
</style>