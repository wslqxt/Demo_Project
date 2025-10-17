<script setup>
import { ref } from "vue";

// 下拉框数据
const value = ref("");
// const options = [
//   { value: 'Option1', label: 'Option1' },
//   { value: 'Option2', label: 'Option2' },
//   { value: 'Option3', label: 'Option3' },
//   { value: 'Option4', label: 'Option4' },
//   { value: 'Option5', label: 'Option5' },
// ]
//难度选择数据

const options = [
  {
    label: "一、语言及算法基础篇",
    value: "L1",
    children: [
      {
        label: "基础(一) C++语言",
        value: "L1-1",
        children: [
          {
            label: "第一章 C++语言入门",
            value: "L1-1-1",
          },
          {
            label: "第二章 顺序结构程序设计",
            value: "L1-1-2",
          },
          {
            label: "第三章 程序的控制结构",
            value: "L1-1-3",
          },
          {
            label: "第四章 循环结构的程序设计",
            value: "L1-1-4",
          },
          {
            label: "第五章 数组",
            value: "L1-1-5",
          },
          {
            label: "第六章 函数",
            value: "L1-1-6",
          },
        ],
      },
      {
        label: "基础(二) 基础算法",
        value: "L1-2",
        children: [
          {
            label: "第一章 高精度计算",
            value: "L1-2-1",
          },
          {
            label: "第二章 数据排序",
            value: "L1-2-2",
          },
          {
            label: "第三章 递推算法",
            value: "L1-2-3",
          },
          {
            label: "第四章 递归算法",
            value: "L1-2-4",
          },
          {
            label: "第五章 搜索与回溯算法",
            value: "L1-2-5",
          },
          {
            label: "第六章 贪心算法",
            value: "L1-2-6",
          },
          {
            label: "第七章 分治算法",
            value: "L1-2-1",
          },
          {
            label: "第八章 广度优先搜索算",
            value: "L1-2-1",
          },
          {
            label: "第九章 动态规划",
            value: "L1-2-1",
          },
        ],
      },
      {
        label: "基础(三) 数据解构",
        value: "L1-3",
        children: [
          {
            label: "第一章 栈",
            value: "L1-3-1",
          },
          {
            label: "第二章 队列",
            value: "L1-3-2",
          },
          {
            label: "第三章 树",
            value: "L1-3-3",
          },
          {
            label: "第四章 图论算法",
            value: "L1-3-4",
          },
        ],
      },
    ],
  },
  {
    label: "二、算法提高篇",
    value: "L2",
    children: [
      {
        label: "提高(一) 基础算法",
        value: "L2-1",
        children: [
          {
            label: "第 1 章 贪心算法",
            value: "L2-1-1",
          },
          {
            label: "第 2 章 二分与三分",
            value: "L2-1-2",
          },
          {
            label: "第 3 章 深搜的剪枝技巧",
            value: "L2-1-3",
          },
          {
            label: "第 4 章 广搜的优化技巧",
            value: "L2-1-4",
          },
        ],
      },
      {
        label: "提高(二) 字符串算法",
        value: "L2-2",
        children: [
          {
            label: "第 1 章 哈希和哈希表",
            value: "L2-2-1",
          },
          {
            label: "第 2 章 KMP 算法",
            value: "L2-2-2",
          },
          {
            label: "第 3 章 Trie 字典树",
            value: "L2-2-3",
          },
          {
            label: "第 4 章 AC 自动机",
            value: "L2-2-4",
          },
        ],
      },
      {
        label: "提高(三) 图论",
        value: "L2-3",
        children: [
          {
            label: "第 1 章 最小生成树",
            value: "L2-3-1",
          },
          {
            label: "第 2 章 最短路问题",
            value: "L2-3-2",
          },
          {
            label: "第 3 章 SPFA 算法优化",
            value: "L2-3-3",
          },
          {
            label: "第 4 章 差分约束系统",
            value: "L2-3-4",
          },
          {
            label: "第 5 章 强联通分量",
            value: "L2-3-5",
          },
          {
            label: "第 6 章 割点和桥",
            value: "L2-3-6",
          },
          {
            label: "第 7 章 欧拉回路",
            value: "L2-3-7",
          },
        ],
      },
      {
        label: "提高(四) 数据结构",
        value: "L2-4",
        children: [
          {
            label: "第 1 章 树状数组",
            value: "L2-4-1",
          },
          {
            label: "第 2 章 RMQ 问题",
            value: "L2-4-2",
          },
          {
            label: "第 3 章 线段树",
            value: "L2-4-3",
          },
          {
            label: "第 4 章 倍增求 LCA",
            value: "L2-4-4",
          },
          {
            label: "第 5 章 树链剖分",
            value: "L2-4-5",
          },
          {
            label: "第 6 章 平衡树 Treap",
            value: "L2-4-6",
          },
        ],
      },
      {
        label: "提高(五) 动态规划",
        value: "L2-5",
        children: [
          {
            label: "第 1 章 树状数组",
            value: "L2-5-1",
          },
          {
            label: "第 2 章 树型动态规划",
            value: "L2-5-2",
          },
          {
            label: "第 3 章 数位动态规划",
            value: "L2-5-3",
          },
          {
            label: "第 4 章 状态压缩类动态规划",
            value: "L2-5-4",
          },
          {
            label: "第 5 章 单调队列优化动规",
            value: "L2-5-5",
          },
          {
            label: "第 6 章 斜率优化动态规划",
            value: "L2-5-6",
          },
        ],
      },
    ],
  },
  {
    label: "三、高手训练",
    value: "L3",
    children: [
      {
        label: "高手(一) 基础算法",
        value: "L3-1",
        children: [
          {
            label: "第 1 章 贪心算法",
            value: "L3-1-1",
          },
          {
            label: "第 2 章 二分与三分",
            value: "L3-1-2",
          },
          {
            label: "第 3 章 深搜的剪枝技巧",
            value: "L3-1-3",
          },
          {
            label: "第 4 章 广搜的优化技巧",
            value: "L3-1-4",
          },
        ],
      },
      {
        label: "高手(二) 字符串算法",
        value: "L3-2",
        children: [
          {
            label: "第 1 章 哈希和哈希表",
            value: "L3-2-1",
          },
          {
            label: "第 2 章 KMP 算法",
            value: "L3-2-2",
          },
          {
            label: "第 3 章 Trie 字典树",
            value: "L3-2-3",
          },
          {
            label: "第 4 章 AC 自动机",
            value: "L3-2-4",
          },
        ],
      },
      {
        label: "高手(三) 图论",
        value: "L3-3",
        children: [
          {
            label: "第 1 章 最小生成树",
            value: "L3-3-1",
          },
          {
            label: "第 2 章 最短路问题",
            value: "L3-3-2",
          },
          {
            label: "第 3 章 SPFA 算法优化",
            value: "L3-3-3",
          },
          {
            label: "第 4 章 差分约束系统",
            value: "L3-3-4",
          },
          {
            label: "第 5 章 强联通分量",
            value: "L3-3-5",
          },
          {
            label: "第 6 章 割点和桥",
            value: "L3-3-6",
          },
          {
            label: "第 7 章 欧拉回路",
            value: "L3-3-7",
          },
        ],
      },
      {
        label: "高手(四) 数据结构",
        value: "L2-4",
        children: [
          {
            label: "第 1 章 树状数组",
            value: "L2-4-1",
          },
          {
            label: "第 2 章 RMQ 问题",
            value: "L2-4-2",
          },
          {
            label: "第 3 章 线段树",
            value: "L2-4-3",
          },
          {
            label: "第 4 章 倍增求 LCA",
            value: "L2-4-4",
          },
          {
            label: "第 5 章 树链剖分",
            value: "L2-4-5",
          },
          {
            label: "第 6 章 平衡树 Treap",
            value: "L2-4-6",
          },
        ],
      },
      {
        label: "高手(五) 动态规划",
        value: "L2-5",
        children: [
          {
            label: "第 1 章 树状数组",
            value: "L2-5-1",
          },
          {
            label: "第 2 章 树型动态规划",
            value: "L2-5-2",
          },
          {
            label: "第 3 章 数位动态规划",
            value: "L2-5-3",
          },
          {
            label: "第 4 章 状态压缩类动态规划",
            value: "L2-5-4",
          },
          {
            label: "第 5 章 单调队列优化动规",
            value: "L2-5-5",
          },
          {
            label: "第 6 章 斜率优化动态规划",
            value: "L2-5-6",
          },
        ],
      },
    ],
  },
  {
    label: "四、官方真题",
    value: "L4",
    children: [
      {
        label: "1、NOIP 普及组 ",
        value: "L4-1",
      },
      {
        label: "2、NOIP 提高组",
        value: "L4-2",
      },
    ],
  },
];

