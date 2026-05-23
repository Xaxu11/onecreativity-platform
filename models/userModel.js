const db = require("../config/db");

const createUser = async (fullName, email, phone, role) => {
  const query = `
    INSERT INTO "User"
    ("fullName", "email", "phone", "role")
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const values = [fullName, email, phone, role];

  const result = await db.query(query, values);

  return result.rows[0];
};

module.exports = { createUser };