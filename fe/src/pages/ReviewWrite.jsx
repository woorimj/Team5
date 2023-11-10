import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Rate from '@components/Rate';
import Dropdown from '@components/Dropdown';
import COLOR from '@styles/color';
import Header from '@common/Header';
import { PATH } from '@constants/path';
import FONT from '@styles/fonts';
import { ICON_NAME } from '@constants/iconName';
import Icon from '@common/Icon';

const reviewPH =
  '솔직하고 유용한 상품리뷰를 작성해주세요. 이 상품을 사용한 후\n어떤 점이 좋았나요? 이 상품을 다른 분에게 추천하시겠습니까?\n \n* 타인의 저작권을 침해하거나 근거 없는 악성비방글, 서비스의\n성격에 맞지 않는 글은 삭제 될 수 있으니 양해 부탁드립니다.';

const ReviewWrite = () => {
  // 설정된 rate 점수
  const [score, setScore] = useState(0);
  const updateScore = (newScore) => {
    setScore(newScore);
  };

  // dropdown 선택된 값
  const [select, setSelect] = useState('');
  const handleSelect = (newSelect) => {
    setSelect(newSelect);
  };

  console.log(select);
  console.log(score);
  // 입력 값
  const [inputs, setInputs] = useState({
    title: '',
    desc: '',
    img: '',
  });

  console.log(inputs);
  const { title, desc, img } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(inputs);
  };

  return (
    <Container>
      <Header title={'상품리뷰 작성'} backUrl={PATH.REVIEW_HOME} />
      <Submit onClick={handleSubmit}>작성하기</Submit>
      <form>
        <div className="dropdownBody">
          <Dropdown updateSelect={handleSelect} name="mall" />
        </div>
        <TitleBox>
          <input name="title" placeholder="제목" onChange={onChange} value={title} />
        </TitleBox>
        <div className="rateBody">
          <Rate size={20} updateScore={updateScore} />
        </div>
        <ReviewBox>
          <textarea name="desc" placeholder={reviewPH} onChange={onChange} value={desc}></textarea>
        </ReviewBox>
        <AddPhotoBox>
          <Icon name={ICON_NAME.CAMERA} iconColor={COLOR.green500} width={20} height={20}></Icon>
          <p>사진 추가하기</p>
        </AddPhotoBox>
      </form>
    </Container>
  );
};

export default ReviewWrite;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.white};
  overflow: auto;

  .dropdownBody {
    padding: 20px 0 20px 0;
  }

  .rateBody {
    padding: 20px;
    border-bottom: 0.5px solid ${COLOR.gray300};
  }
`;

const Submit = styled.button`
  background-color: transparent;
  width: 70px;
  ${FONT.headline}
  color: ${COLOR.green500};
`;

const TitleBox = styled.div`
  padding: 15px 20px 15px 20px;
  border-top: 0.5px solid ${COLOR.gray300};
  border-bottom: 0.5px solid ${COLOR.gray300};

  input {
    ${FONT.body}
    outline: none;
    width: 100%;
    &::placeholder {
      color: ${COLOR.gray300};
    }
  }
`;

const ReviewBox = styled.div`
  padding: 20px;
  border-bottom: 0.5px solid ${COLOR.gray300};
  textarea {
    ${FONT.footnote}
    outline: none;
    width: 100%;
    height: 335px;
    &::placeholder {
      color: #a7a7a7;
      width: 100%;
    }
  }
`;

const AddPhotoBox = styled.button`
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${COLOR.gray100};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);

  p {
    ${FONT.subhead}
    color: ${COLOR.green500};
    margin-left: 13px;
    margin-bottom: 2px;
    display: flex;
  }
`;