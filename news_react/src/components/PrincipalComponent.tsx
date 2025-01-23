import { Article } from "../types/Article"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import SingleArticle from "./SingleArticle"

const PrincipalComponent = () => {
    const [article, setArticle] = useState<Article[]>([])
    const url = 'https://api.spaceflightnewsapi.net/v4/articles'

    const getArticle = async() => {
        try {
            const response = await fetch(url)
            if(response.ok) {
                const data= await response.json()
                setArticle(data.results)
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


    return(
        <div>
        <h2>SPACEFLIGHT</h2>
        <Container>
          <Row className="justify-content-center">
            {article.map((article) => {
              return <SingleArticle article={article} key={article.id}/>
            })}
          </Row>
        </Container>
      </div>
    )
}

export default PrincipalComponent