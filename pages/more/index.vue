<template>
	<view class="content">
		<view @click="openDetail(item.id)" v-if="movieData && movieData.subjects" class="card" v-for="(item, index) in movieData.subjects" :key="index">
			<view class="card-image">
				<image :src="item.images.large"></image>
			</view>
			<view class="card-content">
				<text class="card-title">
					{{item.title}}
				</text>
				<text class="card-time">
					上映时间:{{item.year}}年
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { get, post } from '@/utils/api.js';
	
	export default {
		data() {
			return {
				title: 'Hello',
				city: '',
				count: 8,
				type: '',
				movieData: {}
			}
		},
		async onLoad(pars) {
			var type = '/' + pars.type;
			var city = pars.city;
			this.type = type;
			this.city = city;
			var title = '更多';
			switch(pars.type) {
				case 'in_theaters':
					title = '正在热播';
					break;
				case 'coming_soon':
					title = '即将上映';
					break;
				case 'top250':
					title = '豆瓣电影TOP250';
					break;
			}
			uni.setNavigationBarTitle({
				title: title
			});
			uni.showLoading({
				title: '数据加载中。。。'
			})
			this.movieData = await this.getDatas(type, city, 0, 8);
			uni.hideLoading();
		},
		async onReachBottom () {
			uni.showLoading({
				title: '加载中...',
				mask: false
			});
			var datas = await this.getDatas(this.type, this.city, this.start+this.count, this.count);
			var subjects = datas.subjects || [];
			while(subjects.length) {
				this.movieData.subjects.push(subjects.shift());
			}
			uni.hideLoading();
		},
		methods: {
			async getDatas (url, city, start, count) {
				this.start = start;
				return  await get(url, {start: start, count: count, city: city});
			},
			openDetail (id) {
				uni.navigateTo({
					url: '/pages/detail/index?id=' + id,
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.card-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20upx;
	}
	.card image {
		width: 100%;
	}
</style>
