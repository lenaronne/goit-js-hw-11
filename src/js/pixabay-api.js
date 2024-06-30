export const params = new URLSearchParams({
  key: '44564788-7b6b025cc245aa7d761eb8e00',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export function getImages(url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}
