let url = 'https://reqres.in/api/users?page=1';
fetch(url)
    .then((response) => console.log(response.json().then(body => { console.log(body); }).catch((err3) => console.log(err3))))
    .catch((err) => { console.log(err); })
    .finally(() => { console.log('ok'); });