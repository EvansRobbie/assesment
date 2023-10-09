// import { setLocalStorage, getFromLocalStorage } from "./local-storage";
const ENC_KEY =
  "2bdVweTeI42s5mkLdYHyklTMxQS5gLA7MDS6FA9cs1uobDXeruACDic0YSU3si04JGZe4Y";
const BASE_URL = process.env.NEXTPUBLIC_URL;

const makeRequest = async ({
  url,
  method,
  data = null,
}: {
  url: string;
  method: string;
  data: null;
}) => {
  url = BASE_URL + url;
  let headers = {
    accept: "*/*",
  };

  //   let user = getFromLocalStorage("user");

  //   const updateUserSession = () => {
  //     if (user) {
  //       setLocalStorage("user", user);
  //     }
  //   };

  headers = { ...headers, ...{ "content-type": "application/json" } };

  //   const token = user?.token;

  //   if (token) {
  //     headers = { ...headers, ...{ Authorization: "Bearer " + token } };
  //   }
  try {
    let request: {
      method: string;
      mode: RequestMode | undefined;
      cache: RequestCache | undefined;
      credentials: RequestCredentials | undefined;
      headers: { accept: string };
      redirect: RequestRedirect | undefined;
      referrerPolicy: ReferrerPolicy | undefined;
      body?: string | undefined;
    } = {
      method: method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };
    if (data) {
      request["body"] = JSON.stringify(data);
    }

    const response = await fetch(url, request);
    let result = await response.json();
    let status = response?.status;
    return [status, result];
  } catch (err: any) {
    console.log(err);
    let status = err.response?.status,
      result = err.response?.data;
    return [status, result];
  } finally {
    // updateUserSession();
  }
};

export default makeRequest;
