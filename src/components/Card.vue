<template>
    <ion-card>
        <ion-card-header>
            <ion-toolbar>
                <img :src="image" alt="">
                <ion-title>{{title}}</ion-title>
            </ion-toolbar>
        </ion-card-header>
        <ion-card-content>
            {{info}}
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonCard, IonCardHeader, IonCardContent, IonToolbar, IonTitle} from '@ionic/vue'
export default defineComponent({
    name:"CardComponent",
    components:{
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonToolbar,
        IonTitle
    },
    props:{
        title:String,
        image:String,
        info:String
    }
})
</script>

<style lang="scss" scoped>
ion-card{
    max-width:300px;
    border-radius: 3em;
    background-color: rgb(42, 42, 42);
    >ion-card-header{
        background-color: rgb(42, 42, 42);
        >ion-toolbar{
            background-color: rgb(42, 42, 42);
        }
    }
    img{
        border-radius: 3em;
    }
}
</style>