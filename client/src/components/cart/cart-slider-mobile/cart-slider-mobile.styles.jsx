import styled from "styled-components"


export const SliderCartContainer = styled.div`
border-top: 1px solid var(--mobile-line);
border-bottom: 1px solid var(--mobile-line);
width: 120%;
padding:10px;
  h5{
    color:var(--mobile-slider-darker-color);
  }
  h4{
    color: var(--mobile-slider-text-color);
    font-weight: 400;
    font-size: 1rem;
    
    &.empty-message{
      font-size: 0.8rem;
      color:var(--pale-bg-hover);
    }
  }
`