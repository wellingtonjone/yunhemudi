
对比记忆  angular4.0   vue  react  wx





                  变量声明          属性绑定              数值绑定        事件绑定                  遍历数据                    显示隐藏                 生命周期                    


    vue            data           v-bind:class="a"/:        {{}}        v-on:click="get"         v-for="a in list "           v-show/v-if          update/brfoteMount             


    react         state/props     class={}                  {}          onClick={this.get}       list.map(...)                变量控制             componentWillMount/render/shouldComponentUpdate

 
    angular4.0   组件控制器内     [class] = "a"             {{}}        (click)="get()"          *ngFor = "let a of list"      [hidden] /*ngIf      ngOninit/ngDoCheck    


    微信            Page(data)    class="{{a}}"             {{}}        catchtap/bindtap="get"    wx:for="{{list}}" item/index  wx:if/wx:show       onLoad / onready    