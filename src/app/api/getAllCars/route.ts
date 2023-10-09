import makeRequest from "@/utils/fetchRequest";
import { NextResponse } from "next/server";

export const GET = async () => {
  let url = "/car/search";
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
