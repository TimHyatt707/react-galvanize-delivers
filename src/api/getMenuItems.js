export default function getMenuItems() {
  // http://localhost:3000/data/menu-items.json
  // /data/menu-items.json
  return fetch('/data/menu-items.json')
    .then(response => {
      return response.json();
    })
    .catch(error => {})
    .then(collection => {
      let data = collection;
      return data;
    });
}
