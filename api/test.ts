import { NowRequest, NowResponse } from '@now/node';

export default (request: NowRequest, response: NowResponse) =>
{
  response.send('Hello Zeit');
}
