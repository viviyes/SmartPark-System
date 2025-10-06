import Mock from "mockjs";
Mock.setup({
  timeout: "200-600",
});
//login interface
Mock.mock("https://www.demo.com/login", "post", (options: any) => {
  //console.log("options",options.body)
  const { username, password } = JSON.parse(options.body);
  if (username === "admin" && password === "admin123123") {
    return {
      code: 200,
      message: "login success",
      data: {
        username: "admin",
        token: "mocktoken123456admin",
        btnAuth: ["add", "edit", "delete"],
      },
    };
  } else if (username === "manager" && password === "manager123123") {
    return {
      code: 200,
      message: "login success",
      data: {
        username: "manager",
        token: "mocktoken123456manager",
        btnAuth: ["add", "edit"],
      },
    };
  } else if (username == "user" && password === "user123123") {
    return {
      code: 200,
      message: "login success",
      data: {
        username: "user",
        token: "mocktoken123456user",
        btnAuth: ["add"],
      },
    };
  } else {
    return {
      code: 401,
      message: "Username or password is incorrect",
      data: "",
    };
  }
});

const menuList = [
  {
    icon: "DashboardOutlined",
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "Users",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "UserList",
        key: "/users/list",
      },
      // {
      //   icon: "UserAddOutlined",
      //   label: "UserAdd",
      //   key: "/users/add",
      // },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Estate",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "EstateTentment",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "EstateRoom",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "EstateCar",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Repair",
    key: "/repair",
  },
  {
    icon: "DollarOutlined",
    label: "Finance",
    key: "/finance",
    children: [
      {
        icon: "ProfileOutlined",
        label: "FinanceContract",
        key: "/finance/contract",
      },
      {
        icon: "FrownOutlined",
        label: "FinanceSurrender",
        key: "/finance/surrender",
      },
      {
        icon: "FileTextOutlined",
        label: "FinanceBill",
        key: "/finance/bill",
      },
    ],
  },
  {
    icon: "TransactionOutlined",
    label: "Merchants",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "Operation",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "OperationAll",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "OperationArtical",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "OperationComments",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Equipment",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "Energy",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "Settings",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "Personal",
    key: "/personal",
  },
];

const userMenuList = [
  {
    icon: "DashboardOutlined",
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "Users",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "UserList",
        key: "/users/list",
      },
      // {
      //   icon: "UserAddOutlined",
      //   label: "UserAdd",
      //   key: "/users/add",
      // },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Estate",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "EstateTentment",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "EstateRoom",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "EstateCar",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Repair",
    key: "/repair",
  },
  {
    icon: "ToolOutlined",
    label: "Equipment",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "Energy",
    key: "/energy",
  },
  {
    icon: "UserOutlined",
    label: "Personal",
    key: "/personal",
  },
];

const managerMenuList = [
  {
    icon: "DashboardOutlined",
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "Users",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "UserList",
        key: "/users/list",
      },
      // {
      //   icon: "UserAddOutlined",
      //   label: "UserAdd",
      //   key: "/users/add",
      // },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Estate",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "EstateTentment",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "EstateRoom",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "EstateCar",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Repair",
    key: "/repair",
  },
  {
    icon: "TransactionOutlined",
    label: "Merchants",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "Operation",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "OperationAll",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "OperationArtical",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "OperationComments",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Equipment",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "Energy",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "Settings",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "Personal",
    key: "/personal",
  },
];

const customizeMenuList = [
  {
    icon: "DashboardOutlined",
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "Users",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "UserList",
        key: "/users/list",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "Estate",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "EstateTentment",
        key: "/estate/tenement",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Repair",
    key: "/repair",
  },
  {
    icon: "ToolOutlined",
    label: "Equipment",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "Energy",
    key: "/energy",
  },
  {
    icon: "UserOutlined",
    label: "Personal",
    key: "/personal",
  },
];

