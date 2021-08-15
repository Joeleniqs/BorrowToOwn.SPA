export const productMock = {
  id: 12,
  subCategoryId: 8,
  categoryId: 1,
  brandId: 3,
  name: "Techno Spark 4",
  quantity: 5,
  actualPrice: 55000,
  model: "Spark 4",
  availableSizes: [],
  availableColours: [],
  description:
    "166.7 x 75.8 x 8.4 mm (6.56 x 2.98 x 0.33 in)\nGlass front, plastic back, plastic frame\nDual SIM (Nano-SIM, dual stand-by)\nAndroid 9.0 (Pie), HIOS 5.5\n32GB 2GB RAM 8 MP, AF",
  productState: "New",
  inStock: true,
  isActive: true,
  isModified: false,
  isDeleted: false,
  createdBy: "",
  lastModifiedBy: null,
  timeStampCreated: "2020-08-21T18:40:03.089248-04:00",
  timeStampModified: "0001-01-01T00:00:00-05:17",
  productImages: [
    {
      id: 25,
      productId: 12,
      imageUrl:
        "https://borrow-s3-bucket.s3.amazonaws.com/Images/Products/Tecno-Spark-4-a_result_cover.jpg",
      isCoverImage: true,
    },
    {
      id: 26,
      productId: 12,
      imageUrl:
        "https://borrow-s3-bucket.s3.amazonaws.com/Images/Products/images.jpeg",
      isCoverImage: false,
    },
    {
      id: 27,
      productId: 12,
      imageUrl:
        "https://borrow-s3-bucket.s3.amazonaws.com/Images/Products/technoSpark4download.jpeg",
      isCoverImage: false,
    },
  ],
  allowedPaymentPlans: [
    {
      productId: 12,
      paymentPlanId: 3,
      productName: "Techno Spark 4",
      paymentPlanName: "Outright Purchase",
    },
  ],
};
