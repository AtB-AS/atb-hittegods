import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, createStyles, Theme } from "@material-ui/core";
import BusImage from "./components/img/BusImage";
import PostmanImage from "./components/img/PostmanImage";
import StorageImage from "./components/img/StorageImage";
import LetterImage from "./components/img/LetterImage";
import moment from "moment";
import LineImage3 from "./components/img/LineImage3";
import LineImage2 from "./components/img/LineImage2";
import LineImage1 from "./components/img/LineImage1";

type Props = {
  name: string;
  email: string;
  lostDate: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    lead: {
      fontSize: "20px",
    },
    step: {
      position: "relative",
      marginBottom: "60px",
      "&:nth-child(2n) $stepContent": {
        gridTemplateAreas: '"desc image"',
        "& svg": {
          left: "20px",
        },
      },
    },
    stepContent: {
      alignItems: "center",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: '"image desc"',
      gridGap: "10px",
      "& svg": {
        gridArea: "image",
        transform: "scale(1.3)",
        position: "relative",
        left: "-40px",
        width: "100%",
      },
      "& p": {
        margin: 0,
        order: 0,
        gridArea: "desc",
      },
    },
    stepLine1: {
      display: "block",
      position: "absolute",
      left: "calc(1vw * 30)",
      bottom: "-80px",
    },
    stepLine2: {
      display: "block",
      position: "absolute",
      right: "calc(1vw * 25)",
    },
    stepLine3: {
      display: "block",
      position: "absolute",
      left: "calc(1vw * 35)",
      bottom: "-60px",
    },
  })
);

const MailStep = () => {
  const styles = useStyles();
  return (
    <div className={styles.step}>
      <div className={styles.stepContent}>
        <LetterImage />
        <p>Vi sender deg beskjed på e-post om vi finner noe.</p>
      </div>
    </div>
  );
};

const LostToday = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <BusImage />
          <p>
            Bussjåføren vil gå gjennom bussen på endestoppet for å se om noe er
            gjenglemt.
          </p>
        </div>
        <LineImage1 className={styles.stepLine1} />
      </div>
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <PostmanImage />
          <p>Alt som blir funner vil bli levert inn etter endt skift.</p>
        </div>
        <LineImage2 className={styles.stepLine2} />
      </div>
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <StorageImage />
          <p>Slik at vi har det på lager hos oss i AtB i morgen kl 12.</p>
        </div>
        <LineImage3 className={styles.stepLine3} />
      </div>
      <MailStep />
    </div>
  );
};

const LostYesterday = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.step} />
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <PostmanImage />
          <p>
            Bussjåføren leverte inn det som ble funnet i bussen i går kveld.
          </p>
        </div>
        <LineImage2 className={styles.stepLine2} />
      </div>
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <StorageImage />
          <p>Slik at vi har det på lager hos oss i AtB i dag kl 12.</p>
        </div>
        <LineImage3 className={styles.stepLine3} />
      </div>
      <MailStep />
    </div>
  );
};

const LostEarlier = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.step}>
        <div className={styles.stepContent}>
          <StorageImage />
          <p>Vi skal sjekke i det vi har fått inn.</p>
        </div>
        <LineImage2 className={styles.stepLine2} />
      </div>
      <MailStep />
    </div>
  );
};

function Confirmation(props: Props) {
  const styles = useStyles();

  const today = moment();
  const lostDate = moment(props.lostDate, "YYYY-MM-DD");
  const daysSinceItemWasLost = today.diff(lostDate, "days");

  return (
    <div>
      <Box mt={4} mb={6}>
        <h2 className="h4">Vi er på saken!</h2>
        <p className={styles.lead}>
          Du har nå gjort ditt, og vi skal ta over. Vi skal lete for deg, men
          det kan ta litt tid før vi får det inn.
        </p>
        <p>Du vil få en oppsumering sendt til {props.email}</p>
      </Box>
      {daysSinceItemWasLost === 0 && <LostToday />}
      {daysSinceItemWasLost === 1 && <LostYesterday />}
      {daysSinceItemWasLost > 1 && <LostEarlier />}
    </div>
  );
}

export default Confirmation;
