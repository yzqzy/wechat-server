# WeChat Server

English | [中文文档](README.md)

Minimalist API built using koa.

> The content published in this warehouse is only for learning and research, please do not use it for illegal or commercial purposes! If any legal disputes arise as a result, the author has nothing to do with it! There are no backdoors or Trojans, and no information is obtained or stored. Please study and study under national laws, regulations and Tencent's relevant principles! We are not responsible for any downloads or any actions of users. Please delete them within 24 hours after downloading!

## Prepare

We need the specific wechat version and dll to make windows hook work.

* Download assets from the [release](https://github.com/our-ai-projects/wechat-service/releases/tag/v1.0.0)
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

### 1. get contact list

/api/getcontactlist

### 2. get personal info

/api/get_personal_info

### 3. get member nick

/api/getmembernick

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| roomid         | string | no       | chatroom id |

### 4. get personal detail

/api/get_personal_detail

| parameter name | type   | required | remark |
| -------------- | ------ | -------- | ------ |
| wxid           | string | yes      | wx id  |

### 5. send msg

/api/sendmsg

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | text content |

### 6. send pic

/api/sendpic

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | remote url |

## Refer 

* [wechat-windows-versions](https://github.com/tom-snow/wechat-windows-versions/releases)：WeChatSetup.
* [wechat-gptbot](https://github.com/iuiaoin/wechat-gptbot)：A wechat robot based on ChatGPT with no risk, very stable! 
