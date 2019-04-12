<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Order</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
          hide-actions
          class="elevation-0 table-striped"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.product }}</td>
            <td class="text-xs-left">{{ props.item.price }}</td>
            <td class="text-xs-left">
              <v-chip
                label
                small
                :color="getColorByStatus(props.item.status)"
                text-color="white"
                >{{ props.item.status }}</v-chip
              >
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
// import items from "@/api/order";
export default {
  data() {
    return {
      headers: [
        {
          text: "#",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "任务名称", value: "deadline" },
        { text: "截止时间", value: "progress" },
        { text: "状态", value: "status" }
      ],
      items: [
        {
          id: "150",
          product: "第三周课堂作业",
          price: "2018-05-08",
          status: "完成"
        },
        {
          id: "151",
          product: "第四周课堂作业",
          price: "2018-05-15",
          status: "未上传"
        },
        {
          id: "300",
          product: "第一周课堂作业",
          price: "2018-04-17",
          status: "完成"
        },
        {
          id: "301",
          product: "第二周课堂作业",
          price: "2018-04-30",
          status: "完成"
        },
        {
          id: "501",
          product: "第五周课堂作业",
          price: "2018-05-30",
          status: "未上传"
        }
      ],
      colors: {
        未上传: "red",
        完成: "green"
      }
    };
  },
  computed: {
    randomColor() {
      let item = Math.floor(Math.random() * this.colors.length);
      return this.colors[item];
    }
  },
  methods: {
    getColorByStatus(status) {
      return this.colors[status];
    }
  }
};
</script>
