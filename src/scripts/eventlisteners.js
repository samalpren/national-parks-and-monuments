const handleDelete = () => {
  // console.log("delete button clicked", event.target.id.split("--")[1])
  let parkId = event.target.id.split("--")[1];

  deletePark(parkId)
  .then(() => listNationalParks ())
};

const monDelete = () => {

  let monId = event.target.id.split("--")[1];

  deleteMonument(monId)
  .then(() => listNationalMonuments ())

  console.log(monId);

};
