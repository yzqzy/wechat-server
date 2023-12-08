# WeChat API Service

[English](README-en.md) | 中文文档

使用 koa 构建的极简 API。

> 本仓库发布内容仅供学习研究，请勿用于非法或商业用途！ 如因此引起任何法律纠纷，与作者无关！ 没有后门或木马，也不会获取或存储任何信息。 请按照国家法律法规及腾讯的相关原则学习研究！ 我们不对用户的任何下载或任何行为负责。 请下载后24小时内删除！

## 准备

我们需要特定的微信版本和dll才能使windows hook工作。

1. 从 [release](https://github.com/our-ai-projects/wechat-service/releases/tag/v1.0.0) 中下载相关文件
2. 安装 WeChatSetup 3.2.1.121 版本并且登录
3. 运行微信 dll 注入器
4. 选择 3.2.1.121-LTS.dll 并且 点击 `注入dll`, 如果成功的话你将会看到: "成功注入: 3.2.1.121-LTS.dll"

## 运行命令

### 开发环境

```bash
npm run dev
```

### 生产环境

```bash
npm run start
```

## API

### 1. 获取好友和群列表

/api/getcontactlist

### 2. 获取登陆用户信息

/api/get_personal_info

### 3. 获取用户昵称

/api/getmembernick

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| roomid         | string | no       | chatroom id |

### 4. 获取用户信息

/api/get_personal_detail

| parameter name | type   | required | remark |
| -------------- | ------ | -------- | ------ |
| wxid           | string | yes      | wx id  |

### 5. 发送消息

/api/sendmsg

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | text content |

### 6. 发送图片

/api/sendpic

| parameter name | type   | required | remark      |
| -------------- | ------ | -------- | ----------- |
| wxid           | string | yes      | wx id       |
| content         | string | yes    | remote url |

## 参考 

* [wechat-windows-versions](https://github.com/tom-snow/wechat-windows-versions/releases)：WeChatSetup.
* [wechat-gptbot](https://github.com/iuiaoin/wechat-gptbot)：A wechat robot based on ChatGPT with no risk, very stable! 
