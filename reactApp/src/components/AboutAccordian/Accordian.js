import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
  

const AboutAccordion = () => {

const font =  "'Sora', sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    textTransform: "none",
    fontSize: 16,
    }
  });
    
const Accordion = withStyles({
  root: {
    color:'#000',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is PortFoliGo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            PortFoliGo is the web application I, Owen Lenihan, have created to serve as my fourth year project.
            <br/>
            <br/>
            The goal of this project was to create a proof of concept web app which could serve as 
            an online way for artists to store and present their work portfolio of work online.
            <br/>
            <br/>
            See the sections on the Accordion below this for more detail about the other pages shown above in the app's header
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Gallery page: What is this page's purpose?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The concept for this page is to act as a homepage of sorts that people would see when first visiting the app.
            <br/>
            <br/>
            When a user enters this page they are greeted with an array of images layed out in a grid. More can be uploaded by any user
            <br/>
            This array of images is hosted on a google firebase cloud database and firestore.
            <br/>
            <br/>
            For the sake of presentation, user details are already pre-existing within each file before they are uploaded onto the page.
            <br/>
            This was done because I was unable to implement functionality on the app for users to add their details to images as they upload and then display images properly
            <br/>
            <br/>
            As of the completion of this project for the college deadliine, there is no way for users to delete images uploaded from the site itself
            <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Forum page: What is this page's purpose?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The idea of this page was to allow for artists and other users alike to make posts on the site for potentail work offers or comission alerts
            <br/>
            <br/>
            Before createing posts on this page, users must either register or sign into an account
            <br/>
            These posts and images are stored within the MongoDB Atlas database themselves and can be ediited by clicking the '...' at the top of the post
            or deleted with the delete button on the bottom of the post.
            <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </ThemeProvider>
    </div>
  );

};

export default AboutAccordion
