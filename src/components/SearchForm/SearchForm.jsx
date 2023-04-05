import { useState } from 'react';
import {
  Title,
  StyledBar,
  Form,
  SearchInput,
  ButtonSearch,
} from './SearchForm.styled';
import { GoSearch } from 'react-icons/go';
import { useSearchParams } from 'react-router-dom';


const SearchForm = () => {
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); 

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(input? { query: input }: {});
    setInput('')
};

  return (
    <>
      <Title>Movies Search</Title>
      <StyledBar>
        <Form onSubmit={handleSubmit}>
          <ButtonSearch type="submit">
            <GoSearch />
          </ButtonSearch>
          <SearchInput
            type="text"
            autocomplete="off"
            value={input}
            autoFocus
            placeholder="Search movie"
            onChange={handleInput}
          />
        </Form>
      </StyledBar>
    </>
  );
};
export default SearchForm;