//Menu interface
Mock.mock("https://www.demo.com/menu", "get", (options: any) => {
  const token = sessionStorage.getItem("token");
  if (token == "mocktoken123456admin") {
    return {
      code: 200,
      message: "request success",
      data: menuList,
    };
  } else if (token == "mocktoken123456user") {
    return {
      code: 200,
      message: "request success",
      data: userMenuList,
    };
  } else if (token == "mocktoken123456manager") {
    return {
      code: 200,
      message: "request success",
      data: managerMenuList,
    };
  } else {
    return {
      code: 200,
      message: "request failed",
      data: [],
    };
  }
});
//dashboard: chart interface

Mock.mock("https://www.demo.com/energyData", "get", () => {
  return {
    code: 200,
    message: "request success",
    data: [
      { name: "Coal", data: [120, 132, 101, 134, 90, 230, 210] },
      { name: "Gas", data: [220, 182, 191, 234, 290, 330, 310] },
      { name: "Oil", data: [150, 232, 201, 154, 190, 330, 410] },
      { name: "Electricity", data: [320, 332, 301, 334, 390, 330, 320] },
      { name: "Heat", data: [820, 932, 901, 934, 1290, 1330, 1320] },
    ],
  };
});

Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ["13", "14", "15", "16", "17", "18", "19"]; // write prefix yourself
    return this.pick(phonePrefixs) + Mock.mock(/\d{9}/); //Number()
  },
});

//UserList interface
Mock.mock("https://www.demo.com/userList", "post", (options: any) => {
  const { pageSize, page, companyName, contact, phone } = JSON.parse(
    options.body
  );
  console.log(
    "UserList received parameters",
    page,
    pageSize,
    companyName,
    contact,
    phone
  );
  return {
    code: 200,
    message: "success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          id: "@string('number',6)", //randomly generate a six-digit id
          name: "@name", //randomly generate a person's name
          "status|1": ["1", "2", "3"],
          tel: "@phone",
          "business|1": [
            "Manufacturing",
            "Internet",
            "New Media",
            "Beauty",
            "New Energy",
            "Logistics",
            "E-commerce",
          ],
          email: "@email",
          creditCode: "@string('number',18)",
          industryNum: "@string('number',15)",
          organizationCode: "@string('upper',9)",
          legalPerson: "@name",
        },
      ],
      total: 78,
    }),
  };
});

//delete enterprise
Mock.mock("https://www.demo.com/deleteUser", "post", (options: any) => {
  const { id } = JSON.parse(options.body);
  console.log("delete enterprise", id);
  return {
    code: 200,
    message: "success",
    data: "operation success",
  };
});

//batch delete enterprise
Mock.mock("https://www.demo.com/batchDeleteUser", "post", (options: any) => {
  const { ids } = JSON.parse(options.body);
  console.log("ids", ids);
  return {
    code: 200,
    message: "success",
    data: "operation success",
  };
});
//edit enterprise
Mock.mock("https://www.demo.com/editUser", "post", (options: any) => {
  console.log("edit enterprise received parameters", JSON.parse(options.body));
  return {
    code: 200,
    message: "success",
    data: "operation success",
  };
});
//get room list interface
function generateRooms() {
  const rooms = [];
  for (let i = 0; i < 50; i++) {
    const floor = 1 + Math.floor(i / 6); // each 6 rooms per floor
    const roomNumber = floor * 100 + (101 + (i % 6)); // calculate room number
    rooms.push({
      roomNumber,
      decorationType: Mock.Random.pick(["Rough", "Finish"]),
      area: Mock.Random.integer(70, 300),
      unitPrice: Mock.Random.integer(1, 3),
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    });
  }
  return rooms;
}
Mock.mock("https://www.demo.com/roomList", "post", (options: any) => {
  console.log("received room id", JSON.parse(options.body).roomid);
  return {
    code: 200,
    message: "success",
    data: {
      rooms: generateRooms(),
    },
  };
});

