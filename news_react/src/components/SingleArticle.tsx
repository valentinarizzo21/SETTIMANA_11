import { Col, Card } from "react-bootstrap"
import { Article } from "../types/Article"
import { Link } from "react-router-dom"

interface SingleArticleProps {
    article: Article
  }

const SingleArticle = (props: SingleArticleProps) => {
    return (
        <Col xs={12} md={4} key={props.article.id}>
          <Card>
            <Card.Img variant="top" src={props.article.image_url} />
            <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.published_at}</Card.Text>
          <Link to={`/article/${props.article.id}`}>Leggi di più</Link>
        </Card.Body>
          </Card>
        </Col>
      )
}
export default SingleArticle