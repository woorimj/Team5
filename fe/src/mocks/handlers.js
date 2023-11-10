import { HttpResponse, http } from 'msw';
// * test
export const handlers = [
  http.post('/review/', async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const body = formData.get('body');
    const shoppingmall = formData.get('shoppingmall');
    const star = formData.get('star');
    const image = formData.get('image');

    return HttpResponse.json({ title, body, shoppingmall, star });
  }),
  http.post('myPage/donationRegister', async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const title = formData.get('title');
    const comment = formData.get('comment');
    const goal = formData.get('goal');

    return HttpResponse.json({ name, title, comment, goal });
  }),
];
