// router.js
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router
import Index from '../../components/index/Index'
import News from '../../components/news/News'
import NewsDetail from '../../components/news/NewsDetail'
import Consult from '../../components/consult/Consult'
import Consultation from '../../components/consult/Consultation'
import HouseStory from '../../components/house/HouseStory'
import StoryDetail from '../../components/house/StoryDetail'
import SearchDetail from '../../components/house/SearchDetail'
import HouseDynamic from '../../components/house/HouseDynamic'
import DynamicDetail from '../../components/house/DynamicDetail'
import ShapeDetail from '../../components/house/ShapeDetail'
import PreInfo from '../../components/house/PreInfo'
import HouseShape from '../../components/house/HouseShape'
import ExpertComment from '../../components/house/ExpertComment'
import Comment from '../../components/house/Comment'
import Answer from '../../components/house/Answer'
import Other from '../../components/other/Other'
import Center from '../../components/person/Center'
import Forget from '../../components/person/Forget'
import Coupon from '../../components/person/Coupon'
import Help from '../../components/popup/Help'
import Asking from '../../components/popup/Asking'
import Car from '../../components/popup/Car'
import Message from '../../components/popup/Message'
import PopCoupon from '../../components/popup/PopCoupon'
import Login from '../../components/popup/Login'
import Register from '../../components/popup/Register'
import SearchHouse from '../../components/house/SearchHouse'

Vue.use(Router) //使用vue-router

export default new Router({
    routes:[
        { path: "/", name: "index", component: Index},
        { path: "/Index", name: "index", component: Index},
        { path: "/News", name: "News", component: News},
        { path: "/NewsDetail/:id", name: "NewsDetail", component: NewsDetail},
        { path: "/Consult", name: "Consult", component: Consult},
        { path: "/Consultation/:id", name: "Consultation", component: Consultation},
        { path: "/HouseStory", name: "HouseStory", component: HouseStory},
        { path: "/StoryDetail/:id", name: "StoryDetail", component: StoryDetail},
        { path: "/SearchDetail/:id", name: "SearchDetail", component: SearchDetail},
        { path: "/HouseDynamic/:id", name: "HouseDynamic", component: HouseDynamic},
        { path: "/DynamicDetail/:id/:did", name: "DynamicDetail", component: DynamicDetail},
        { path: "/ShapeDetail/:id/:sid", name: "ShapeDetail", component: ShapeDetail},
        { path: "/Comment/:id", name: "Comment", component: Comment},
        { path: "/ExpertComment/:id", name: "ExpertComment", component: ExpertComment},
        { path: "/HouseShape/:id", name: "HouseShape", component: HouseShape},
        { path: "/Answer", name: "Answer", component: Answer},
        { path: "/Other", name: "other", component: Other},
        { path: "/Center", name: "Center", component: Center},
        { path: "/Forget", name: "Forget", component: Forget},
        { path: "/Coupon", name: "Coupon", component: Coupon},
        { path: "/Help", name: "Help", component: Help},
        { path: "/Asking", name: "Asking", component: Asking},
        { path: "/Car", name: "Car", component: Car},
        { path: "/Message", name: "Message", component: Message},
        { path: "/PopCoupon", name: "PopCoupon", component: PopCoupon},
        { path: "/Login", name: "Login", component: Login},
        { path: "/Register", name: "Register", component: Register},
        { path: "/SearchHouse", name: "SearchHouse", component: SearchHouse},
        { path: "/PreInfo/:id", name: "PreInfo", component: PreInfo}
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})