// 模拟表格数据
const tableData = ref([]);

// 动态生成完整的表格数据
function generateTableData() {
  const data = [];
  const categories = ["系统思维", "逻辑思维", "创新精神"];
  const subCategories = ["系统分析", "发散思维", "演绎推理"];
  const time = [20, 30, 40, 50];
  const subsubCategories = ["结构分析", "逻辑分析", "创新分析", "问题求解"];
  for (let id = 1; id <= 30; id++) {
    data.push({
      ID: id,
      训练名称: `${id}号训练任务`,
      训练分类: categories[Math.floor(id % 3)], // 交替选择
      训练分类2: subCategories[Math.floor(id % 3)], // 循环选择
      训练分类3: subsubCategories[Math.floor(id % 4)], // 循环选择
      时长: time[Math.floor(Math.random() * 3)], // 随机时长
      训练时间: new Date(
        2024,
        5,
        Math.floor(Math.random() * 20) + 1,
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60)
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "), // 2024-06 随机时间
      操作: "",
    });
  }
  tableData.value = data;
}

// 初始化数据
generateTableData();
const Selects = ref({
  diffculty: "",
  module: "",
  chapter: "",
});

const optDiff = [
  {
    label: "一、语言及算法基础篇",
    value: "L1",
  },
  {
    label: "二、算法提高篇",
    value: "L2",
  },
  {
    label: "三、高手训练",
    value: "L3",
  },
  {
    label: "四、官方真题",
    value: "L4",
  },
];

