var Database = require("./Database");

class Category_six {
  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.form = "";
    this.db = new Database();
    this.query = "";
  }

  save = () => {
    this.query = "INSERT INTO category_six(name, description, form) ";
    this.query +=
      "VALUES('" +
      this.name +
      "', '" +
      this.description +
      "', '" +
      this.form +
      "')";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };

  update = () => {
    this.query =
      "UPDATE category_six SET name = ' " +
      this.name +
      "', description = '" +
      this.description +
      "', form =  '" +
      this.form +
      "' WHERE id =  " +
      this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };

  getList = () => {
    this.query = "SELECT * FROM category_six ORDER BY id";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };

  getListbyid = () => {
    this.query = "SELECT * FROM category_six WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM category_six WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };
}

module.exports = Category_six;
