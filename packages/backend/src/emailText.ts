export const confirmationEmail = (
  name: string,
  date: string,
  line: string,
  color: string,
  brand: string,
  description: string
): string => {
  return `Hei ${name}.
  
Så synd å høre at du har mistet noe på bussen, vi skal sjekke etter for deg i det vi får inn av gjenglemte ting. Du vil høre fra oss om vi har noe som likner på det du leter etter. Etter hver rute pleier bussjåføren å gå igjennom bussen for å sjekke om det du har mistet ligger igjen. Når han er ferdig lever han det til sentralen. Det som har blitt funnet av bussjåførene blir ikke kjørt ned til oss i AtB før dagen etter.

Hilsen oss i AtB hittegods

Det du mistet:
Dag: ${date}
Linje: ${line}
Farge: ${color}
Merke: ${brand}
Beskrivelse: ${description}`;
};

export const foundEmail = (name: string): string => {
  return `Hei ${name}
  
Vi har funnet noe som likner på det du leter etter, men det er bare du som kan bekrefte at det er ditt. Så kom gjerne innom kundeservice for å hente det ut. 
Ta med legitimasjon.
Hilsen
Oss i AtB hittegods`;
};

export const followupEmailDay1 = `Hei igjen!
Vi har gått igjennom det vi har inne på lager og vi har ikke fått inn noe som matcher din henvendelse, men vi skal fortsette å lete!

Hilsen
Oss i AtB Hittegods
`;

export const followupEmailDay3 = `Hei igjen!
Det har enda ikke kommet inn noe til oss, men vi skal fortsette å lete!

Hilsen
Oss i AtB Hittegods`;

export const followupEmailDay7 = `Hei igjen!

Vi har dessverre ikke fått inn noe som likner det du har mistet. Du vil ikke få noen flere oppdateringer fra oss med mindre det plutselig dukker opp noe. Vi håper du finner det du leter etter :* 

Hilsen
Oss i AtB Hittegods`;
