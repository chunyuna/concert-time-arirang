const concerts = [
{
date:"23 Aug 2026",
city:"Toronto, Ontario, Canada",
venue:"Rogers Stadium",
eventTime:"8:00 PM (ET)",
datetime:"2026-08-23T20:00:00-04:00"
},

{
date:"27 Aug 2026",
city:"Chicago, Illinois USA",
venue:"Soldier Field",
eventTime:"8:00 PM (ET)",
datetime:"2026-08-27T20:00:00-04:00"
},

{
date:"28 Aug 2026",
city:"Chicago, Illinois USA",
venue:"Soldier Field",
eventTime:"8:00 PM (ET)",
datetime:"2026-08-28T20:00:00-04:00"
},

{
date:"1 Sept 2026",
city:"Los Angeles, California USA",
venue:"SoFi Stadium",
eventTime:"8:00 PM (PT)",
datetime:"2026-09-01T20:00:00-07:00"
},

{
date:"2 Sept 2026",
city:"Los Angeles, California USA",
venue:"SoFi Stadium",
eventTime:"8:00 PM (PT)",
datetime:"2026-09-02T20:00:00-07:00"
},

{
date:"5 Sept 2026",
city:"Los Angeles, California USA",
venue:"SoFi Stadium",
eventTime:"8:00 PM (PT)",
datetime:"2026-09-05T20:00:00-07:00"
},

{
date:"6 Sept 2026",
city:"Los Angeles, California USA",
venue:"SoFi Stadium",
eventTime:"8:00 PM (PT)",
datetime:"2026-09-06T20:00:00-07:00"
},

{
date:"18 Sept 2026",
city:"Las Vegas",
venue:"T-Mobile Arena, iheart radio festival",
eventTime:"7:00 PM (PT)",
datetime:"2026-09-18T19:00:00-07:00"
},

{
date:"2 Oct 2026",
city:"Bogota, Columbia",
venue:"Nemesio Camacho El Campín Stadium",
eventTime:"8:00 PM (COT)",
datetime:"2026-10-02T20:00:00-05:00"
},

{
date:"3 Oct 2026",
city:"Bogota, Columbia",
venue:"Nemesio Camacho El Campín Stadium",
eventTime:"8:00 PM (COT)",
datetime:"2026-10-03T20:00:00-05:00"
}  
];

function local(dt){
return new Date(dt).toLocaleString(undefined,{
weekday:"short",
day:"2-digit",
month:"short",
year:"numeric",
hour:"2-digit",
minute:"2-digit",
hour12:true
});
}

const tbody=document.getElementById("concertBody");
const cards=document.getElementById("cardContainer");

concerts.forEach(c=>{

// TABLE
tbody.innerHTML += `
<tr>
<td>${c.date}</td>
<td>${c.city}</td>
<td>${c.venue}</td>
<td>${c.eventTime}</td>
<td>${local(c.datetime)}</td>
</tr>`;

// CARDS
cards.innerHTML += `
<div class="card">
<h3>${c.city}</h3>
<p><b>Date:</b> ${c.date}</p>
<p><b>Venue:</b> ${c.venue}</p>
<p><b>Event:</b> ${c.eventTime}</p>
<p><b>Your Local Time:</b> ${local(c.datetime)}</p>
</div>
`;

});
