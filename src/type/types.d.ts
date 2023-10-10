interface carEntity {
  id?: string;
  title?: string;
  carName?: string;
  imageUrl?: string;
  year?: number;
  city?: string;
  state: string;
  country?: string;
  sellingCondition?: string;
  hasWarranty?: boolean;
  marketplacePrice?: number;
  marketplaceOldPrice?: number;
  engineType?: string;
  bodyType?: {
    name: string;
  };
  interiorColor?: string;
  exteriorColor?: string;
  registrationSeries?: string;
  model?: {
    wheelType?: string;
  };
  hasFinancing: boolean;
  error: string;
  mileage?: number;
  mileageUnit?: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission?: string;
  fuelType?: string;
  ccMeasurement?: number;
}

interface paginationEntity {
  total: number;
  currentPage: number;
  pageSize: number;
}

interface mediaEntity {
  id: number;
  name: string;
  url: string;
  type: string;
}

interface PopularEntity {
  makeList: {
    id: number;
    name: string;
    imageUrl: string;
  }[];
}
