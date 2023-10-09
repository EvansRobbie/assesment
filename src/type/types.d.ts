interface carEntity {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: string;
  fuelType: string;
  ccMeasurement: number;
}

interface paginationEntity {
  total: number;
  currentPage: number;
  pageSize: number;
}
