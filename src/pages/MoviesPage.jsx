import {
  Title,
  StyledBar,
  SearchForm,
  SearchInput,
  ButtonSearch,
} from 'components/MoviesSearch/MoviesSearch.styled';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

const Movies = params => {
  const [input, setInput] = useState('');

  const handleInput = e => {
    setInput(e.target.value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit(input);
  // };
  return (
    <>
      <div>
        {/* <SearchForm></SearchForm>
      <Movielist></Movielist> */}
        <Title>Movies Search</Title>
        <StyledBar>
          <SearchForm
          //  onSubmit={handleSubmit}
          >
            <ButtonSearch type="submit">
              {/* <ButtonLabel class="button-label"> */}
              <GoSearch />
              {/* </ButtonLabel> */}
            </ButtonSearch>
            <SearchInput
              type="text"
              autocomplete="off"
              value={input}
              autoFocus
              placeholder="Search movie"
              onChange={handleInput}
            />
          </SearchForm>
        </StyledBar>
      </div>
    </>
  );
};

export default Movies;
