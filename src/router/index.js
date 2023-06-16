import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SellView from "@/views/SellView";
import MineView from "@/views/MineView";
import BuyView from "@/views/BuyView";
import RentView from "@/views/RentView";
import Dialogue from "@/pages/Sell/Dialogue";
import Evaluate from "@/pages/Sell/Evaluate";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        name: "home",
        component: HomeView
      }, {
        path: "second_hand",
        name: "second_hand",
        component: () => import("../pages/Home/SecondHand")
      },
      {
        path: "/hitch_ride",
        name: "hitch_ride",
        component: () => import("../pages/Home/HitchRide")
      },
      {
        path:"https://cn.bing.com/search",
        name:"search",
      }
    ]
  },
  {
    path: "/buy",
    children: [
      {
        path: "",
        name: "buy",
        component: BuyView
      },
      {
        path: "cheliangxiangqing",
        name: "cheliangxiangqing",
        component: () => import("../pages/Buy/cheliangxiangqing")
      }, {
        path: "dianpuxinxi",
        name: "dianpuxinxi",
        component: () => import("../pages/Buy/dianpuxinxi")
      }
    ]
  },
  {
    path: "/rent",
    children: [
      {
        path: "",
        name: "rent",
        component: RentView
      }
    ]
  },{
    path: "/sell",
    children: [
      {
        path: "",
        name: "sell",
        component: SellView
      },{
        path: "dialogue",
        name: "dialogue",
        component: Dialogue
      },{
        path: "evaluate",
        name: "evaluate",
        component: Evaluate
      },
    ]
  },
  {
    path: "/mine",
    children: [
      {
        path: "",
        name: "mine",
        component: MineView
      },{
        path: "register_login",
        name: "register_login",
        component: () => import("../pages/Mine/RegisterLogin")
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
