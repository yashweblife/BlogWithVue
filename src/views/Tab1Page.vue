<template>
  <ion-page>
    <HeaderComponent />
    <ion-content :fullscreen="true">
      <ion-list>
        <Card v-for="item in list" :key="item.id" :title="item.title"  :image="item.url"/>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import HeaderComponent from '@/components/Header.vue';
import { IonContent, IonPage, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue'
export default defineComponent({
  name: 'Tab1Page',
  components: { HeaderComponent, IonContent, IonPage, IonList, Card },
  data() {
    const list:any = []
    return (
      {
        list
      }
    )
  },
  methods: {
    getData(val:string) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${val}`)
      .then((res: Response) => res.json())
      .then((res) => {
        this.list.push(res)
      })
    }
  },
  created() {
    for(var i=0;i<10;i++){
      this.getData(""+i)
    }
  }
});
</script>

<style lang="scss" scoped>
ion-list{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>