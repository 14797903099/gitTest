import Vue from 'vue'
export default {
	getData() {
		let params = {city: '杭州',key:'5ed6fc16bc1f459ea11f9166daad17b4'}
		return Vue.http.get('https://free-api.heweather.com/v5/forecast', {params})
	}
}