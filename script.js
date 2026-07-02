const concerts = [
{
date:"1 Jul 2026",
city:"Brussels, Belgium",
venue:"King Baudouin Stadium",
eventTime:"8:00 PM (CEST)",
datetime:"2026-07-01T20:00:00+02:00"
},

{
date:"2 Jul 2026",
city:"Brussels, Belgium",
venue:"King Baudouin Stadium",
eventTime:"8:00 PM (CEST)",
datetime:"2026-07-02T20:00:00+02:00"
},

{
date:"6 Jul 2026",
city:"London, United Kingdom",
venue:"Tottenham Hotspur Stadium",
eventTime:"7:00 PM (BST)",
datetime:"2026-07-06T19:00:00+01:00"
},

{
date:"7 Jul 2026",
city:"London, United Kingdom",
venue:"Tottenham Hotspur Stadium",
eventTime:"7:00 PM (BST)",
datetime:"2026-07-07T19:00:00+01:00"
},

{
date:"17 Jul 2026",
city:"Paris, France",
venue:"Stade De France",
eventTime:"8:00 PM (BST)",
datetime:"2026-07-17T20:00:00+02:00"
},

{
date:"18 Jul 2026",
city:"Paris, France",
venue:"Stade De France",
eventTime:"8:00 PM (BST)",
datetime:"2026-07-18T20:00:00+02:00"
},

{
date:"1 Aug 2026",
city:"East Rutherford, New Jersey USA",
venue:"Metlife Stadium",
eventTime:"8:00 PM (ET)",
datetime:"2026-08-01T20:00:00-04:00"
},

{
date:"2 Aug 2026",
city:"East Rutherford, New Jersey USA",
venue:"Metlife Stadium",
eventTime:"8:00 PM (ET)",
datetime:"2026-08-02T20:00:00-04:00"
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
