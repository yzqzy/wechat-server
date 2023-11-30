# WeChat API Service

Minimalist API built using koa.

## Prepare

We need the specific wechat version and dll to make windows hook work.

* Download assets from the [release](https://github.com/iuiaoin/wechat-gptbot/releases/tag/v1.0.0)
* Install WeChatSetup-3.2.1.121.exe and login
* Run the wechat-dll-injectorV1.0.3.exe
* Select 3.2.1.121-LTS.dll and click inject dll, you will see "Successfully injected: 3.2.1.121-LTS.dll"

## Run command

### development

```bash
npm run dev
```

### production

```bash
npm run start
```

## API

### get contact list

/api/getcontactlist

### get personal info

/api/get_personal_info

### get member nick

/api/getmembernick

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| roomid         | string | no       | chatroom id |

### get personal detail

/api/get_personal_detail

| parameter name | type   | required | remark |
| -------------- | ------ | -------- | ------ |
| wxid           | string | yes      | wx id  |

### send msg

/api/sendmsg

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | text content |

### send pic

/api/sendpic

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | remote url |

## Refer 

* [wechat-windows-versions](https://github.com/tom-snow/wechat-windows-versions/releases)：WeChatSetup.
* [wechat-service](https://github.com/ChisBread/wechat-service)：Let your WeChat run as a service.
* [wechat-gptbot](https://github.com/iuiaoin/wechat-gptbot)：A wechat robot based on ChatGPT with no risk, very stable! 

