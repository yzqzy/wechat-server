import { Router } from 'express';
import { WeChatController } from '@controllers/wechat.controller';
import { Routes } from '@interfaces/routes.interface';

export class WeChatRoute implements Routes {
  public path = '/wxbot';
  public router = Router();
  public wechat = new WeChatController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/checklogin`, this.wechat.checklogin);
    this.router.get(`${this.path}/userinfo`, this.wechat.userinfo);
    this.router.get(`${this.path}/contacts`, this.wechat.contacts);
    this.router.post(`${this.path}/sendmsg`, this.wechat.contacts);
    this.router.post(`${this.path}/sendpic`, this.wechat.sendpic);
  }
}
