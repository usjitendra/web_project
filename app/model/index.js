module.exports=function(connect){
    
    const exportedModule={};
    exportedModule.model=require('./adminmodel')(connect); 

    return exportedModule;
}