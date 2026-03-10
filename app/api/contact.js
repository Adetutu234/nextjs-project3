export default sync function handler(req,res){
    if(req.method === "Post"){
        const {name, email, message} = req.body;
        console.log("New Messages:", name, email, message);
        res.status(200).json({
            message: "Message Recieved!"
        })
    }else{
        res.status(405).json({message: 'Method not allowed'})
    }
}