const optModule = [
  {
    label: "一、系统思维",
    value: "L1-1",
  },
  {
    label: "二、逻辑思维",
    value: "L1-2",
  },
  {
    label: "三、创新精神",
    value: "L1-3",
  },
];

const optChapter = [
  {
    label: "一、系统分析",
    value: "L1-1-1",
  },
  {
    label: "二、发散思维",
    value: "L1-1-2",
  },
  {
    label: "三、演绎推理",
    value: "L1-1-3",
  },
];
const handleDiffChange = (p) => {
  console.log("*************handleDiffChanged***********");
  console.log(p);
  console.log(Selects.value.diffculty);
};
</script>

<template>
  <div class="container">
    <!-- 标题栏 -->
    <div class="header">
      <h3>思维训练</h3>
    </div>
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <el-select
          v-model="value"
          placeholder="难度"
          style="width: 240px"
          @change="handleDiffChange"
        >
          <el-option
            v-for="item in optDiff"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" placeholder="模块" style="width: 240px">
          <el-option
            v-for="item in optModule"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" placeholder="章节" style="width: 240px">
          <el-option
            v-for="item in optChapter"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <!-- <el-button type="default" style="margin-left: 12px">导出报表</el-button> -->
        <el-button type="primary">查询</el-button>
      </div>
      <div class="toolbar-right">
        <el-button type="default">批量操作</el-button>
        <el-button type="default">刷新数据</el-button>
      </div>
    </div>
    <!-- 表格区域 -->
    <div class="table-area">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="ID" label="ID" width="80" />
        <el-table-column prop="训练名称" label="训练名称" />
        <el-table-column prop="训练分类" label="训练分类" />
        <el-table-column prop="训练分类2" label="训练分类2" />
        <el-table-column prop="训练分类3" label="训练分类3" />
        <el-table-column prop="时长" label="时长(分钟)" width="120" />
        <el-table-column prop="训练时间" label="训练时间" width="180" />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button size="small" type="text">编辑</el-button>
            <el-button size="small" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  height: 60px;
  background-color: #508cc5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header h3 {
  margin: 0;
  font-size: 24px;
}

.toolbar {
  height: 60px;
  background-color: #f6e6ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.table-area {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
