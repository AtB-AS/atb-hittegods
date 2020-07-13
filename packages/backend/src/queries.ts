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
select lost.name, lost.email, lost.phone, lost.description, lost.brand, lost."date",
line, color, category, subcategory,
status, lost.refnr, lost.lostid, match.matchid, match.new, match.foundid
from lost
join subcategory on subcatid=subcategoryid
join category on catid=categoryid
join color on lost.colorid = color.colorid
join line on lost.lineid = line.lineid
join status on lost.statusid = status.statusid
full outer join match on lost.lostid = match.lostid
full outer join found on found.foundid = match.foundid
where lost.statusid = $1`;

export const selectLostById = `
select lost.name, lost.email, lost.phone, lost.description, lost.brand, lost."date",
line, color, category, subcategory,
status, lost.refnr, lost.lostid, match.matchid, match.new, match.foundid
from lost
join subcategory on subcatid=subcategoryid
join category on catid=categoryid
join color on lost.colorid = color.colorid
join line on lost.lineid = line.lineid
join status on lost.statusid = status.statusid
full outer join match on lost.lostid = match.lostid
full outer join found on found.foundid = match.foundid
where lost.lostid = $1`;

export const selectAllFound = `
select found.nameonitem as name, found.emailonitem as email, found.phonenumberonitem as phone,
found.description, found.brand, found."date",
line, color, category, subcategory,
status, found.foundid
from found
join subcategory on subcatid=subcategoryid
join category on catid=categoryid
join color on found.colorid = color.colorid
join line on found.lineid = line.lineid
join status on found.statusid = status.statusid
where found.statusid = $1`;

export const selectFoundById = `
select found.nameonitem as name, found.emailonitem as email, found.phonenumberonitem as phone,
found.description, found.brand, found."date",
line, color, category, subcategory,
status, found.foundid
from found
join subcategory on subcatid=subcategoryid
join category on catid=categoryid
join color on found.colorid = color.colorid
join line on found.lineid = line.lineid
join status on found.statusid = status.statusid
where found.foundid = $1`;

export const insertConfirmedMatch = `
insert into confirmedmatch(lostid, foundid)
values($1, $2)
returning confirmedmatchid as id, lostid, foundid`;

export const deleteConfirmedMatch = `
delete from confirmedmatch
where confirmedmatchid = $1
returning confirmedmatchid as id, lostid, foundid`;

export const selectConfirmedMatches = `
select confirmedmatchid as id, lostid, foundid from confirmedmatch`;

export const insertNewFound = `
insert into found (nameonitem, emailonitem, phonenumberonitem, description, brand, date,
lineid, colorid, catid, subcatid, statusid, orgid, findername)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11, $12, $13)
returning foundid`;

export const updateFound = `
update found set nameonitem=$1, emailonitem=$2,
phonenumberonitem=$3, description=$4, brand=$5,
lineid=$6, colorid=$7, catid=$8, subcatid=$9
where foundid=$10`;
