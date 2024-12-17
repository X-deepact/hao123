import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-entertaintab',
  templateUrl: './entertaintab.component.html',
  styleUrls: ['./entertaintab.component.css']
})
export class EntertaintabComponent {
  enterTainmentData :BlogPostType[]= [
    {
      image:'assets/sample/ent_1.jpeg',
      title: '高赞神作《从昆仑走出的绝世强者》，认真搞事业的男主如此潇洒有木有！',
      description:'李思念下班回到家中。今天所发生的事情令她脑子晕乎乎的，还没回过神来呢。要知道李思念去年才毕业，进入职场满打满算还不足一年时间。',
      author: '男生小说研究所 ',
      author_url: 'https://author.baidu.com/home?app_id=1805648597492887&from=hao123',
      total_view:" 838天前更新",
      link_url: 'https://mbd.baidu.com/newspage/data/videolanding?nid=sv_11008186194658214007&sourceFrom=pc_hao123',
      type: 'article',
      screen_duration: '00:34'
    },{
      image:'assets/sample/ent_2.jpeg',
      title: '假千金恋综摆烂靠嘴炮爆红，毒舌霸总竟成情话大师',
      description:'姐妹们，快来集合！男主帅炸天，女主聪明又独立，两人互动超甜爆棚。从摇篮到坟墓，每一个情节都让我心跳加速、无法自拔。',
      author:'隆体育龙',
      author_url: 'https://author.baidu.com/home?app_id=1811854753956111&from=hao123',
      total_view:"2天前更新",
      type: 'article',
      link_url: 'https://mid.hao123.com/mid?from=&key=9342306866763487354&type=sports',

    },{
      image:'assets/sample/ent_3.jpeg',
      title: '武当旋风腿，高手飞起来真高，身体真是轻盈！',
      description:'',
      author:"夜雨梅花武当功夫 ",
      author_url: 'https://author.baidu.com/home?app_id=1583295590824259&from=hao123',
      type:"video",
      total_view:" 1.5万次播放",
      link_url: 'https://mbd.baidu.com/newspage/data/videolanding?nid=sv_11790104426551914334&sourceFrom=pc_hao123',
    },{
      title:'仅差2个！保罗迎来神级里程碑，NBA历史助攻王纪录无人能破',
      image:'assets/sample/ent_4.jpeg',
      description:'与此同时，老詹还解锁了41000分大关，成为NBA历史上首位完成此成就的球员，前无古人！与此同时，保罗即将迎来一项神级里程碑！',
      author:"体育世界圈 ",
      author_url: "https://author.baidu.com/home?app_id=1569086183738941&from=hao123",
      type:"article",
      total_view:" 2天前更新",
      link_url: 'https://mid.hao123.com/mid?from=&key=10043808599832086187&type=sports',

    }
  ];
}
