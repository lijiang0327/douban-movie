var bmap = require('./bmap-wx.js');
// var host = 'https://douban.uieee.com/v2/movie';
var host = 'https://douban.uubake.com/v2/movie';

export {
	host
}

var BMAP = new bmap.BMapWX({
	ak: '4ATeuGLwAt08UunArKywQ1KyYalvpdi8'
})

function request (url, method, data) {
	return new Promise ((resolve, reject) => {
		wx.request({
			url: host + url,
			method: method,
			data: data,
			header: {
				"Content-Type": 'json;charset=utf-8'
			},
			success: (result) => {
				resolve(result.data);
			},
			fail: (error) => {
				reject(error);
			}
		}) 
	})
}

export function get (url, data) {
	return request(url, 'GET', data);
}
export function post (url, data) {
	return request(url, 'POST', data);
}
export function getCityInfo () {
	return new Promise((resolve, reject) => {
		wx.getLocation({
			success: (data) => {
				var url = 'http://api.map.baidu.com/geocoder?location=纬度,经度&output=输出格式类型&key=用户密钥'
				var latitude = data.latitude,
					longitude = data.longitude;
					
				wx.request({
					url: 'https://api.map.baidu.com/geocoder',
					method: 'GET',
					dataType: 'json',
					data: {
						key: '4ATeuGLwAt08UunArKywQ1KyYalvpdi8',
						location: latitude + ',' + longitude,
						output: 'json'
					},
					success: (data) => {
						resolve(data.data.result);
					},
					fail: (err) => {
						reject(err);
					}
				})
			},
			fail: (error) => {
				reject(error);
			}
		})
	})
	
}