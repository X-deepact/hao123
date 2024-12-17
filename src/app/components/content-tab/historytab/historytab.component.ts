import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-historytab',
  templateUrl: './historytab.component.html',
  styleUrls: ['./historytab.component.css']
})
export class HistorytabComponent {
  historySampleData : BlogPostType[] = [
    {
      title: '1981年华国锋辞去所有职务，却保留一职到2002年，是毛主席希望的',
      image:'assets/sample/his_1.jpeg',
      description:'',
      type: "video",
      author:"雪落无声夜",
      author_url:"https://author.baidu.com/home?app_id=1816661439178360&from=hao123",
      total_view:"47次播放",
      screen_duration:"00:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_1291423428262158905&sourceFrom=pc_hao123",
    },
    {
      title: '75年毛远新上位“伟人代言人”，处处与邓公作对，毛主席疲于拉架',
      image:'assets/sample/his_2.jpeg',
      description:'',
      type: "video",
      author:"懂史官 ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:"67.05万次播放",
      screen_duration:"00:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",

    },{
      title: '《罗斯福与第二次世界大战（上集）》二',
      image:'assets/sample/his_3.jpeg',
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
