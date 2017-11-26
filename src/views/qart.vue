<template>
    <div id="app">
      <button @click="imgDownload">图片下载</button>
      <canvas ref="canvas" @click="imgDownload"></canvas>
      <a :href="imgPath">fjsjfjfkf</a>
    </div>
</template>

<script>
import QRcode from 'qrcode'

  export default {
    data () {
      return {
        url: 'http://112.124.46.250:9001/',
        imgPath: '',
      }
    },
    methods: {
      imgDownload () {
        window.open(this.imgPath)
      },
      fixtype(type){
        type=type.toLocaleLowerCase().replace(/jpg/i,'jpeg');
        var r=type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/'+r
      }
    },
    mounted () {
     this.$nextTick(function () {
       let canvas = this.$refs.canvas
       QRcode.toCanvas(canvas,this.url,err => {
           if(err) {
             console.log(err)
           } else {
             let imgData = canvas.toDataURL("image/png")
        
            this.imgPath=imgData.replace(this.fixtype('png'),'image/octet-stream');
            console.log(this.imgPath)
            // var b64 = data.substring(22);

              //  console.log(canvas.toDataURL("image/png"))
           }
       })
      })
    }
  }
</script>

<style>
  
</style>
