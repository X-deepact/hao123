import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-sporttab',
  templateUrl: './sporttab.component.html',
  styleUrls: ['./sporttab.component.css']
})
export class SporttabComponent {
  sportTabDataSample :BlogPostType[]= [
    {
      image:'assets/sample/sport_new_1.jpeg',
      title: '当体育老师说1千米跑男生必须进四分钟时（二）',
      description:'',
      author: '帅爆的猫meme ',
      author_url: 'https://author.baidu.com/home?app_id=1805648597492887&from=hao123',
      total_view:" 5043次播放",
      link_url: 'https://mbd.baidu.com/newspage/data/videolanding?nid=sv_11008186194658214007&sourceFrom=pc_hao123',
      type: 'video',
      screen_duration: '00:34'
    },{
      image:'assets/sample/sport_new_2.jpeg',
      title: '两亿欧！巴萨赚疯了，高层效仿皇马出售成功，冬窗可用1.5亿欧',
      description:'西班牙巨人巴塞罗那即将得到一大笔钱，他们进行了一次内部会谈，同时也得到了不少赞助人的声援。这将使他们能够顺利地偿还一些债务，这也是巴塞罗那所希望的。',
      author:'隆体育龙',
      author_url: 'https://author.baidu.com/home?app_id=1811854753956111&from=hao123',
      total_view:"2天前更新",
      type: 'article',
      link_url: 'https://mid.hao123.com/mid?from=&key=9342306866763487354&type=sports',

    },{
      image:'assets/sample/sport_new_3.jpeg',
      title: '武当旋风腿，高手飞起来真高，身体真是轻盈！',
      description:'',
      author:"夜雨梅花武当功夫 ",
      author_url: 'https://author.baidu.com/home?app_id=1583295590824259&from=hao123',
      type:"video",
      total_view:" 1.5万次播放",
      link_url: 'https://mbd.baidu.com/newspage/data/videolanding?nid=sv_11790104426551914334&sourceFrom=pc_hao123',
    },{
      title:'仅差2个！保罗迎来神级里程碑，NBA历史助攻王纪录无人能破',
      image:'assets/sample/sport_new_4.jpeg',
      description:'与此同时，老詹还解锁了41000分大关，成为NBA历史上首位完成此成就的球员，前无古人！与此同时，保罗即将迎来一项神级里程碑！',
      author:"体育世界圈 ",
      author_url: "https://author.baidu.com/home?app_id=1569086183738941&from=hao123",
      type:"article",
      total_view:" 2天前更新",
      link_url: 'https://mid.hao123.com/mid?from=&key=10043808599832086187&type=sports',


    }
  ];
}
