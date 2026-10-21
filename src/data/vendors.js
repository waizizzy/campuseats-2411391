const vendors = [
  {
    id: 1,
    name: "Kafe Mahallah Ali",
    location: "Mahallah Ali, Block C",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: 1,
        name: "Nasi Lemak Ayam",
        description: "Coconut rice, fried chicken, sambal, egg and peanuts",
        price: 7.5,
        available: true,
      },
      {
        id: 2,
        name: "Mee Goreng",
        description: "Fried noodles with vegetables and egg",
        price: 5.5,
        available: true,
      },
      {
        id: 3,
        name: "Roti Canai",
        description: "Flaky flatbread served with dhal curry",
        price: 2.0,
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: "Campus Coffee Corner",
    location: "IIUM Campus Centre",
    openHours: "8:00 am - 8:00 pm",
    isOpen: true,
    menu: [
      {
        id: 1,
        name: "Iced Latte",
        description: "Espresso with chilled milk",
        price: 6.5,
        available: true,
      },
      {
        id: 2,
        name: "Chocolate Muffin",
        description: "Soft chocolate muffin",
        price: 4.0,
        available: true,
      },
      {
        id: 3,
        name: "Chicken Sandwich",
        description: "Chicken sandwich with fresh vegetables",
        price: 7.0,
        available: true,
      },
    ],
  },
];

export default vendors;
