const concerts = [
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
},

{
date:"9 Oct 2026",
city:"Lima, Peru",
venue:"Estadio San Marcos",
eventTime:"8:00 PM (PET)",
datetime:"2026-10-09T20:00:00-05:00"
},

{
date:"10 Oct 2026",
city:"Lima, Peru",
venue:"Estadio San Marcos",
eventTime:"8:00 PM (PET)",
datetime:"2026-10-10T20:00:00-05:00"
},

{
date:"14 Oct 2026",
city:"Santiago, Chileo",
venue:"Estadio Nacional",
eventTime:"8:00 PM (CLST)",
datetime:"2026-10-14T20:00:00-03:00"
},

{
date:"16 Oct 2026",
city:"Santiago, Chileo",
venue:"Estadio Nacional",
eventTime:"8:00 PM (CLST)",
datetime:"2026-10-16T20:00:00-03:00"
},

{
date:"17 Oct 2026",
city:"Santiago, Chileo",
venue:"Estadio Nacional",
eventTime:"8:00 PM (CLST)",
datetime:"2026-10-17T20:00:00-03:00"
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
