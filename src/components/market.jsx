import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import AppsIcon from "@material-ui/icons/Apps";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Menu from "./menu";

import { connect } from "react-redux";
const useStyles = theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  product: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
});

class Test extends Component {
  render() {
    const { classes, products, isLogin } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            {isLogin ? <Menu /> : <AppsIcon />}
            <Typography variant="h6" color="inherit" noWrap>
              Rental.io
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Book A Room
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" href="/signin">
                      sigin
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" href="/signup">
                      signup
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth={false}>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.results.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card className={classes.product.id}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={product.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>Rental Fee : ${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <VisibilityIcon />
                        -View
                      </Button>
                      <Button size="small" color="primary">
                        <AddShoppingCartIcon />
                        -Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products,
    count: state.products.count,
    isLogin: state.user.isLogin
  };
}

export default connect(mapStateToProps)(withStyles(useStyles)(Test));
// export default compose(
//   withStyles(useStyles, { name: "Test" }),
//   connect(mapStateToProps, null)
// )(Test);
