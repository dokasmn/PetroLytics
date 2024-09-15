import { StyledSearchBackground, StyledSearchContainer, IconContainer } from './Search.styles';

import searchLogo from '../../../assets/imgs/search_icon.svg'

const Search: React.FC = () => {
    return (
        <StyledSearchContainer>
            <StyledSearchBackground placeholder='Search oil wells' />
            <IconContainer>
                <img src={searchLogo} alt="search logo" />
            </IconContainer>
        </StyledSearchContainer>
    );
};

export default Search;
