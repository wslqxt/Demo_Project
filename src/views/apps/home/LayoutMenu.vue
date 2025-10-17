<script setup>
import { ro } from "element-plus/es/locales.mjs";

var menus = [
  {
    index: "1",
    title: "课程实训",
    icon: "Odometer",
    // icon:' ',
    children: [
      { index: "1-1", title: "计算思维", route: "/train/think" },
      { index: "1-2", title: "硬件实训", route: "/train/hard" },
      { index: "1-3", title: "软件实训", route: "/train/soft" },
    ],
  },
  {
    index: "2",
    title: "专业实习",
    icon: "Coordinate",
    // icon:' ',
    children: [
      { index: "2-1", title: "集中实习", route: "/pract/central" },
      { index: "2-2", title: "企业实习", route: "/pract/enterprise" },
    ],
  },
  {
    index: "3",
    title: "毕业设计",
    icon: "School",
    // icon:' ',
    children: [
      { index: "3-1", title: "选题申报" },
      { index: "3-2", title: "开题答辩" },
      { index: "3-3", title: "过程指导" },
      { index: "3-4", title: "论文答辩" },
      { index: "3-5", title: "论文提交" },
    ],
  },
  {
    index: "4",
    title: "临时测试",
    icon: "Orange",
    // icon:' ',
    children: [],
  },
];

import { useRouter } from "vue-router";
const router = useRouter();
const fnc = () => {
  router.push({ path: "/train/think" });
};
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
  >
    <template v-for="(sub, ind) in menus" :key="ind">
      <el-sub-menu v-if="sub.children" :index="sub.index">
        <template #title>
          <el-icon>
            <component :is="sub.icon" />
          </el-icon>
          <span>{{ sub.title }}</span>
        </template>
        <el-menu-item
          v-for="it in sub.children"
          :index="it.index"
          :route="it.route" 
          :key="it.index"
        >
          {{ it.title }}
        </el-menu-item>
      </el-sub-menu>

      <template v-else>
        <el-menu-item :index="sub.index">{{ sub.title }}</el-menu-item>
      </template>
    </template>
  </el-menu>

  <!-- <el-sub-menu v-for="(sub,index) in menus" :index="sub.index" :key="sub.index">
      <template #title>
        <el-icon>
          <location/>
          <span>
            {{ sub.title }}
          </span>
        </el-icon>
      </template>

       <el-menu-item v-for="item in sub.children" :index="item.index" :route="item.route">
          {{ item.title }}
        </el-menu-item>
    </el-sub-menu> -->
  <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Odometer />
        </el-icon>
        <span>课程实训</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1" route="/train/think">计算思维</el-menu-item>
        <el-menu-item index="1-2" route="/train/hard">硬件实训</el-menu-item>
        <el-menu-item index="1-3" route="/train/soft">软件实训</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <Coordinate />
        </el-icon>
        <span>专业实习</span>
      </template>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="2-1" route="/pract/central">集中实习</el-menu-item>
        <el-menu-item index="2-2" route="/pract/enterprise">企业实习</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <School />
        </el-icon>
        <span>毕业设计</span>
      </template>
      <el-menu-item-group title="Group Three">
        <el-menu-item index="3-1">选题申报 </el-menu-item>
        <el-menu-item index="3-2">开题答辩</el-menu-item>
        <el-menu-item index="3-3">过程指导</el-menu-item>
        <el-menu-item index="3-4">论文答辩 </el-menu-item>
        <el-menu-item index="3-5">论文提交</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon>
          <Orange />
        </el-icon>
        <span>临时测试</span>
      </template>
      <el-menu-item-group title="Group Four">
      </el-menu-item-group>
    </el-sub-menu> -->
  <!-- </el-menu> -->
</template>

<!-- <script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script> -->

<style scoped></style>
