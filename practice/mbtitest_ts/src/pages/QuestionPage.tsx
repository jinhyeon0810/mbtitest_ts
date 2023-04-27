import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

import { QuestionData } from "../store/Question/QuestionData";

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map((s) => {
      return s.id === type ? { id: s.id, score: s.score + ans } : s;
    });

    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
    // if (type === "EI") {
    //   //기존 스코어에 더한 새로운 스코어 값을 계산
    //   const addScore = totalScore[0].score + ans;
    //   //새로운 스코어를 반영한 새로운 객체
    //   const object = { id: "EI", score: addScore };
    //   //새로운 객체를 기존의 토탈 스코어에 반영
    //   totalScore.splice(0, 1, object);
    // } else if (type === "SN") {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: "SN", score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === "TF") {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: "TF", score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else {
    //   const addScore = totalScore[0].score + ans;
    //   const object = { id: "JP", score: addScore };
    //   totalScore.splice(0, 1, object);
    // }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{
              marginRight: "20px",
              width: "45%",
              minHeight: "200px",
              fontSize: "15pt",
            }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            className="btn-warning"
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
            style={{
              width: "45%",
              minHeight: "200px",
              fontSize: "15pt",
            }}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
  font-family: "Jalnan";
`;

// const Header = styled.div`
//   background: #ffa07a;
//   font-size: 40px;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   font-family: "Jalnan";
// `;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  margin-top: 20px;
  button {
    font-size: 20px;
  }
`;
