import pool from "../db/pool";

class user {
  async signUp(newUser, callback) {
    await pool.query(
      "INSERT INTO users(first_name,last_name,email,master_password) VALUES(?,?,?,?)",
      [newUser.firstName, newUser.lastName, newUser.email, newUser.password],
      callback
    );
  }
}

export default user;
