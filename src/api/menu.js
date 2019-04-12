const Menu = [
  { header: "Apps" },
  {
    title: "教师首页展示",
    group: "apps",
    icon: "dashboard",
    name: "Dashboard"
  },
  {
    title: "学生首页展示",
    group: "apps",
    icon: "dashboard",
    name: "StuDashboard"
  },
  {
    title: "学生总览",
    group: "apps",
    icon: "account_circle",
    name: "Studentsta"
  },
  {
    title: "提问列表",
    group: "apps",
    icon: "chat_bubble",
    name: "Questions"
  },
  {
    title: "作业提交列表",
    group: "apps",
    icon: "email",
    name: "Projectsta"
  },
  // {
  //   title: "聊天",
  //   group: "apps",
  //   icon: "chat_bubble",
  //   target: "_blank",
  //   name: "Chat"
  // },
  // {
  //   title: "站内信",
  //   group: "apps",
  //   name: "Mail",
  //   target: "_blank",
  //   icon: "email"
  // },
  {
    title: "课程文件",
    group: "apps",
    name: "Media",
    icon: "perm_media"
  },
  {
    title: "图表列表",
    group: "widgets",
    component: "widgets",
    icon: "widgets",
    items: [
      { name: "social", title: "人像列表", component: "components/social" },
      {
        name: "statistic",
        title: "总览",
        badge: "new",
        component: "components/statistic"
      },
      { name: "chart", title: "统计图", component: "components/chart" },
      { name: "list", title: "列表", component: "components/widget-list" }
    ]
  },
  { header: "UI Elements" },
  {
    title: "通用控件",
    group: "components",
    component: "components",
    icon: "tune",
    items: [
      { name: "alerts", title: "Alerts", component: "components/alerts" },
      { name: "avatars", title: "Avatars", component: "components/avatars" },
      { name: "badges", title: "Badges", component: "components/badges" },
      { name: "buttons", title: "Buttons", component: "components/buttons" },
      { name: "cards", title: "Cards", component: "components/cards" },
      {
        name: "carousels",
        title: "Carousels",
        component: "components/carousels"
      },
      { name: "chips", title: "Chips", component: "components/chips" },
      { name: "dialogs", title: "Dialogs", component: "components/dialogs" },
      { name: "icons", title: "Icons", component: "components/icons" },
      { name: "tables", title: "Data Tables", component: "components/tables" },
      {
        name: "parallax",
        title: "Parallax  image",
        component: "components/parallax"
      },
      { name: "snackbar", title: "Snackbar", component: "components/snackbar" },
      { name: "progress", title: "Progress", component: "components/progress" },
      { name: "slider", title: "Slider", component: "components/sliders" },
      { name: "tooltip", title: "Tooltip", component: "components/tooltips" },
      {
        name: "pagination",
        title: "Pagination",
        component: "components/paginations"
      },
      {
        name: "typography",
        title: "Typography",
        component: "components/typography"
      },
      { name: "color", title: "Color", component: "components/color" }
    ]
  },
  {
    title: "时间选择",
    group: "pickers",
    component: "picker",
    icon: "filter_vintage",
    items: [
      {
        name: "timepicker",
        title: "Timepicker",
        component: "pickers/timepicker"
      },
      {
        name: "datepicker",
        title: "Datepicker",
        component: "pickers/datepicker"
      }
    ]
  },
  {
    title: "样式布局",
    group: "layout",
    component: "layout",
    icon: "view_compact",
    items: [
      {
        name: "bottom-sheets",
        title: "Bottom panels",
        component: "components/bottom-sheets"
      },
      {
        name: "expansion-panels",
        title: "Expansion panels",
        component: "components/expansion-panels"
      },
      { name: "footer", title: "Footer", component: "components/footer" },
      { name: "lists", title: "Lists", component: "components/lists" },
      {
        name: "jumbotrons",
        title: "Jumbotrons",
        badge: "new",
        component: "components/jumbotrons"
      },
      { name: "menus", title: "Menus", component: "components/menus" },
      { name: "tabs", title: "Tabs", component: "components/tabs" },
      { name: "toolbar", title: "Toolbars", component: "components/toolbar" },
      { name: "timeline", title: "Timeline", component: "components/timeline" }
    ]
  },
  {
    title: "表格&编辑器",
    group: "forms",
    component: "forms",
    icon: "edit",
    items: [
      { name: "basic", title: "General", component: "components/basic-forms" },
      {
        name: "selects",
        title: "Selects",
        badge: "new",
        component: "components/selects"
      },
      {
        name: "selection-controls",
        title: "Selection Controls",
        component: "components/selection-controls"
      },
      {
        name: "text-fields",
        title: "Text Fields",
        component: "components/text-fields"
      },
      { name: "steppers", title: "Steppers", component: "components/steppers" },
      { name: "editors", title: "Editors", component: "components/editors" }
    ]
  },
  { divider: true },
  { header: "Extras" },
  {
    title: "页面",
    group: "extra",
    icon: "list",
    items: [
      { name: "Login", title: "Login", component: "Login" },
      { name: "404", title: "404", component: "NotFound" },
      { name: "403", title: "403", component: "AccessDenied" },
      { name: "500", title: "500", component: "ServerError" }
    ]
  }
];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
