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

export const selectAllFound = `
select found.nameonitem as name, subcategory, found.description, found.foundid, match.matchid, match.new
from found
join subcategory on subcatid=subcategoryid
full outer join match on found.foundid = match.foundid
full outer join lost on lost.lostid = match.lostid
where found.statusid = $1`;

export const selectLostDetails = `
select lost.lostid, name, email, phone, description, brand, "date", "line", color, subcategory, category, status,
match.matchid, match.foundid
from lost
join "line" on lost.lineid = line.lineid
join color on lost.colorid = color.colorid
join category on lost.catid = category.categoryid
join subcategory on lost.subcatid = subcategory.subcategoryid
join status on lost.statusid = status.statusid
left outer join match on lost.lostid=match.lostid
where lost.lostid = $1`;

export const selectFoundDetails = `
select found.foundid, nameonitem as name, phonenumberonitem as phone, emailonitem as email, description, brand,
"date", "line", color, category, subcategory, status, match.matchid, match.lostid
from found
join "line" on found.lineid = line.lineid
join color on found.colorid = color.colorid
join category on found.catid = category.categoryid
join subcategory on found.subcatid = subcategory.subcategoryid
join status on found.statusid = status.statusid
left outer join match on found.foundid=match.foundid
where found.foundid = $1`;

export const insertConfirmedMatch = `
insert into confirmedmatch(lostid, foundid)
values($1, $2)
returning *`;

export const deleteConfirmedMatch = `
delete from confirmedmatch
where lostid=$1 and foundid=$2`;

export const insertNewFound = `
insert into found (nameonitem, emailonitem, phonenumberonitem, description, brand, date,
lineid, colorid, catid, subcatid, statusid, orgid, findername)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11, $12, $13)
returning *`;
