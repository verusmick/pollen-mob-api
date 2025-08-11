import { VercelRequest, VercelResponse } from '@vercel/node';
import { sendFeedback } from '../src/controllers/feedback.controller';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return sendFeedback(req, res);
  }
  res.status(405).send('Method Not Allowed');
}