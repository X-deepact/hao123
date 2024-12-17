import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-womantab',
  templateUrl: './womantab.component.html',
  styleUrls: ['./womantab.component.css']
})
export class WomantabComponent {
  womenSampleData : BlogPostType[] = [
    {
      title: '为何女性生产前要备皮？会不会很尴尬，医生说这样做有很多好处！',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"雪落无声夜",
      author_url:"https://author.baidu.com/home?app_id=1816661439178360&from=hao123",
      total_view:"47次播放",
      screen_duration:"00:50",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_1291423428262158905&sourceFrom=pc_hao123",
    },
    {
      title: '家中有一人是这三个生肖，一生不愁钱，子孙富贵',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"懂史官 ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:"67.05万次播放",
      screen_duration:"00:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",

    },{
      title: '伤心的属猴人 再也回不到以前了',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },{
      title: '单身女性“憋”久了，常用这些办法解决，最后一种男人看了都脸红',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      title: '男子相亲只娶黄花闺女女子暗讽观念陈旧',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      title: '智商很高，但经常吃亏的星座',
      image:'assets/sample/woman_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    }
  ];
}
