import { request } from "../utils/request";

export const queryPostList = (data) =>
  request({
    url: "/postlist",
    method: "GET",
    data,
  });
