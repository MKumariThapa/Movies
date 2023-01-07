import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import PaginationComponent from "../../Components/Pagination";
import CardMovies from "../../Components/CardMovie/CardMovies";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [pagination, setPaginationNo] = useState(0);
  // f43ca99a0f63cb50e5c47d3389d8c171
  const API_KEY = process.env.REACT_APP_NOT_SECRET_KEY;
  const getDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
    );
    setContent(data.results);
    setPaginationNo(data.total_pages);
    console.log(data, "data");
  };
  useEffect(() => {
    getDataTrending();
  }, []);
  // getDataTrending();
  const handleClick = (number) => {
    setPageno(number);
  };
  useEffect(() => {
    // console.log("Trending Component didupdate mount");
    getDataTrending();
    //eslint-disable-next-line
  }, [pageno]);
  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            {" "}
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>
          {content && content.length > 0
            ? content.map((item) => {
                return <CardMovies key={item.id} data={item} mediatype="tv" />;
              })
            : "Loading Content"}
          {pagination && pagination > 1 ? (
            <PaginationComponent
              maxnum={pagination}
              activenum={pagination}
              handleClick={handleClick}
            />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
