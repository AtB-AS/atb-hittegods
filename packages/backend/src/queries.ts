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
$11, $12, $13, $14, $15)`;
