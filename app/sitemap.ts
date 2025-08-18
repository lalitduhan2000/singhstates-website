export default function sitemap() {
  const base = "https://singhstates.com";
  return [
    { url: `${base}/`,  lastModified: new Date() },
    { url: `${base}/buy`, lastModified: new Date() },
    { url: `${base}/rent`, lastModified: new Date() },
    { url: `${base}/agents`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
