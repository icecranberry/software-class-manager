const posts = [
  {
    title: "测试问题1",
    desc:
      "这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。",
    featuredImage: "/static/discover_word/thumb/ds_1.jpg",
    author: "测试学生1",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "测试问题2",
    desc:
        "这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。",
    featuredImage: "/static/discover_word/thumb/ds_2.jpg",
    author: "测试学生2",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "测试问题3",
    desc:
        "这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。这是一段测试文本，用来填充问题详情里面的内容，用于问题展示。",
    featuredImage: "/static/discover_word/thumb/ds_3.jpg",
    author: "测试学生3",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "A sample post with image",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
    featuredImage: "/static/discover_word/thumb/ds_4.jpg",
    author: "John Doe",
    createdAt: new Date().toLocaleDateString()
  }
];

const getPost = limit => {
  return limit ? posts.slice(0, limit) : posts;
};

export { getPost };
