const rootUrl = 'https://www.google.com/finance/info';

export default (code) => {
  var url = `${rootUrl}?q=${code}`;

  return fetch(url)
    .then(response => {
      return response.text();
    })
    .then(text => {
      console.log(text);
      let json = JSON.parse(text.replace('//', ''))[0];
      return {
        stockIndex: json.l,
        stockChangeRaw: json.c,
        stockChangePercent: json.cp
      }
    });
}