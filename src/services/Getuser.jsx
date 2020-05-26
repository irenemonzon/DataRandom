export default function Getuser({ keyword = 10 } = {}) {
  const apiURL = `https://randomuser.me/api/?results=${keyword}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const { results } = data;
      const users = results.map(element => {
        const { large } = element.picture;
        const { email, gender } = element;
        const { title, first, last } = element.name;
        const { uuid } = element.login;
        return {
          large,
          email,
          gender,
          title,
          first,
          last,
          uuid
        };
      });

      return users;
    });
}
