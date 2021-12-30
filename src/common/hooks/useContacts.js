

const dataContacts = {
  phones: [
    {
      id: 1,
      tel: "0 800 20 97 73",
    },
    {
      id: 2,
      tel: "044 232 97 73",
    },
    {
      id: 3,
      tel: "093 170 07 70",
    },
  ],
  emails: [
    {
      id: 1,
      email: "customercare@pampik.com",
    },
  ],
};

export const useContacts = () => ({
  phones: dataContacts.phones,
  emails: dataContacts.emails,
});
