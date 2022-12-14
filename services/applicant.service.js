const {Applicant} = require("../DB");

module.exports={
    createApplicant:(applicant)=>{
        return Applicant.create(applicant);
    },
    updateApplicant:(params, dataByUpdate, options={new:true})=>{
        return Applicant.findByIdAndUpdate(params, dataByUpdate, options)
    },
    deleteApplicant:(params)=>{
        return Applicant.deleteOne(params);
    },
    findOne:(params)=>{
        return Applicant.findOne(params);
    },
    findAll:(params={})=>{
        return Applicant.find(params);
    },
}