var task1={
id:0,
title:"Some Task",
description:"detailed description of our task",
creationdate:new Date(),
enddate: new Date("2018-01-20"),
status:false
};

function createTask(id,title,description,enddate)
{
	this.id=id;
	this.title=title;
	this.description=description;
	this.creationdate= new Date();
	this.enddate=enddate;
	this.status=false;
}
