import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap'

export default function CardComp(props) {

  const cardData = {
    judul : props.judul,
    tanggal : props.tanggal,
    id : props.id
  }

  return (
    <div>
        <Card
        style={{
            width: '18rem'
        }}
        >
        <CardImg
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
            {props.judul}
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            {props.judul}
            </CardSubtitle>
            <CardText>
            {props.tanggal}
            </CardText>
            <Button>
              <Link to={{pathname : `/detail/${props.id}`}} state={cardData}>
              Detail
              </Link>
            </Button>
        </CardBody>
        </Card>
    </div>
  )
}
