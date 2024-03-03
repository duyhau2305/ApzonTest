const data = {
  customers: [
    {
      customerId: "C00001",
      customerName: "Công ty cổ phần PX",
      orders: [
        {
          date: "2024-02-01",
          items: [
            { productId: "BBC-AST", productName: "Chese-Swiss Sliced", quantity: 2, unitPrice: 50000 },
            { productId: "BBC-AST", productName: "Chese-Swiss Sliced", quantity: 1, unitPrice: 70000 },
            { productId: "BBC-AST", productName: "Chese-Swiss Sliced", quantity: 4, unitPrice: 70000 },
            { productId: "BBC-AST", productName: "Chese-Swiss Sliced", quantity: 123, unitPrice: 70000 }
          ]
        },
        {
          date: "2024-02-02",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 3, unitPrice: 50000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 2, unitPrice: 60000 }
          ]
        },
        {
          date: "2024-02-03",
          items: [
            { productId: "SP002", productName: "Sản phẩm B", quantity: 1, unitPrice: 70000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 4, unitPrice: 60000 }
          ]
        }
      ]
    },
    {
      customerId: "KH002",
      customerName: "Khách hàng B",
      orders: [
        {
          date: "2024-02-01",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 2, unitPrice: 50000 },
            { productId: "SP002", productName: "Sản phẩm B", quantity: 1, unitPrice: 70000 }
          ]
        },
        {
          date: "2024-02-02",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 3, unitPrice: 50000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 2, unitPrice: 60000 }
          ]
        },
        {
          date: "2024-02-03",
          items: [
            { productId: "SP002", productName: "Sản phẩm B", quantity: 1, unitPrice: 70000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 4, unitPrice: 60000 }
          ]
        }
      ]
    }
    // Thêm thông tin khách hàng khác nếu cần
  ],
  suppliers: [
    {
      supplierId: "NCC001",
      supplierName: "Nhà cung cấp X",
      orders: [
        {
          date: "2024-02-01",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 2, unitPrice: 50000 },
            { productId: "SP002", productName: "Sản phẩm B", quantity: 1, unitPrice: 70000 }
          ]
        },
        {
          date: "2024-02-02",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 3, unitPrice: 50000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 2, unitPrice: 60000 }
          ]
        }
      ]
    },
    {
      supplierId: "NCC002",
      supplierName: "Nhà cung cấp Y",
      orders: [
        {
          date: "2024-02-01",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 2, unitPrice: 50000 },
            { productId: "SP002", productName: "Sản phẩm B", quantity: 1, unitPrice: 70000 }
          ]
        },
        {
          date: "2024-02-02",
          items: [
            { productId: "SP001", productName: "Sản phẩm A", quantity: 3, unitPrice: 50000 },
            { productId: "SP003", productName: "Sản phẩm C", quantity: 2, unitPrice: 60000 }
          ]
        }
      ]
    }
    // Thêm thông tin nhà cung cấp khác nếu cần
  ]
};

export { data };
