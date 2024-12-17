import { Component } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog-post';

@Component({
  selector: 'app-financetab',
  templateUrl: './financetab.component.html',
  styleUrls: ['./financetab.component.css']
})
export class FinancetabComponent {
  financeTainmentData : BlogPostType[] = [
    {
      title: '“小马云” 范小勤命运起伏：从走红到被弃，现如今现状又如何？',
      image:'assets/sample/fin_1.jpeg',
      description:'',
      type: "video",
      author:"雪落无声夜",
      author_url:"https://author.baidu.com/home?app_id=1816661439178360&from=hao123",
      total_view:"47次播放",
      screen_duration:"00:50",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_1291423428262158905&sourceFrom=pc_hao123",
    },
    {
      title: '人民币汇率大跌！人民币对俄罗斯卢布汇率大幅下调656个基点！',
      image:'assets/sample/fin_1.jpeg',
      description:'2024年12月10日，银行间外汇市场的最新数据显示，人民币兑俄罗斯卢布的中间价为：人民币1元兑换13.7542俄罗斯卢布。',
      type: "article",
      author:"懂史官 ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:"67.05万次播放",
      screen_duration:"00:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",

    },{
      title: '美国人眼里最值钱的4个中国人，马云和王健林都排不上号！',
      image:'assets/sample/fin_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },{
      title: '欧盟发起审查不到一周，中国反制也来了，英伟达还没认识到严重性',
      image:'assets/sample/fin_1.jpeg',
      description:'知情人士表示，这项审查可能会升级为正式调查。在相关消息发布几个小时后，英伟达股价下挫近2.6%，但该企业还没认识到问题严重性。',
      type: "article",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      // title: '王健林这辈子或许最后悔的三件事，其一便是给了王思聪、张艺谋、董明珠每人5个亿。给王思聪5个亿，结果王思聪做出个熊猫TV，最终却亏损20多个亿，还沦为老赖，得靠家里人善后',
      title: '王健林这辈子或许最后悔的三件事，其一便是给了王思聪、张艺谋、董明珠每人5个亿。',
      image:'assets/sample/fin_1.jpeg',
      description:'',
      type: "video",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    },
    {
      title: ' 重大转向，中央时隔14年再提适度宽松，经济大省又冲在了最前头',
      image:'assets/sample/fin_1.jpeg',
      description:'关于如何花钱，中央的思路真的变了。尤其是货币政策，是时隔14年来再次定调为“适度宽松”，而今年年初的调门还是“稳健的货币政策要灵活适度、精准有效”。',
      type: "article",
      author:"南天一柱   ",
      author_url:"https://author.baidu.com/home?app_id=1782533749211603&from=hao123",
      total_view:" 67次播放",
      screen_duration:"02:33",
      link_url:"https://mbd.baidu.com/newspage/data/videolanding?nid=sv_17089118146753588495&sourceFrom=pc_hao123",
    }
  ];
}
