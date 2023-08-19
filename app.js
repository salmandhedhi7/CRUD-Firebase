let rollV, nameV, genderV, addressV;

const readFom = () => {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
};

document.getElementById("insert").addEventListener("click", () => {
  readFom();

  firebase
    .database()
    .ref(`student/${rollV}`)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });

  alert("Data Inserted");
  clearFields();
});

document.getElementById("read").addEventListener("click", () => {
  readFom();

  firebase
    .database()
    .ref(`student/${rollV}`)
    .on("value", (snap) => {
      const data = snap.val();
      document.getElementById("roll").value = data.rollNo;
      document.getElementById("name").value = data.name;
      document.getElementById("gender").value = data.gender;
      document.getElementById("address").value = data.address;
    });
});

document.getElementById("update").addEventListener("click", () => {
  readFom();

  firebase
    .database()
    .ref(`student/${rollV}`)
    .update({
      name: nameV,
      gender: genderV,
      address: addressV,
    });

  alert("Data Update");
  clearFields();
});

document.getElementById("delete").addEventListener("click", () => {
  readFom();

  firebase
    .database()
    .ref(`student/${rollV}`)
    .remove();

  alert("Data Deleted");
  clearFields();
});

const clearFields = () => {
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};