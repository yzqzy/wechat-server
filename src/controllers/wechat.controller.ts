import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Params } from '@interfaces/wechat.interface';
import { WeChatService } from '@services/wechat.service';

export class WeChatController {
  private wechat = Container.get(WeChatService);

  public checklogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.wechat.checklogin();
      res.status(200).json({ data, msg: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public userinfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.wechat.userinfo();
      res.status(200).json({ data, msg: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public contacts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.wechat.contacts();
      res.status(200).json({ data, msg: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public sendmsg = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { wxid, content } = req.body as Params;
      await this.wechat.sendmsg(wxid, content);
      res.status(200).json({ data: null, msg: 'success' });
    } catch (error) {
      next(error);
    }
  };

  public sendpic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { wxid, content } = req.body as Params;
      await this.wechat.sendpic(wxid, content);
      res.status(200).json({ data: null, msg: 'success' });
    } catch (error) {
      next(error);
    }
  };
}
