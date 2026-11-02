const concerts = [

{
date:"19 Nov 2026",
city:"Kaohsiung City, Taiwan",
venue:"Kaohsiung National Stadium",
eventTime:"7:00 PM (CST)",
datetime:"2026-11-19T19:00:00+08:00"
},

{
date:"21 Nov 2026",
city:"Kaohsiung City, Taiwan",
venue:"Kaohsiung National Stadium",
eventTime:"7:00 PM (CST)",
datetime:"2026-11-21T19:00:00+08:00"
},

{
date:"22 Nov 2026",
city:"Kaohsiung City, Taiwan",
venue:"Kaohsiung National Stadium",
eventTime:"7:00 PM (CST)",
datetime:"2026-11-22T19:00:00+08:00"
},

{
date:"3 Dec 2026",
city:"Bangkok, Thailand",
venue:"Rajamangala National Stadium",
eventTime:"7:00 PM (IST)",
datetime:"2026-12-03T19:00:00+07:00"
},

{
date:"5 Dec 2026",
city:"Bangkok, Thailand",
venue:"Rajamangala National Stadium",
eventTime:"7:00 PM (IST)",
datetime:"2026-12-05T19:00:00+07:00"
},

{
date:"6 Dec 2026",
city:"Bangkok, Thailand",
venue:"Rajamangala National Stadium",
eventTime:"7:00 PM (IST)",
datetime:"2026-12-06T19:00:00+07:00"
},

{
date:"12 Dec 2026",
city:"Kuala Lumpur, Malaysia",
venue:"TM Stadium Nasional",
eventTime:"7:30 PM (MYT)",
datetime:"2026-12-12T19:30:00+08:00"
},

{
date:"13 Dec 2026",
city:"Kuala Lumpur, Malaysia",
venue:"TM Stadium Nasional",
eventTime:"7:30 PM (MYT)",
datetime:"2026-12-13T19:30:00+08:00"
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
