import { request } from "../utils/request";

export const queryPostList = (data) =>
  request({
    url: "/postlist",
    method: "GET",
    data,
  });
export const queryPostDetails = (data) =>
  request({
    url: "/postdetails",
    method: "GEt",
    data,
  });