//FinanceContract
Mock.mock("https://www.demo.com/contractList", "post", (options: any) => {
  const { page, pageSize } = JSON.parse(options.body);
  console.log("backend FinanceContract received parameters", JSON.parse(options.body));
  return {
    code: 200,
    message: "success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          contractNo: '@string("number", 6)',
          "type|1": ["Lease Contract", "Custom Contract", "Purchase Contract"],
          "name|1": [
            "House Lease Contract Template",
            "Parking Lease Contract Template",
            "Commercial Property Sale Contract",
          ],
          "startDate|1": ["2023-01-01", "2023-03-05", "2023-04-01"],
          "endDate|1": ["2024-01-01", "2024-03-05", "2024-04-01"],
          "jia|1": ["Wanwu Technology Co., Ltd.", "Big Fish Network Technology", "Six Six Information Technology Co., Ltd."],
          yi: "Tianming Property Co., Ltd.",
          "status|1": ["1", "2", "3"],
        },
      ],
      total: 54,
    }),
    // generate 55条数据
  };
});

//FinanceBill
Mock.mock("https://www.demo.com/billList", "post", (options: any) => {
  const { page, pageSize, companyName, contact, phone } = JSON.parse(
    options.body
  );
  console.log("backend FinanceBill received parameters", JSON.parse(options.body));
  return {
    code: 200,
    message: "success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          accountNo: '@string("number", 6)',
          "status|1": ["1", "2"],
          "roomNo|1": [
            "Building A1-201",
            "Building B1-402",
            "Building B2-701",
            "Building C2-1601",
          ],
          "carNo|1": ["B109", "C227", "C106", "D158"],
          "tel|1": ["@phone"],
          "costName1|1": [1278.0, 2633.0, 3698.0],
          costName2: "200$/month",
          "costName3|1": ["25800$/year", "19800$/year"],
          startDate: "2023-01-01",
          endDate: "2024-01-01",
          preferential: 0.0,
          money: 26000.0,
          "pay|1": ["WeChat", "Alipay", "Cash", "Bank Transfer"],
        },
      ],
      total: 54,
    }),
    // generate 55条数据
  };
});

//Equipment
Mock.mock("https://www.demo.com/equipmentlist", "post", (options: any) => {
  const { page, pageSize, companyName, contact, phone } = JSON.parse(
    options.body
  );
  console.log("backend Equipment received parameters", JSON.parse(options.body));
  return {
    code: 200,
    message: "success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          "id|+1": 1001,
          'name|1':['Smart Water Supply Unit','Building A1 Heating Equipment','Entrance Gate','Bullet Camera','Building C1 Central Air Conditioner','B Area Charging Pile','B2-21-Elevator','Road Equipment 1'],
          'person':"@cname", //person in charge
          "tel|1":['@phone'], //person in charge phone
          "time":['20 years','15 years','10 years'], //theoretical life
          "rest":'7 years', //remaining life
          'status|1':[1, 2, 3], //1 in use 2 maintenance 3 damaged
          'last': ["Modle 1", "Modle 2", "Modle 3"], //specification model
          'from|1':['Shanghai Technology Co., Ltd.', 'Wuhan Energy Equipment Co., Ltd.', 'Chongqing某某Lighting Co., Ltd.'], //production factory
        }],
        "total":90
    }),
    //generate 90条数据
  };
});

//account management
Mock.mock("https://www.demo.com/accountList", "post", (options: any) => {
  //  const {page,pageSize,companyName,contact,phone}=JSON.parse(options.body);
  console.log("backend account management received parameters", options);
  return {
    code: 200,
    message: "success",
    data: {
      list: [
        {
          id: 1001,
          accountName: "xuchao",
          auth: "admin",
          person: "Rose",
          tel: "0439186272",
          department: "President's Office",
          menu: menuList,
        },
        {
          id: 1002,
          accountName: "user01",
          auth: "user",
          person: "Emily",
          tel: "0423865109",
          department: "Marketing Department",
          menu: userMenuList,
        },
        {
          id: 1003,
          accountName: "manager01",
          auth: "manager",
          person: "John",
          tel: "0439586712",
          department: "Finance Department",
          menu: managerMenuList,
        },
        {
          id: 1004,
          accountName: "user02",
          auth: "customize",
          person: "Andy",
          tel: "0468128572",
          department: "Planning Department",
          menu: customizeMenuList,
        },
        {
          id: 1005,
          accountName: "laowang",
          auth: "user",
          person: "David",
          tel: "0435891281",
          department: "President's Office",
          menu: userMenuList,
        },
      ],
      total: 5,
    },
  };
});
