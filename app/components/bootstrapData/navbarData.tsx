const navbarData = [
  {
    id: 1,
    header: "Eyeglasses",
    links: [
      {
        id: 11,
        text: "EyeGlasses ",
        url: "#link1",
      },
      {
        id: 12,
        text: "Women's Eyeglasses",
        url: "#link2",
      },
      {
        // Add more links as needed...
        id: 13,
        text: "Men's Eyeglasses",
        url: "#link3",
      },

      {
        id: 14,
        text: "Women's Eyeglasses",
        url: "#link4",
      },
      {
        id: 15,
        text: "On Sale",
        url: "#link4",
        onSale: true,
      },
    ],
    children: [
      {
        id: 21,
        header: "Featured",
        links: [
          {
            id: 211,
            text: "New Arrivals",
            url: "#child-link1",
          },
          {
            id: 212,
            text: "Ray Ban Eyeglasses",
            url: "#child-link2",
          },
          {
            id: 213,
            text: "2-Day Delivery",
            url: "#child-link2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    header: "Premium Brands",
    brands: [
      {
        id: 11,
        text: "Ray-Ban",
        imageUrl:
          "https://img.ebdcdn.com/upload/banner/202204/270025254155.jpg?seo=/01-25-collections-ray-ban",
      },
      {
        id: 12,
        text: "Oakley",
        imageUrl:
          "https://img.ebdcdn.com/upload/banner/202201/242228067397.jpg?seo=/01-25-collections-oakley",
      },
      {
        id: 13,
        text: "ARNETTE",
        imageUrl:
          "https://img.ebdcdn.com/upload/banner/202208/080121578855.jpg?seo=/08-18-arnette",
      },
      {
        id: 14,
        text: "Vogue Eyewear",
        imageUrl:
          "https://img.ebdcdn.com/upload/banner/202208/010025495666.jpg?seo=/08-18-vogue",
      },
      {
        id: 15,
        text: "RFLKT®",
        imageUrl:
          "https://img.ebdcdn.com/upload/banner/202201/242229184793.jpg?seo=/01-25-collections-rflkt",
      },
    ],
  },
];

export default navbarData;
