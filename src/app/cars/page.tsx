import Search from "@/components/Search";
import ListCars from "@/components/cars/ListCars";
import { notFound } from "next/navigation";
import queryString from "query-string";

let isLoading: boolean;
let base_url: string;
if (process.env.NODE_ENV === "development") {
  base_url = "http://localhost:3001";
} else {
  base_url = "https://assesment-pi.vercel.app";
}
const fetchAllCars = async ({ page }: { page: string }) => {
  isLoading = true;
  const urlParams = {
    page,
  };
  const searchQuery = queryString.stringify(urlParams);
  const res = await fetch(`${base_url}/api/getAllCars?${searchQuery}`);
  if (res.status !== 200) {
    return notFound();
  }
  isLoading = false;
  return res.json();
};
export default async function Home({
  searchParams: { page },
}: {
  searchParams: { page: string };
}) {
  const data = await fetchAllCars({ page });
  console.log(page);
  const cars = data[1];

  return (
    <main className="flex min-h-screen flex-col ">
      <ListCars cars={cars} isLoading={isLoading} />
    </main>
  );
}
