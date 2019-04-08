<template>
	<view class="content">
		<swiper indicator-dots=true autoplay=true interval=3000 duration=300>
			<swiper-item v-for="(item, index) in inTheaters.subjects" :key="index" @click="openDetail(item)">
				<image :src="item.images.large"></image>
			</swiper-item>
		</swiper>
		<view class="section">
			<view class="section-title"  v-if="inTheaters.title">
				<view>{{inTheaters.title}}</view>
				<view @click="openMorePage('in_theaters')">查看更多</view>
			</view>
			<scroll-view scroll-x>
				<view class="scroll-view-content">
					<view v-for="(item, index) in inTheaters.subjects" :key="index"  @click="openDetail(item)">
						<image :src="item.images.large"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="section">
			<view class="section-title"  v-if="comingSoon.title">
				<view>{{comingSoon.title}}</view>
				<view  @click="openMorePage('coming_soon')">查看更多</view>
			</view>
			<scroll-view scroll-x>
				<view class="scroll-view-content">
					<view v-for="(item, index) in comingSoon.subjects" :key="index" @click="openDetail(item)">
						<image :src="item.images.large"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- <view class="section">
			<view class="section-title"  v-if="weekly.title">
				<view>{{weekly.title}}</view>
				<view>查看更多</view>
			</view>
			<scroll-view scroll-x>
				<view class="scroll-view-content">
					<view v-for="(item, index) in weekly.subjects" :key="index"  @click="openDetail(item.subject)">
						<image :src="item.subject.images.large"></image>
					</view>
				</view>
			</scroll-view>
		</view> -->
		
		<view class="section">
			<view class="section-title"  v-if="top250.title">
				<view>{{top250.title}}</view>
				<view  @click="openMorePage('top250')">查看更多</view>
			</view>
			<scroll-view scroll-x>
				<view class="scroll-view-content">
					<view v-for="(item, index) in top250.subjects" :key="index" @click="openDetail(item)">
						<image :src="item.images.large"></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { get, post, getCityInfo } from '@/utils/api.js';
	// var urls = ['/in_theaters', '/coming_soon', '/new_movies', '/weekly', '/top250'];
	var urls = ['/in_theaters', '/coming_soon', '/top250'];
	export default {
		data() {
			return {
				title: 'Hello',
				inTheaters: [],
				comingSoon: [],
				newMovies: [],
				weekly: [],
				top250: [],
			}
		},
		async onLoad() {
			uni.showLoading({
				title: '数据加载中...'
			});
			var cityInfo = await getCityInfo();
			this.title = cityInfo.addressComponent.city;
			this.getAllMovieDatas(this.title.substr(0, this.title.length-1));
		},
		methods: {
			async getAllMovieDatas (city) {
// 				var dataList = urls.map((url) => {
// 					return get(url, {satrt: 0, count: 8, city: city});
// 				})
				var inTheaters = await get(urls[0], {satrt: 0, count: 8, city: city});
				var comingSoon = await get(urls[1], {satrt: 0, count: 8, city: city});
				var top250 = await get(urls[2], {satrt: 0, count: 8, city: city});
				this.inTheaters = inTheaters;
				this.comingSoon = comingSoon;
				this.top250 = top250;
				uni.hideLoading();
			},
			openDetail (item) {
				uni.navigateTo({
					url: '../detail/index?id=' + item.id 
				})
			},
			openMorePage (pars) {
				uni.navigateTo({
					url: '/pages/more/index?type=' + pars + '&city=' + this.title.substr(0, this.title.length-1)
				})
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100%;
	}
	.content {
		text-align: center;
	}
	swiper {
		height: 480upx;
	}
	swiper image {
		width: 100%;
	}
	.section {
	}
	.section-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 42upx;
		font-size: 28upx;
		padding: 14upx 8upx;
	}
	.scroll-view-content {
		width: 2720upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.scroll-view-content>view {
		margin-right: 20upx;
	}
	.scroll-view-content image {
		width: 320upx;
		height: 240upx;
	}
</style>
