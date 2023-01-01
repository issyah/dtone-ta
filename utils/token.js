export const getToken = () => {
  const token = Buffer.from(`${process.env.API_KEY}:${process.env.API_SECRET}`).toString('base64');
  return 'testing';
}