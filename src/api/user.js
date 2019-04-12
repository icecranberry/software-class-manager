const Items = [
  {
    uuid: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
    name: "测试学生1",
    email: "23142134234@gmail.com",
    username: "Dessie79",
    jobTitle: "Web Developer",
    phone: "2010502010201",
    avatar: "/static/avatar/a2.jpg",
    finished:5,
    address: {
      street: "655 Archibald Groves",
      suite: "Apt. 818",
      city: "Carlosshire",
      state: "Arkansas",
      country: "Somalia",
      zipcode: "10406",
      geo: {
        lat: "-44.6063",
        lng: "-169.7706"
      }
    }
  },
  {
    uuid: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
    name: "测试学生2",
    jobTitle: "Web Designer",
    email: "3452334ewf@yahoo.com",
    username: "Jakayla_Crooks86",
    phone: "2010502010202",
    avatar: "/static/avatar/a3.jpg",
    finished:5,
    address: {
      street: "281 Tillman Forge",
      suite: "Apt. 381",
      city: "New Sandrinemouth",
      state: "North Dakota",
      country: "Reunion",
      zipcode: "19540-8186",
      geo: {
        lat: "-12.3375",
        lng: "-117.9067"
      }
    }
  },
  {
    uuid: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
    name: "测试学生3",
    jobTitle: "Sales",
    email: "ttesttest@hotmail.com",
    username: "Hobart_Mueller",
    phone: "2010502010203",
    avatar: "static/avatar/a1.jpg",
    finished:4,
    address: {
      street: "706 Padberg Knoll",
      suite: "Suite 818",
      city: "Port Mablefurt",
      state: "Arkansas",
      country: "Netherlands Antilles",
      zipcode: "89975-6584",
      geo: {
        lat: "-42.9187",
        lng: "8.5866"
      }
    }
  },
  {
    uuid: "6a03248b-1752-4332-a3a9-7108528cc9d3",
    name: "测试学生4",
    jobTitle: "Marketing",
    email: "testettes@hotmail.com",
    username: "Celestine.Casper",
    phone: "2010502010204",
    avatar: "/static/avatar/a4.jpg",
    finished:5,
    address: {
      street: "9528 Schroeder Track",
      suite: "Apt. 443",
      city: "Godfreyburgh",
      state: "Montana",
      country: "Slovenia",
      zipcode: "10220",
      geo: {
        lat: "36.8638",
        lng: "20.0047"
      }
    }
  },
  {
    uuid: "ee272550-36e8-4fe2-889d-c1ee701c5863",
    name: "测试学生5",
    email: "testtestt@yahoo.com",
    jobTitle: "Project Manager",
    username: "Hortense99",
    phone: "2010502010205",
    finished:4,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",
    address: {
      street: "9046 Allen Ferry",
      suite: "Suite 429",
      city: "Angushaven",
      state: "Michigan",
      country: "Costa Rica",
      zipcode: "92378-7065",
      geo: {
        lat: "78.1292",
        lng: "-134.6632"
      }
    }
  },
  {
    uuid: "77f4b102-9df5-43ba-966a-6f816806c5e2",
    name: "测试学生6",
    jobTitle: "Product Manager",
    email: "testttestte@gmail.com",
    username: "Pat_Zulauf81",
    phone: "2010502010206",
    finished:5,
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg",
    address: {
      street: "62268 Favian Coves",
      suite: "Suite 993",
      city: "Baumbachstad",
      state: "New Mexico",
      country: "Montserrat",
      zipcode: "44440",
      geo: {
        lat: "-34.7835",
        lng: "148.8907"
      }
    }
  },
  {
    uuid: "36a1ead7-57a0-4275-8a21-956194ab7cdf",
    name: "测试学生7",
    jobTitle: "Web Developer",
    email: "tesdtestes@hotmail.com",
    username: "Solon.Bauch4",
    phone: "2010502010207",
    finished:5,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg",
    address: {
      street: "8153 Favian Walk",
      suite: "Apt. 495",
      city: "East Preston",
      state: "Idaho",
      country: "Iceland",
      zipcode: "24555",
      geo: {
        lat: "-42.5691",
        lng: "-2.5791"
      }
    }
  },
  {
    uuid: "b5899bef-d01e-42d8-af2d-edfb16b6b21e",
    name: "测试学生8",
    jobTitle: "Programmer",
    email: "testtest@hotmail.com",
    username: "Calista_Mertz17",
    phone: "2010502010208",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",
    finished:3,
    address: {
      street: "886 Wendy Circles",
      suite: "Apt. 933",
      city: "Lake Loy",
      state: "Rhode Island",
      country: "South Africa",
      zipcode: "65261",
      geo: {
        lat: "-58.9245",
        lng: "-43.6330"
      }
    }
  },
  {
    uuid: "7d910620-84e1-49fc-951e-d375587b8189",
    name: "测试学生9",
    jobTitle: "Sales Executive",
    email: "testtestt@yahoo.com",
    username: "Jackeline.Abshire",
    phone: "2010502010209",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",
    finished:5,
    address: {
      street: "416 Cathy Spur",
      suite: "Apt. 431",
      city: "North Camila",
      state: "Pennsylvania",
      country: "Libyan Arab Jamahiriya",
      zipcode: "31751",
      geo: {
        lat: "64.0673",
        lng: "154.7671"
      }
    }
  },
  {
    uuid: "afdb5033-5bcc-4cec-b932-353a83410b44",
    name: "测试学生10",
    jobTitle: "PHP Developer",
    email: "testtttesttt@gmail.com",
    username: "Jamey_Grant",
    phone: "2010502010210",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg",
    finished:5,
    address: {
      street: "38372 Mante Glen",
      suite: "Suite 090",
      city: "Robertsside",
      state: "Texas",
      country: "Equatorial Guinea",
      zipcode: "86558-7214",
      geo: {
        lat: "-55.0222",
        lng: "-100.5977"
      }
    }
  },
  {
    uuid: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
    name: "测试学生11",
    email: "testttttestt@gmail.com",
    jobTitle: "Web Developer",
    username: "Barton85",
    phone: "2010502010211",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/a_harris88/128.jpg",
    finished:5,
    address: {
      street: "185 Florine Spurs",
      suite: "Suite 178",
      city: "Port Carrollburgh",
      state: "Alaska",
      country: "Saint Barthelemy",
      zipcode: "30126",
      geo: {
        lat: "24.0545",
        lng: "-88.8499"
      }
    }
  },
  {
    uuid: "5c44b666-baca-4f18-a3cb-23068c6edc14",
    name: "测试学生12",
    jobTitle: "Assets",
    email: "tttttttest@hotmail.com",
    username: "Gloria78",
    phone: "2010502010212",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",
    finished:5,
    address: {
      street: "643 Arch Mews",
      suite: "Apt. 171",
      city: "Wymanland",
      state: "Indiana",
      country: "Jersey",
      zipcode: "73594-9840",
      geo: {
        lat: "-70.9980",
        lng: "-151.6234"
      }
    }
  },
  {
    uuid: "46d6f992-5729-4588-b7f8-ce74f21157ba",
    name: "测试学生13",
    jobTitle: "Finaice",
    email: "teeeeeest@yahoo.com",
    username: "Olin.Robel49",
    phone: "2010502010213",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg",
    finished:4,
    address: {
      street: "0813 Mayer Greens",
      suite: "Apt. 551",
      city: "Bergstromburgh",
      state: "Ohio",
      country: "Anguilla",
      zipcode: "42502-9731",
      geo: {
        lat: "-48.2520",
        lng: "60.6556"
      }
    }
  },
  {
    uuid: "bd30e201-cceb-410e-8497-a4072bc399f5",
    name: "测试学生14",
    jobTitle: "Supporting",
    email: "Rtestttest@yahoo.com",
    username: "Rollin43",
    phone: "2010502010214",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/horaciobella/128.jpg",
    finished:5,
    address: {
      street: "5704 Spinka Causeway",
      suite: "Suite 388",
      city: "Pollyburgh",
      state: "Arizona",
      country: "Virgin Islands, U.S.",
      zipcode: "45048",
      geo: {
        lat: "55.3046",
        lng: "3.8129"
      }
    }
  },
  {
    uuid: "da95e977-cd54-4077-a767-1b7f33ef6919",
    name: "测试学生15",
    email: "testttest@hotmail.com",
    username: "Murl_Abshire41",
    jobTitle: "Web Developer",
    phone: "2010502010215",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg",
    finished:5,
    address: {
      street: "4880 Tanner Circles",
      suite: "Apt. 994",
      city: "Bauchside",
      state: "Ohio",
      country: "Uganda",
      zipcode: "11259",
      geo: {
        lat: "11.6209",
        lng: "-45.1766"
      }
    }
  },
  {
    uuid: "6124d4e8-77ed-4b34-868d-d312bfab5de2",
    name: "测试学生16",
    jobTitle: "Web Developer",
    email: "tttttttesttest@hotmail.com",
    username: "Breanna.Bartoletti",
    phone: "2010502010216",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg",
    finished:4,
    address: {
      street: "431 Grimes Common",
      suite: "Apt. 530",
      city: "East Lunahaven",
      state: "Virginia",
      country: "Hungary",
      zipcode: "12012-3038",
      geo: {
        lat: "29.7991",
        lng: "-70.4033"
      }
    }
  },
  {
    uuid: "eef93cb1-7766-4413-a5cf-ecbf71fa3674",
    name: "测试学生17",
    email: "testttest@yahoo.com",
    username: "Maya55",
    jobTitle: "Web Developer",
    phone: "2010502010217",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nvkznemo/128.jpg",
    finished:5,
    address: {
      street: "58581 Guillermo Springs",
      suite: "Suite 574",
      city: "Cloydville",
      state: "Delaware",
      country: "Saint Barthelemy",
      zipcode: "95633-3394",
      geo: {
        lat: "-57.5740",
        lng: "104.5634"
      }
    }
  },
  {
    uuid: "899d0e31-b71e-4d95-a8a0-6a8bceb314bd",
    name: "测试学生18",
    jobTitle: "Web Developer",
    email: "testtttest@yahoo.com",
    username: "Santiago41",
    phone: "2010502010218",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg",
    finished:5,
    address: {
      street: "7868 Windler Dam",
      suite: "Suite 876",
      city: "Port Emmetfurt",
      state: "Alabama",
      country: "Belarus",
      zipcode: "63739-4581",
      geo: {
        lat: "-28.7166",
        lng: "-167.7070"
      }
    }
  },
  {
    uuid: "a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",
    name: "测试学生19",
    email: "testttttttt@yahoo.com",
    username: "Leonardo10",
    phone: "2010502010219",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/adobi/128.jpg",
    finished:5,
    address: {
      street: "146 Lemke Mountains",
      suite: "Apt. 407",
      city: "North Toyfort",
      state: "Connecticut",
      country: "Senegal",
      zipcode: "90211-1855",
      geo: {
        lat: "-56.3849",
        lng: "-167.1372"
      }
    }
  },
  {
    uuid: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
    name: "测试学生20",
    jobTitle: "Web Developer",
    email: "testtestttest@hotmail.com",
    username: "Lora_Kessler5",
    phone: "2010502010220",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/antongenkin/128.jpg",
    finished:5,
    address: {
      street: "4018 Willms Turnpike",
      suite: "Suite 573",
      city: "Leuschkemouth",
      state: "Kentucky",
      country: "Dominican Republic",
      zipcode: "70964",
      geo: {
        lat: "80.2384",
        lng: "38.1323"
      }
    }
  }
];

const getUserById = uuid => {
  return uuid === undefined ? Items[0] : Items.find(x => x.uuid === uuid);
};

const getUser = limit => {
  return limit ? Items.slice(0, limit) : Items;
};

export { Items, getUser, getUserById };
