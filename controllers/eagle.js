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
exports.eagle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: eagle detail: ' + req.params.id);
};
// Handle eagle create on POST.
exports.eagle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: eagle create POST');
};
// Handle eagle delete form on DELETE.
exports.eagle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: eagle delete DELETE ' + req.params.id);
};
// Handle eagle update form on PUT.
exports.eagle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: eagle update PUT' + req.params.id);
};

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


        // Handle Costume create on POST.
exports.eagle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new eagle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
    