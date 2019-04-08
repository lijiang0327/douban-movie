<template>
	<view class="content" v-if="show">
		<view>
			<image :src="movie.images.large"></image>
		</view>
		<view>
			<text>{{movie.title}}</text>
		</view>
		<view v-if="movie.directors">
			<text>导演：</text>
			<block v-for="(item, index ) in movie.directors" :key="index">
				<text >{{item.name}}</text>
				<text v-if="index<item.length-1">,</text>
			</block>
		</view>
		<view class="summary">
			<text>剧情介绍:</text>
			<text>{{movie.summary}}</text>
		</view>
	</view>
</template>

<script>
	import { get, post } from '@/utils/api.js';
	export default {
		data() {
			return {
				movie: {},
				show: false
			}
		},
		onLoad(options) {
			let id = options.id;
			if (id) {
				this.getDetailById(id);
			}
		},
		methods: {
			getDetailById (id) {
				uni.showLoading({
					title: '数据加载中...'
				})
				get('/subject/' + id, {}).then(
					data => {
						this.show = true;
						this.movie = data;
						uni.hideLoading();
					}
				)
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
	.summary {
		padding: 50rpx;
	}
</style>
