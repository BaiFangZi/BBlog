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
    method: "GET",
    data,
  });

export const queryTopic = (data) =>
  request({
    url: "/topicnav",
    method: "GET",
    data,
  });

  export const queryTopicContent=(data)=>request({
    url:'/querytopiccontent',
    method:'GET',
    data
  })
