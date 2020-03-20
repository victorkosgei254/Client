const intialState = {
  count: 0,
  products: {
    count: 14,
    results: [
      {
        name: "This is a new Name",
        price: 34242,
        id: "5e71190673393236b3ccfc98",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71190673393236b3ccfc98"
        }
      },
      {
        name: "Another Product",
        price: 3243,
        id: "5e71196373393236b3ccfc99",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71196373393236b3ccfc99"
        }
      },
      {
        name: "Scrutty Nity",
        price: 3243,
        id: "5e711db8e2a02f371a1a0d66",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e711db8e2a02f371a1a0d66"
        }
      },
      {
        name: "Bike Moz",
        price: 563,
        id: "5e71bde3e320ed03f5622266",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71bde3e320ed03f5622266"
        }
      },
      {
        name: "IPad",
        price: 1299,
        id: "5e71bdfae320ed03f5622267",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71bdfae320ed03f5622267"
        }
      },
      {
        name: "Huawei Router",
        price: 129.9,
        id: "5e71be0de320ed03f5622268",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71be0de320ed03f5622268"
        }
      },
      {
        name: "Jeans",
        price: 7.99,
        id: "5e71d3194fa3640d88c4a61a",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71d3194fa3640d88c4a61a"
        }
      },
      {
        name: "Jeans",
        price: 7.99,
        id: "5e71d5f30371430e1a6522d4",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71d5f30371430e1a6522d4"
        }
      },
      {
        name: "Jeans",
        price: 7.99,
        id: "5e71d8997461000e72d38f46",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71d8997461000e72d38f46"
        }
      },
      {
        name: "Jeans Red",
        price: 7.99,
        id: "5e71d9b5d18ff90e9d2dcd55",
        productImage: "uploads/2020-03-18T08:20:05.499Zme.jpg",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71d9b5d18ff90e9d2dcd55"
        }
      },
      {
        name: "Lexus B",
        price: 7.99,
        id: "5e71f81a72acea111e89755c",
        productImage: "uploads/2020-03-18T10:29:46.810Zme.jpg",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71f81a72acea111e89755c"
        }
      },
      {
        name: "Lexus B",
        price: 7.99,
        id: "5e71f953c43193113688f245",
        productImage: "uploads/2020-03-18T10:34:59.903Zme.jpg",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71f953c43193113688f245"
        }
      },
      {
        name: "Lexus B",
        price: 7.993,
        id: "5e71f9967c51bc115842efb5",
        productImage: "uploads/2020-03-18T10:36:06.411Zme.jpg",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71f9967c51bc115842efb5"
        }
      },
      {
        name: "Savannah Blossoms 2",
        price: 7.993,
        id: "5e71fc985a1cae11c2d821bf",
        productImage: "uploads/2020-03-18T10:48:56.180Zme.jpg",
        request: {
          type: "GET",
          url: "http://localhost:3000/products/5e71fc985a1cae11c2d821bf"
        }
      }
    ]
  },
  isLogin: true
};
const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCRTS":
      return {
        products: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      };
    default:
      return state;
  }
};

export default productsReducer;
