<template>
	<view class="content">
		<swiper indicator-dots=true interval=3000 duration=1000>
			<swiper-item v-for="(item, index) in movies" :key="index">
				<image :src="item.images.large" ></image>
				<button @click="switchToHome()" size="mini" type="warn" v-if="index==(movies.length-1)">开始</button>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {get, post} from '@/utils/api.js';
	export default {
		data() {
			return {
				movies: [],
				data: {"count": 4, "start": 0, "total": 70, "subjects": [{"rating": {"max": 10, "average": 0, "stars": "00", "min": 0}, "genres": ["\u5267\u60c5"], "title": "\u96be\u4ee5\u7f6e\u4fe1", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1412761\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552531752.22.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552531752.22.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552531752.22.jpg"}, "name": "\u5434\u8d85", "id": "1412761"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1318018\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57105.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57105.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57105.jpg"}, "name": "\u5b8b\u4f73\u4f26", "id": "1318018"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1412762\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1553529755.62.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1553529755.62.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1553529755.62.jpg"}, "name": "\u5468\u4e5f", "id": "1412762"}], "collect_count": 169, "original_title": "\u96be\u4ee5\u7f6e\u4fe1", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1290397\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552386423.11.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552386423.11.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1552386423.11.jpg"}, "name": "\u9646\u5c0f\u96c5", "id": "1290397"}], "year": "2018", "images": {"small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2550531644.jpg", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2550531644.jpg", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2550531644.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/27666591\/", "id": "27666591"}, {"rating": {"max": 10, "average": 7.9, "stars": "40", "min": 0}, "genres": ["\u5267\u60c5"], "title": "\u7948\u7977\u843d\u5e55\u65f6", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1012581\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1551.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1551.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1551.jpg"}, "name": "\u963f\u90e8\u5bbd", "id": "1012581"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1028170\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12218.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12218.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12218.jpg"}, "name": "\u677e\u5c9b\u83dc\u83dc\u5b50", "id": "1028170"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1274835\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517915920.05.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517915920.05.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517915920.05.jpg"}, "name": "\u6c9f\u7aef\u6df3\u5e73", "id": "1274835"}], "collect_count": 32781, "original_title": "\u7948\u308a\u306e\u5e55\u304c\u4e0b\u308a\u308b\u6642", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1336349\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1397359805.26.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1397359805.26.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1397359805.26.jpg"}, "name": "\u798f\u6cfd\u514b\u96c4", "id": "1336349"}], "year": "2018", "images": {"small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552073598.jpg", "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552073598.jpg", "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552073598.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/27040737\/", "id": "27040737"}, {"rating": {"max": 10, "average": 0, "stars": "00", "min": 0}, "genres": ["\u7231\u60c5"], "title": "\u5728\u4e4e\u4f60", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1014618\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364106535.09.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364106535.09.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364106535.09.jpg"}, "name": "\u4fde\u98de\u9e3f", "id": "1014618"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1134773\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364496491.17.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364496491.17.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1364496491.17.jpg"}, "name": "\u5927\u6cfd\u9686\u592b", "id": "1134773"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1395517\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529044556.91.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529044556.91.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1529044556.91.jpg"}, "name": "\u6728\u4e0b\u5f69\u97f3", "id": "1395517"}], "collect_count": 213, "original_title": "\u5728\u4e4e\u4f60", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1278580\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355295036.29.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355295036.29.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355295036.29.jpg"}, "name": "\u6bd5\u56fd\u667a", "id": "1278580"}], "year": "2019", "images": {"small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552608202.jpg", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552608202.jpg", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552608202.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/27185558\/", "id": "27185558"}, {"rating": {"max": 10, "average": 0, "stars": "00", "min": 0}, "genres": ["\u5267\u60c5", "\u559c\u5267"], "title": "\u6211\u7684\u5ba0\u7269\u662f\u5927\u8c61", "casts": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1007251\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p844.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p844.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p844.jpg"}, "name": "\u5218\u9752\u4e91", "id": "1007251"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1343521\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1540259770.09.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1540259770.09.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1540259770.09.jpg"}, "name": "\u5c24\u9756\u8339", "id": "1343521"}, {"alt": "https:\/\/movie.douban.com\/celebrity\/1053125\/", "avatars": {"small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6449.jpg", "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6449.jpg", "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6449.jpg"}, "name": "\u5b54\u7ef4", "id": "1053125"}], "collect_count": 55, "original_title": "\u6211\u7684\u5ba0\u7269\u662f\u5927\u8c61", "subtype": "movie", "directors": [{"alt": "https:\/\/movie.douban.com\/celebrity\/1328976\/", "avatars": {"small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533824828.55.jpg", "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533824828.55.jpg", "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1533824828.55.jpg"}, "name": "\u90b5\u6653\u9ece", "id": "1328976"}], "year": "2019", "images": {"small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552524893.jpg", "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552524893.jpg", "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2552524893.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/26803717\/", "id": "26803717"}], "title": "\u5373\u5c06\u4e0a\u6620\u7684\u7535\u5f71"}
			}
		},
		async onLoad() {
// 			var movies = await get('/coming_soon', {start: 0, count: 4})
// 			var subjecs = movies.subjects
// 			while(subjecs.length) {
// 				this.movies.push(subjecs.shift());
// 			}
			this.movies = this.data.subjects;
		},
		methods: {
			switchToHome () {
				uni.switchTab({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	.content {
		height: 100%;
	}
	swiper {
		height: 100%;
	}
	swiper-item {
		height: 100%;
		text-align: center;
	}
	swiper image {
		width: 100%;
		height: 100%;
	}
	button {
		bottom: 200upx;
		z-index: 10;
		
	}
</style>
