import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-fashiontab',
  templateUrl: './fashiontab.component.html',
  styleUrls: ['./fashiontab.component.css']
})
export class FashiontabComponent {
  fashionSampleData : BlogPostType[] = [
    {
      title: '谁说有肉的女生穿不了紧身包臀裙越有肉穿起来才越有味道',
      image:'assets/sample/fas_1.jpeg',
      description:'',
      type: "video",
      author:"雪落无声夜",
      author_url:"https://author.baidu.com/home?app_id=1816661439178360&from=hao123",
      total_view:"47次播放",
      screen_duration:"00:50",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_1291423428262158905&sourceFrom=pc_hao123",
    },
    {
      title: '章子怡这谁顶得住',
      image:'assets/sample/fas_2.jpeg',
      description:'',
      type: "video",
      author:"懂史官 ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:"67.05万次播放",
      screen_duration:"00:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",

    },{
      title: '黑色珍珠一字带高跟鞋：性感少妇的时尚战靴',
      image:'assets/sample/fas_3.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },{
      title: '黑色尖头高跟鞋很有气质！',
      image:'assets/sample/fas_4.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      title: '金在中：解锁style杂志新视界',
      image:'assets/sample/fas_5.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      title: '  赛蒙口羽绒服，精选羽绒填芯，精致工艺雕琢，抵御寒冬有型',
      image:'assets/sample/fas_6.png',
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
