const Tour = require('./../model/tourModel')


exports.getAllTours = async (req, res) => {
  try{
     
    const TourData = await Tour.find() ;
  res
    .status(200)
    .json({
      status:'success',
      results :TourData.length,
      data:{
        TourData 
      }
    });
  }
  catch(err){
    console.log(err);
  }
  
};

exports.getTour = async (req, res) => {
  try{
      const tourdata = await Tour.findById(req.params.id) ;
      res
        .status(200)
        .json({
          status:'success',
          data:{
            tour:tourdata
          }
        });
  }
  catch(err){
    console.log(err);
  }
};

exports.createTour = async (req, res) => {
  try{
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status:'success',
      data:{
        tour:newTour
      }
    });
  }
  catch(err){
    console.log(err);
  }
};

exports.updateTour = async (req, res) => {
  try{
    const tourdata = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new : true,
      runValidators:true
    }) ;
    res
      .status(200)
      .json({
        status:'success',
        data:{
          tour:tourdata
        }
      });
  } 
  catch(err){
    console.log(err);
  }
};

exports.deleteTour =async  (req, res) => {
  try{
    await Tour.findByIdAndDelete(req.params.id,req.body);
    res
      .status(204)
      .json({
      status:'success',
      data:null
    });
  } 
  catch(err){
    console.log(err);
  }
};
