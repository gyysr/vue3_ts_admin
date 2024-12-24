<template>
  <el-tree
    style="max-width: 600px"
    :data="data"
    show-checkbox
    node-key="id"
    :key="JSON.stringify(expandKeys)"
    :default-expanded-keys="expandKeys"
    :props="defaultProps"
  />
  <el-button @click="handleExpanded">展开</el-button>
  <el-button @click="handleFold">折叠</el-button>
</template>

<script lang="ts" setup>
  import { number } from 'echarts';

  const defaultProps = {
    children: 'children',
    label: 'label',
  };
  const data = [
    {
      id: 1,
      label: 'Level one 1',
      children: [
        {
          id: 4,
          label: 'Level two 1-1',
          children: [
            {
              id: 9,
              label: 'Level three 1-1-1',
            },
            {
              id: 10,
              label: 'Level three 1-1-2',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'Level one 2',
      children: [
        {
          id: 5,
          label: 'Level two 2-1',
        },
        {
          id: 6,
          label: 'Level two 2-2',
        },
      ],
    },
    {
      id: 3,
      label: 'Level one 3',
      children: [
        {
          id: 7,
          label: 'Level two 3-1',
        },
        {
          id: 8,
          label: 'Level two 3-2',
        },
      ],
    },
  ];
  interface State {
    expandKeys: number[];
  }
  const state: State = reactive({
    expandKeys: [],
  });
  const expandKeys = ref<number[]>([]);
  const defaultAllKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleExpanded = () => {
    // expandKeys.length = 0;
    // state.expandKeys.push(...defaultAllKeys);
    // defaultAllKeys.forEach((item) => {
    //   state.expandKeys.push(item);
    // });
    // console.log(expandKeys, 'expandKeys');
    expandKeys.value = [...defaultAllKeys];
  };
  const handleFold = () => {
    state.expandKeys.length = 0;
    expandKeys.value = [];
  };
</script>
