var eagle = require("../models/eagle");
// List of all eagle
// List of all eagles
exports.eagle_list = async function(req, res) {
try{
theeagles = await eagle.find();
console.log("theeagles",theeagles);
res.send(theeagles);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific eagle.
exports.eagle_detail = async function(req, res) 
{
    console.log("detail" + req.params.id)
    try 
    {
      result = await eagle.findById( req.params.id)
      res.send(result)
    } 
    catch (error)
    {
      res.status(500)
      res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
    

exports.eagle_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await eagle.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle eagle update form on PUT.
exports.eagle_update_put = async function(req, res) 
{
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try 
    {
       let toUpdate = await eagle.findById( req.params.id)
    // Do updates of properties
      if(req.body.NAME) toUpdate.NAME = req.body.NAME;
      if(req.body.AGE) toUpdate.AGE = req.body.AGE;
      if(req.body.COLOR) toUpdate.COLOR = req.body.COLOR;
      let result = await toUpdate.save();
      console.log("Sucess " + result)
      res.send(result)
    } 
    catch (err) 
    {
      res.status(500)
      res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
}

// VIEWS
// Handle a show all view
exports.eagle_view_all_Page = async function(req, res) {
    try{
    theeagles = await eagle.find();
    res.render('eagle', { title: 'eagle Search results', results: theeagles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
/*exports.eagle_list = async function(req, res) {
        try{
        theeagles = await eagle.find();
        res.render('eagle', { title: 'eagle Search Results', results: theeagles });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };*/


        // Handle eagle create on POST.
exports.eagle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new eagle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"eagle_type":"goat", "cost":12, "size":"large"}
    document.NAME = req.body.NAME;
    document.AGE = req.body.AGE;
    document.COLOR = req.body.COLOR;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };



    //
    // Handle a show one view with id specified by query
// Handle a show one view with id specified by query
exports.eagle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);
    try {
      const result = await eagle.findById(req.query.id);
      res.render('eagledetail', { title: 'eagle Detail', toShow: result });
    } catch (err) {
      res.status(500).send(`{'error': '${err}'}`);
    }
  };




  // Handle building the view for creating a eagle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.eagle_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('eaglecreate', { title: 'eagle Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a eagle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.eagle_create_Page = function(req, res) {
console.log("create view")
try{
res.render('eaglecreate', { title: 'eagle Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for updating a eagle.
// query provides the id
exports.eagle_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await eagle.findById(req.query.id)
    res.render('eagleupdate', { title: 'eagle Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


   // Handle a delete one view with id from query
exports.eagle_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await eagle.findById(req.query.id)
res.render('eagledelete', { title: 'eagle Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
}

    
  