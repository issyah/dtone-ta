export default function({$config:{apiKey,apiSecret}}, inject){
  const token = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  inject('basicAuthToken', token)
}