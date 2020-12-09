export default function(doc) {
  // Pretty URLs for known types
  if (doc.type === 'posts') return "/posts/" + doc.uid
  if (doc.type === 'events') return "/events/" + doc.id
  if (doc.type === 'home') return "/"
  if (doc.type === 'pages') return "/" + doc.uid
  if (doc.type === 'category') return "/posts/categories/" + doc.uid
  // Fallback for other types, in case new custom types get created
  return "/" + doc.id;
};

