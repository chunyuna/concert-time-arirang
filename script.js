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
