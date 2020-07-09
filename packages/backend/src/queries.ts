export const selectLostByRefnum = `
select name, email, phone, description, brand, date, time, "from", "to",
refnr, status, category, subcategory, line, color
from lost
join status on (status.statusid = lost.statusid)
join line on (line.lineid = lost.lineid)
join category on (category.categoryid = lost.catid)
join subcategory on (subcategory.subcategoryid = lost.subcatid)
join color on (color.colorid = lost.colorid)
where refnr=$1`;

export const insertNewLost = `
insert into lost (name, email, phone, description, brand, date, time, "from", "to",
lineid, colorid, catid, subcatid, statusid, refnr)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11, $12, $13, $14, $15)
returning *`;

export const updateLost = `
update lost
set description=$1, brand=$2, date=$3, "from"=$4, "to"=$5, lineid=$6,
colorid=$7, catid=$8, subcatid=$9
where refnr=$10
`;

export const updateStatusUserDelete = `
update lost set statusid = $1 where refnr = $2`;

export const selectAllLost = `
select lost.name, subcategory, lost.description, lost.lostid, match.matchid, match.new
from lost
join subcategory on subcatid=subcategoryid
full outer join match on lost.lostid = match.lostid
full outer join found on found.foundid = match.foundid
where lost.statusid = $1`;
