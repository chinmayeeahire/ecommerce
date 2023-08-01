import { styled } from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import {mobile} from '../responsive';


const Container=styled.div`

`;

const Wrapper=styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer=styled.div`
   flex: 1;

`;

const Image=styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
   ${mobile({ height: "40vh" })}
`;

const InfoContainer=styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title=styled.h1`
  font-weight: 300;
`;

const Desc=styled.p`
  margin: 20px 0px;
`;

const Price=styled.span`
   font-weight: 100;
   font-size: 40px;
`;

const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter=styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle=styled.h1`
   font-size: 20px;
   font-weight:200;
`;
const FilterColor=styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
   margin:0px 5px;
   cursor: pointer;
`;
const FilterSize=styled.select`
   margin-left: 10px;

`;
const FilterSizeOption=styled.option`
   
`;
const AddContainer=styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount=styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button=styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight:500;

  &:hover{
    background-color: #f8f4f4;
  }
`;


const Product = () => {
  return (
    <Container>
       <Navbar />
       <Announcement />
       <Wrapper>
          <ImgContainer>
            <Image src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb8%2F9c%2Fb89ce4b2fac566a87e7177ff69dd06791542a05f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>Twill baseball jacket</Title>
            <Desc>Baseball jacket in twill with padded sleeves in woven fabric. Press-studs down the front and diagonal welt side pockets. Embroidered motif on the front, a ribbed collar and ribbing at the cuffs and hem. Lined.</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          </InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />

    </Container>
  )
}

export default Product
