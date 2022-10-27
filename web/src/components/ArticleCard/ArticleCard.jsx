import React from "react";
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge} from 'reactstrap'
import classes from './ArticleCard.module.css'

const ArticleCard = (props) => {
  return (
    <Card className={classes.ArticleCard} >
        <CardImg
            width="100%"
            src={require('../../assets/img/blog-1.jpg')}
            alt="Article Image"
            className={classes.CardImage}
        />
        <CardBody className={classes.CardBody}>
            <CardTitle className={classes.CardTitle}>
              {props.data.title}
            </CardTitle>
            <CardSubtitle className={classes.CardSubtitle}>
                <Badge className={classes.ArticleLabel}>
                  Label
                </Badge>
            </CardSubtitle>
        </CardBody>
    </Card>
  )
}

export default ArticleCard