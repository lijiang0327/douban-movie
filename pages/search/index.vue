<template>
	<view class="content">
		 <view class="searchBar">
			<input @confirm="onSearch(true)" v-model="searchText" class="uni-input" confirm-type="search" focus placeholder="请输入" />
			<icon @click="onSearch(true)" type="search" size="20" />
		</view>
		<view @click="openDetail(item.id)" v-if="movieList && movieList.length" class="card" v-for="(item, index) in movieList" :key="index">
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
		<view class="no-data" v-if="noData">
			<p>暂无数据</p>
		</view>
	</view>
</template>

<script>
	import { get, post } from '@/utils/api.js';
	export default {
		data() {
			return {
				searchText: '',
				movieList: [],
				start: 0,
				count: 20,
				isEnd: false,
				noData: false
			}
		},
		onLoad() {},
		async onReachBottom () {
			if (this.isEnd) return;
			uni.showLoading({
				title: '加载中...'
			})
			await this.onSearch(false);
			uni.hideLoading();
		},
		methods: {
			async onSearch (isFirst) {
				if (isFirst) {
					this.start = 0;
					this.isEnd = false;
					this.movieList.length = 0;
				}
				uni.showLoading({
					title: '加载中。。。',
					mask: false
				});
				var movieData = await this.getSearchData();
				var list = movieData.subjects || [];
				if (list.length === 0) {
					this.isEnd = true;
					uni.showToast({
						title: '没有更多了！',
						duration: 2000
					})
				}
				while(list.length) {
					this.movieList.push(list.shift());
				}
				this.noData = this.movieList.length === 0;
				uni.hideLoading();
			},
			async getSearchData () {
				var searchData = await get('/search', {q: this.searchText, start: this.start, count: this.count});
				this.start += this.count;
				return searchData;
			},
			openDetail (id) {
				uni.navigateTo({
					url: '/pages/detail/index?id=' + id
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
	.searchBar {
		margin: 30upx 15upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border: 1px solid #eee;
		border-radius: 4px;
	}
	.searchBar input {
		text-align: left;
		width: 100%;
	}
	.no-data {
		text-align: center;
		padding: 40upx 0;
	}
	.no-data p {
		color: #ccc;
	}
</style>
