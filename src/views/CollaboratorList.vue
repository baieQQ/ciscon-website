<template>
  <div class="container">
    <div class="title">
      <h1> 合作社群 </h1>
    </div>
    <div class="container-items">
      <div class="container-item" v-for="item in 6" :key="item">
        <CommunityCard>
          <template #name>
            CISCON
          </template>
          <template #image>
            <img src='../assets/collaborator_list/tmp.svg'/>
          </template>
          <template #text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue mauris augue neque gravida in. Faucibus interdum posuere lorem ipsum dolor sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. In egestas erat imperdiet sed euismod nisi porta. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Mi ipsum faucibus vitae aliquet. Sapien et ligula ullamcorper malesuada proin. Cursus in hac habitasse platea dictumst quisque sagittis. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Neque convallis a cras semper auctor. Sit amet est placerat in egestas.          </template>
          <template #link>
            連結：www.wawawawawa.com
          </template>
        </CommunityCard>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CommunityCard from '@/components/CommunityCard.vue';

export default defineComponent({
  components: {
    CommunityCard,
  },
  name: "CollaboratorList",
})
</script>

<style lang="sass" scoped>

.container
  margin: 0 auto
  margin-top: 130px

.container-items
  display: flex
  justify-content: center
  align-self: center
  flex-direction: column 
  position: relative
  width: 100% 

  .container-item
    display: flex
    flex-direction: column 
    left: 50%
    transform: translateX(-50%)
    position: relative
    width: 90%
    height: 400px
    margin-bottom: 100px

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
</style>