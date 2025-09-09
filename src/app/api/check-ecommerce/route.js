import { showEcommerce } from '../../../lib/flags';

export async function GET() {
  const enabled = await showEcommerce();
  return Response.json({ enabled });
}