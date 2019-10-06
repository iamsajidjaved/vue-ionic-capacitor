<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Vue Capacitor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      The world is your oyster.
      <p>
        If you get lost, the
        <a href="https://ionicframework.com/docs">docs</a> will be your guide.
      </p>
      <ion-button @click="goToAbout" full>Go to About</ion-button>
      <ion-button @click="showDialogAlert" full>Show Alert Box</ion-button>
      <ion-button @click="takePicture" full>Launch Camera</ion-button>
    </ion-content>
  </ion-app>
</template>
<script>
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
export default {
  name: "HomeComponent",
  data() {
    return {
      imageElement: null
    };
  },
  methods: {
    goToAbout() {
      this.$router.push("AboutComponent");
    },
    async showDialogAlert() {
      await Plugins.Modals.alert({
        title: "Alert",
        message: "This is an example alert box"
      });
    },
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
      // Can be set to the src of an image now
      this.imageElements = imageUrl;
    }
  }
};
</script>