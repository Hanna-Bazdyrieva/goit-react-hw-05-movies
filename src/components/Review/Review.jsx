import { Container, Name, Text } from './Reviews.styled';

const Review = ({ review }) => {
  const { author, content } = review;
  return (
    <>
      <Container>
        <Name>{author}</Name>
        <Text>{content}</Text>
      </Container>
    </>
  );
};
export default Review;
