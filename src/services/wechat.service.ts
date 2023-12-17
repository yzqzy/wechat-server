import axios from 'axios';
import { Service } from 'typedi';
import { Response, Check, User, Contact } from '@interfaces/wechat.interface';
import { WECHAT_HTTP_HOST } from '@/config/index';

@Service()
export class WeChatService {
  public async checklogin(): Promise<Check> {
    const response = await axios.get<Response<Check>>(`${WECHAT_HTTP_HOST}/checklogin`);
    return response.data.data;
  }

  public async userinfo(): Promise<User> {
    const response = await axios.get<Response<User>>(`${WECHAT_HTTP_HOST}/userinfo`);
    return response.data.data;
  }

  public async contacts(): Promise<{ contacts: Contact; total: number }> {
    const response = await axios.get<Response<{ contacts: Contact; total: number }>>(
      `${WECHAT_HTTP_HOST}/contacts`,
    );
    return response.data.data;
  }

  public async sendmsg(wxid: string, content: string): Promise<any> {
    const response = await axios.post<Response<any>>(`${WECHAT_HTTP_HOST}/sendtxtmsg`, {
      wxid,
      content,
    });
    return response.data.data;
  }

  public async sendpic(wxid: string, content: string) {
    const response = await axios.post<Response<any>>(`${WECHAT_HTTP_HOST}/sendimgmsg`, {
      wxid,
      path: content,
    });
    return response.data.data;
  }
}
