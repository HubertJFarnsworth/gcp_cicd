exports.helloGreeting = (req, res) => {

  console.log(req.body);

  if (req.body.name === undefined) {
    // This is an error case, as “name” is required.
    res.status(400).send("No name defined!");
  } else {
    console.log(req.body.name);
    res.status(200).send("Hello " + req.body.name);
  }
};

