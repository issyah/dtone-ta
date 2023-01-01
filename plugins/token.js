
export default function({env:{apiKey,apiSecret}}, inject){
  const token = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  inject('basicAuthToken', token);
}