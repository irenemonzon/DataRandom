export default function Getuser({ keyword = 10 } = {}) {
  const apiURL = `https://randomuser.me/api/?results=${keyword}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const { results } = data;
      const users = results.map(element => {
        const { medium } = element.picture;
        const { gender, email, phone, cell } = element;
        const { title, first, last } = element.name;
        const { uuid } = element.login;
        const { number, name } = element.location.street;
        const { age } = element.dob;

        return {
          age,
          number,
          name,
          phone,
          cell,
          medium,
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
