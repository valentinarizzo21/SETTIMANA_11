/* eslint-disable react-hooks/exhaustive-deps */
import { Article } from "../types/Article";
import { Col, Card } from "react-bootstrap"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {

    const param = useParams()
    const [article, setArticle] = useState<Article>()
    const url = `https://api.spaceflightnewsapi.net/v4/articles/${param.id}`

    const getArticle = async() => {
        try {
            const response = await fetch(url)
            if(response.ok) {
                const data= await response.json()
                setArticle(data)
            } else {
                throw new Error('errore nel recupero dei dati')
            }
        } catch(Error) {
            console.log('error', Error)
        }
    }

    useEffect(() => {
        getArticle()
    }, [])

    return (
        <Col xs={12} md={4} key={article?.id}>
          <Card>
            <Card.Img variant="top" src={article?.image_url} />
            <Card.Body>
          <Card.Title>{article?.title}</Card.Title>
          <Card.Text>{article?.published_at}</Card.Text>
        </Card.Body>
          </Card>
        </Col>
      )
}

export default ArticleDetails
