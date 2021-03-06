export const insertNewLost = `
insert into lost (name, email, phone, description, brand, date,
lineid, colorid, catid, subcatid, statusid)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11)
returning *`;

export const selectAllLost = `
select lost.name, lost.email, lost.phone, lost.description, lost.brand, lost."date",
line, color, category, subcategory,
status, lost.lostid, match.matchid, match.new, match.foundid
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
status, lost.lostid, match.matchid, match.new, match.foundid
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
lineid, colorid, catid, subcatid, statusid, findername)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
$11, $12)
returning foundid`;

export const updateFound = `
update found set nameonitem=$1, emailonitem=$2,
phonenumberonitem=$3, description=$4, brand=$5,
lineid=$6, colorid=$7, catid=$8, subcatid=$9, statusid=$10
where foundid=$11`;

export const updateLostStatusById = `
update lost set statusid=$1
where lostid=$2`;

export const selectPossibleMatches = `
select matchid as id, lostid, foundid, score, new from match `;

export const deletePossibleMatch = `
delete from match
where matchid = $1
returning matchid as id, lostid, foundid, score, new`;

export const updatePossibleMatchNewById = `
update match set new=$1
where matchid=$2
returning matchid as id, lostid, foundid, score, new`;
