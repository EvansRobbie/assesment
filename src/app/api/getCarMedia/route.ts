import makeRequest from "@/utils/fetchRequest";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  //   console.log(searchParams);
  const carId = searchParams.get("carId");

  let url = `/car_media?carId=${carId}`;
  try {
    const res = await makeRequest({
      url,
      method: "GET",
      data: null,
    });
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
};
