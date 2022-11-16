<template>
    <ion-header>
        <ion-toolbar>
            <ion-title slot="start">Vue Blog Example | {{name}}</ion-title>
            <ion-buttons slot="end">
                <a href="#">Settings</a>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonHeader, IonToolbar, IonTitle, IonButtons} from '@ionic/vue'
export default defineComponent({
    name:"HeaderComponent",
    components:{
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons
    },
    props:{
        name:String
    }
})
</script>

<style lang="scss" scoped>
ion-header{
    background-color: rgb(42,42,42);
}
</style>