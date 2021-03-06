import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({ trip, senderName, from_email }) {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <Card className={classes.root} id={senderName?"body":"body1"} style={{ borderRadius: "25px" }}>
{
  senderName?
  <div className="dollers" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <Typography >
              <div className="facility" >
                <div>Invited By:</div>
                <div>
                  {senderName}
                </div>
                <div>Email:</div>
                <div>{from_email}</div>
              </div>

            </Typography>
          </div>
          :
          <div> </div>
}

      <div className="first_img" style={{ backgroundImage: `url(${trip.image[0][0]})` }}>
        <div>
        </div>
      </div>
      {/* <div >
          <img className="first_img"  src={trip.image[0][0]}/>
          </div> */}
      <div className="center">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className="first_Center">
              <Typography component="h5" variant="h5">
                {trip.name}
                {/* Wadi Al-Qilt */}

              </Typography>
            </div>
            <div className="center-second">
              <Typography variant="subtitle1" color="textSecondary">
                <div className="citysize">

                  {/* tripType: One Day Trip */}
                    tripType:{trip.tripType}
                </div>
              </Typography>
            </div>
          </CardContent>
          <div className="dollers" >
            <Typography >
              <div className="facility" >
                <div>price : {trip.price}</div>
                <div>
                  date: {trip.date.split("T")[0]}
                </div>
                <div>deadLine:{trip.deadLine.split("T")[0]}</div>
              </div>

            </Typography>
          </div>
        </div>
      </div>

    </Card>
  );
}

