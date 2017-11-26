<template>
	<div class="station">
    测试
	</div>	
</template>
<script>
	export default {
		data () {
			return {
				dialogtitle: '弹出框',
				dialogVisible: 'false',
				defaultAttachs: []
			}
		},
		methods : {
			handleView () {
				dialogVisible=true;
			},
			preview () {

			},
			HandelSubmit () {

			},
			handleSave () {
				var upload = this.$refs.fileUpload;
				// console.log(upload);
			    let rootUrl = upload.$root.$http.options.root
				let attachList = uploader.uploadFiles
				console.log(rootUrl);
				console.log(attachList);
			}
		}

	}
</script>
<style scoped>
	
</style>