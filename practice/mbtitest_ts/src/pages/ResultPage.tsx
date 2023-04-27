import React from "react";
import styled from "styled-components";
import { Button, Image } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ResultData } from "../store/Result/ResultData";
import Header from "../components/Header";
import 야옹이 from "../assets/cat/야옹이.jpg";
import { IResult } from "../store/Result/types";

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const TestResult = ResultData.find((cat: IResult) => {
    return cat.best === mbti;
    //예비집사 mbti == 내가 실제 클릭 후 나온 mbti
  });
  console.log(TestResult);

  const friendCat = ResultData.find((friend) => {
    return friend.best == TestResult?.mbti;
    // 예비집사 mbti == 고양이 mbti   즉 예비집사mbti랑 같은 고양이를 찾아 추천해줌
  });

  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>결과보기</Title>
          <ResultImage>
            <Image
              className="rounded-circle"
              src={TestResult?.image}
              width={350}
              height={350}
            />
          </ResultImage>
          <Desc>
            {TestResult?.best}형 예비집사님과 찰떡궁합인 고양이는{" "}
            {TestResult?.mbti}형 고양이 {TestResult?.name} 입니다.
          </Desc>
          <Desc>
            {TestResult?.name} 고양이는 {TestResult?.desc}
          </Desc>
          <BestDesc>
            나의 고양이와 잘 맞는 형제묘로는 {friendCat?.name} 입니다.
          </BestDesc>
        </ContentsWrapper>
      </Wrapper>
    </>
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

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 15pt;
`;

const BestDesc = styled.div`
  font-size: 15pt;
  color: blue;
`;
