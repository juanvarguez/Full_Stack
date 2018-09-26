series = [
	{
		name:"Dexter",
		rating:3,
		seen:true
	},
	{
		name:"House of Cards",
		rating:4,
		seen:false
	},
	{
		name:"Vikings",
		rating:3,
		seen:false
	},
	{
		name:"Avatar",
		rating:4,
		seen:true
	},
	{
		name:"Stranger Things",
		rating:5,
		seen:true
	},
];

series.forEach((serie) => {
	console.log((serie.seen?"Viste \"":"No viste \"") + serie.name + "\" - " + serie.rating + " estrellas");
});