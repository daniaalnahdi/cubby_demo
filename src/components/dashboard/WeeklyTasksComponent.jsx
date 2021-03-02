import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';



const cardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
}));

const barStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
        width: 700,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const WeeklyTasksComponent = () => {
    const cards = cardStyles();
    const bars = barStyles();
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
            <div className={bars.root}>
                <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Monday" {...a11yProps(0)} />
                    <Tab label="Tuesday" {...a11yProps(1)} />
                    <Tab label="Wednesday" {...a11yProps(2)} />
                    <Tab label="Thursday" {...a11yProps(3)} />
                    <Tab label="Friday" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            </div>
            
            <TabPanel value={value} index={0}>
                <div className={cards.root}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image
                                //Add emoji img here
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Fossiles Video
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Homework
                                </Button>
                            <Button size="small" color="primary">
                                In-Class
                                </Button>
                        </CardActions>
                    </Card>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                            //Add emoji img here
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Math: Addition
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Homework
                                </Button>
                            <Button size="small" color="primary">
                                In-Class
                                </Button>
                        </CardActions>
                    </Card>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                //Add emoji img here
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Name the planets
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Homework
                                </Button>
                            <Button size="small" color="primary">
                                In-Class
                                </Button>
                        </CardActions>

                    </Card>
                        </div>
                        </TabPanel>
                    <TabPanel value={value} index={1}>
                        Classes for Tuesday
                        </TabPanel>
                    <TabPanel value={value} index={2}>
                        Classes for Wednesday
                        </TabPanel>
                    <TabPanel value={value} index={3}>
                        Classes for Thursday
                        </TabPanel>
                    <TabPanel value={value} index={4}>
                        Classes for Friday
                        </TabPanel>
                </div>
        
        
    )
}

export default WeeklyTasksComponent
