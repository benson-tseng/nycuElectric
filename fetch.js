import axios from 'axios';
import qs from 'qs';
import { parse } from 'node-html-parser';
import 'dotenv/config';

let webhook_url = 'https://notify-api.line.me/api/notify';
let oauthToken = process.env.token;
let phoneNum = process.env.phone;
let roomID = process.env.room;

let data = qs.stringify({
  'ctl00$Content$BootstrapFormLayout1$edRoomNo$State': '{&quot;validationState&quot;:&quot;&quot;}',
  'ctl00$Content$BootstrapFormLayout1$edRoomNo': roomID,
  'ctl00$Content$BootstrapFormLayout1$edPhone$State': '{&quot;validationState&quot;:&quot;&quot;}',
  'ctl00$Content$BootstrapFormLayout1$edPhone': phoneNum,
  'ctl00$Content$BootstrapFormLayout1$btnQuery': '查詢',
  'ctl00$Content$BootstrapFormLayout1$edStudent': '',
  'ctl00$Content$BootstrapFormLayout1$edBalance': '',
  'ctl00$Content$BootstrapFormLayout1$edQueryTime': '',
  'DXScript': '1_11,1_64,1_12,1_252,1_13,1_14,1_15,1_60,23_0,23_1,23_32,1_183,1_184,23_30,1_23,1_182,23_31',
  'DXCss': '23_80,23_88',
  '__EVENTTARGET': '',
  '__EVENTARGUMENT': '',
  '__VIEWSTATEGENERATOR': 'CA0B0334'
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://59.127.49.50/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'ASP.NET_SessionId=d0acv15kk1gwndhna5rorfvr'
  },
  data: data
};

async function sendApi() {
  let date = new Date(Date.now()).toString()
  console.log(date)
  // get balance
  let response = await axios.request(config)
  let htmlData = parse(response.data)
  let balance = htmlData.querySelector("#Content_BootstrapFormLayout1_edBalance_I").attributes.value;

  // push message
  const message = new URLSearchParams();
  message.append('message', date+'\n剩餘電費: ' + balance);
  response = await axios.post(webhook_url, message, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Authorization': 'Bearer ' + oauthToken
    }
  })
  console.log("發送訊息完成，剩餘電費: "+balance)
}

sendApi()
var timeoutID = setInterval(()=>sendApi(), 86400000);

