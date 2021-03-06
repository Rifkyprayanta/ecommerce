import bcrypt from "bcryptjs";

const users = [
  {
    name: "John",
    email: "prayanta.rifky@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
